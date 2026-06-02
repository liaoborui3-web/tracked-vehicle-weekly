const reports = Array.isArray(window.WEEKLY_REPORTS) ? window.WEEKLY_REPORTS : [];
const timeline = document.querySelector("#timeline");
const searchInput = document.querySelector("#searchInput");
const filterBox = document.querySelector("#filterBox");
const modal = document.querySelector("#reportModal");
const modalContent = document.querySelector("#modalContent");

let activeTag = "全部";

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function countMedia(report, type) {
  return (report.media || []).filter(item => item.type === type).length;
}

function initStats() {
  const weekCount = reports.length;
  const taskCount = reports.reduce((sum, report) => sum + (report.tasks || []).length, 0);
  const mediaCount = reports.reduce((sum, report) => sum + (report.media || []).length, 0);
  const issueCount = reports.reduce((sum, report) => sum + (report.issues || []).length, 0);

  document.querySelector("#weekCount").textContent = weekCount;
  document.querySelector("#taskCount").textContent = taskCount;
  document.querySelector("#mediaCount").textContent = mediaCount;
  document.querySelector("#issueCount").textContent = issueCount;
}

function initFilters() {
  const tags = ["全部", ...new Set(reports.flatMap(report => report.tags || []))];
  filterBox.innerHTML = tags.map(tag => `
    <button class="filter-btn ${tag === activeTag ? "active" : ""}" data-tag="${escapeHTML(tag)}">${escapeHTML(tag)}</button>
  `).join("");

  filterBox.addEventListener("click", event => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;
    activeTag = button.dataset.tag;
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderReports();
  });
}

function matchesSearch(report, keyword) {
  if (!keyword) return true;
  const text = [
    report.week,
    report.date,
    report.title,
    report.summary,
    ...(report.tags || []),
    ...(report.goals || []),
    ...(report.tasks || []),
    ...(report.issues || []),
    ...(report.nextPlan || [])
  ].join(" ").toLowerCase();
  return text.includes(keyword.toLowerCase());
}

function renderReports() {
  const keyword = searchInput.value.trim();
  const filtered = reports.filter(report => {
    const tagOk = activeTag === "全部" || (report.tags || []).includes(activeTag);
    return tagOk && matchesSearch(report, keyword);
  });

  if (!filtered.length) {
    timeline.innerHTML = `<div class="empty">没有找到匹配的周报。可以换一个关键词，或者检查 js/data.js 中的标签和内容。</div>`;
    return;
  }

  timeline.innerHTML = filtered.map((report, index) => {
    const imageCount = countMedia(report, "image");
    const videoCount = countMedia(report, "video");
    const tagsHTML = (report.tags || []).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("");

    return `
      <article class="week-card" data-week="${report.week}" style="animation-delay: ${index * 0.08}s">
        <div>
          <div class="week-meta">
            <span class="week-no">第 ${escapeHTML(report.week)} 周</span>
            <span>${escapeHTML(report.date)}</span>
          </div>
          <h3>${escapeHTML(report.title)}</h3>
          <p class="summary">${escapeHTML(report.summary)}</p>
          <div class="tags">${tagsHTML}</div>
        </div>
        <aside class="week-progress">
          <div class="progress-title">
            <span>阶段进度</span>
            <strong>${Number(report.progress || 0)}%</strong>
          </div>
          <div class="bar"><i style="width: ${Number(report.progress || 0)}%"></i></div>
          <div class="media-pills">
            <span>图片 ${imageCount}</span>
            <span>视频 ${videoCount}</span>
            <span>事项 ${(report.tasks || []).length}</span>
          </div>
        </aside>
      </article>
    `;
  }).join("");
}

function listHTML(items = []) {
  if (!items.length) return "<li>暂无记录</li>";
  return items.map(item => `<li>${escapeHTML(item)}</li>`).join("");
}

function mediaHTML(items = []) {
  if (!items.length) return `<div class="empty">这一周还没有上传图片或视频。</div>`;

  return `
    <div class="media-grid">
      ${items.map(item => {
        const caption = `<p class="media-caption">${escapeHTML(item.caption || "项目素材")}</p>`;
        if (item.type === "video") {
          return `
            <figure class="media-item">
              <video controls preload="metadata" ${item.poster ? `poster="${escapeHTML(item.poster)}"` : ""}>
                <source src="${escapeHTML(item.src)}" type="video/mp4" />
                当前浏览器不支持视频播放。请确认视频格式为 mp4，或使用新版浏览器打开。
              </video>
              ${caption}
            </figure>
          `;
        }
        return `
          <figure class="media-item">
            <img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.caption || "项目图片")}" loading="lazy" />
            ${caption}
          </figure>
        `;
      }).join("")}
    </div>
  `;
}

function openReport(week) {
  const report = reports.find(item => String(item.week) === String(week));
  if (!report) return;

  modalContent.innerHTML = `
    <p class="week-no">第 ${escapeHTML(report.week)} 周</p>
    <h2 class="modal-title" id="modalTitle">${escapeHTML(report.title)}</h2>
    <p class="modal-date">${escapeHTML(report.date)} · 阶段进度 ${Number(report.progress || 0)}%</p>
    <p class="summary">${escapeHTML(report.summary)}</p>
    <div class="tags">${(report.tags || []).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>

    <div class="detail-grid">
      <section class="detail-block">
        <h4>本周目标</h4>
        <ul>${listHTML(report.goals)}</ul>
      </section>
      <section class="detail-block">
        <h4>完成内容</h4>
        <ul>${listHTML(report.tasks)}</ul>
      </section>
      <section class="detail-block">
        <h4>问题与改进</h4>
        <ul>${listHTML(report.issues)}</ul>
      </section>
      <section class="detail-block">
        <h4>下周计划</h4>
        <ul>${listHTML(report.nextPlan)}</ul>
      </section>
    </div>

    <h3>图片与视频记录</h3>
    ${mediaHTML(report.media)}
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

timeline.addEventListener("click", event => {
  const card = event.target.closest(".week-card");
  if (!card) return;
  openReport(card.dataset.week);
});

modal.addEventListener("click", event => {
  if (event.target.dataset.close) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

searchInput.addEventListener("input", renderReports);

initStats();
initFilters();
renderReports();
