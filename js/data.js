// 在这里维护每周周报数据。
// 新增周报时，复制一个对象，修改 week、date、title、summary、progress、tags、goals、tasks、issues、nextPlan 和 media 即可。
// 图片/视频路径示例：media/week14/xxx.jpg 或 media/week14/demo.mp4

window.WEEKLY_REPORTS = [
  {
    week: 6,
    date: "4.6 - 4.12",
    title: "第6周项目周报：控制通信、建图定位与导航避障启动推进",
    summary: "本周围绕履带车控制链路、SLAM 建图定位和 Nav2 导航避障三条线同步推进：完成手柄到 /cmd_vel 的上位机映射、Gazebo 差速履带仿真、跨机 ROS2 通信配置，并开展建图理论学习、激光点云观测和 Nav2 虚拟导航验证。",
    progress: 35,
    tags: ["控制通信", "ROS2", "Gazebo", "SLAM", "Nav2", "导航避障"],
    goals: [
      "推进“游戏手柄—上位机—ROS2—车载主控—底盘执行”的控制通信链路。",
      "学习 SLAM 建图与多传感器融合理论，熟悉履带车实车连接和激光传感器使用。",
      "掌握 Nav2 导航库的配置与使用流程，验证虚拟地图中的自主导航能力。"
    ],
    tasks: [
      "控制与通信组完成手柄驱动与 teleop_twist_joy 映射，输出标准 geometry_msgs/Twist 消息到 /cmd_vel。",
      "控制与通信组在 Gazebo 中完成差速履带仿真验证，并配置 world 文件中的 model://robot 资源路径，保证模型和差速插件正常加载。",
      "控制与通信组完成虚拟机与车载机同局域网桥接，统一 ROS_DOMAIN_ID，实现跨机 ROS2 话题发现。",
      "控制与通信组补充车载端安全融合、cmd_vel 差速解算与串口下发占位节点，为后续 RS485 实车对接、遥控/自动模式切换和超时停车机制打基础。",
      "建图定位组查阅 SLAM 建图与多传感器融合文献，学习静态建图不足、建图算法约束原理以及不同耦合层级的利弊。",
      "建图定位组了解 IMU、Nav2 等部件的作用与外形，完成开题报告写作。",
      "建图定位组在师兄指导下熟悉履带车 SSH 连接方式，进行激光传感器启用并观测实时点云图。",
      "建图定位组完成 Gazebo、RViz 模拟仿真建图学习，熟悉实车履带车相关操作。",
      "导航避障组学习并实践 Nav2 导航库，完成样例车与虚拟地图对接，实现路径规划、避障和点位到达等自主导航功能。"
    ],
    issues: [
      "RS485 实车对接尚未完成，当前串口下发仍为占位节点，需要后续接入真实底盘通信。",
      "实车建图尝试尚未成功，需要继续排查实车传感器、通信和建图参数配置。",
      "当前 Nav2 验证基于样例车模型，后续需要替换为与履带车一致的虚拟模型并统一接口。",
      "点云在近距离区域较清晰，远距离区域较稀疏，后续建图时需要结合传感器视场和参数继续优化。"
    ],
    nextPlan: [
      "继续推进 RS485 实车底盘对接，完善遥控/自动模式切换、超时停车等安全机制。",
      "继续推进实车建图，结合 Gazebo、RViz 仿真经验排查实车建图失败原因。",
      "将 Nav2 仿真中的样例车替换为履带车模型，统一控制接口并进行更贴近实车的导航避障仿真。"
    ],
    media: []
  },
  {
    week: 7,
    date: "4.13 - 4.19",
    title: "第7周项目周报",
    summary: "待填写本周工作概述。",
    progress: 0,
    tags: ["待填写"],
    goals: [],
    tasks: [],
    issues: [],
    nextPlan: [],
    media: []
  },
  {
    week: 10,
    date: "5.4 - 5.10",
    title: "第10周项目周报",
    summary: "待填写本周工作概述。",
    progress: 0,
    tags: ["待填写"],
    goals: [],
    tasks: [],
    issues: [],
    nextPlan: [],
    media: []
  },
  {
    week: 11,
    date: "5.11 - 5.17",
    title: "第11周项目周报",
    summary: "待填写本周工作概述。",
    progress: 0,
    tags: ["待填写"],
    goals: [],
    tasks: [],
    issues: [],
    nextPlan: [],
    media: []
  },
  {
    week: 12,
    date: "5.18 - 5.24",
    title: "第12周项目周报",
    summary: "待填写本周工作概述。",
    progress: 0,
    tags: ["待填写"],
    goals: [],
    tasks: [],
    issues: [],
    nextPlan: [],
    media: []
  },
  {
    week: 13,
    date: "5.25 - 5.31",
    title: "第13周项目周报",
    summary: "待填写本周工作概述。",
    progress: 0,
    tags: ["待填写"],
    goals: [],
    tasks: [],
    issues: [],
    nextPlan: [],
    media: []
  }
];
