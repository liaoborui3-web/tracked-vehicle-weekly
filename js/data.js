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
    media: [
      {
        type: "image",
        src: "media/week06/rviz-gazebo-mapping.png",
        caption: "建图定位组在 RViz/Gazebo 中加载履带车模型，进行仿真建图环境验证。"
      }
    ]
  },
  {
    week: 7,
    date: "4.13 - 4.19",
    title: "第7周项目周报：控制链路工程化与仿真建图继续推进",
    summary: "本周围绕 ROS2 控制与仿真链路做工程化补齐，完善手柄操控文档、底盘串口驱动、遥控节点和 cmd_vel 安全多路复用；同时推进仿真建图、实车 Fast-LIO 启动排查，以及导航避障参数和接口配置。",
    progress: 45,
    tags: ["控制通信", "ROS2", "实车遥控", "Gazebo", "Fast-LIO", "导航避障"],
    goals: [
      "将遥控、底盘通信与安全 mux 从零散脚本收敛为可复用的 launch 入口。",
      "继续完善仿真建图代码，并推进黑车 jwb3 上的实车建图测试。",
      "在上周导航基础上调整避障功能，优化寻路逻辑并配置项目车辆接口。"
    ],
    tasks: [
      "控制通信组完善手柄操控技术文档，纠正冗余步骤并补充更多使用场景。",
      "控制通信组在 control 与 robot 包中新增底盘串口驱动、手柄遥控节点、cmd_vel 安全多路复用等 Python 节点。",
      "控制通信组配套补充 vehicle_chassis、wifi_gamepad_teleop 等 launch，使实车遥控与上层速度指令衔接更清晰。",
      "控制通信组更新 Gazebo 启动和 sim_gamepad 流程，补充 xbox_teleop_sim 配置，便于仿真下手柄联调。",
      "控制通信组在车主机 jwb3 与远端机统一 ROS_DOMAIN_ID 并保证网络互通，通过 /cmd_vel 验证跨机 DDS 通信。",
      "控制通信组启动 control_py 的 control_node，经 /crawler/command 下发 remote_mode、stop 等模式，并完成实车随速度指令运动验证。",
      "控制通信组使用 joy 与 teleop_twist_joy 完成实车手柄遥控，明确使能键、死区和低速参数 yaml 对及时停车的作用。",
      "建图定位组继续改进仿真建图代码，仿真模拟部分基本完善。",
      "建图定位组在黑车 jwb3 上测试 Fast-LIO，确认 laser_mapping 节点可启动，并订阅 /livox/lidar 与 /imu/data。",
      "导航避障组在上周导航基础上调整避障功能和寻路逻辑，开展多项测试，并逐步配置项目车辆环境与接口。"
    ],
    issues: [
      "Fast-LIO 虽可启动，但暂未收到传感器节点发布的数据，需要继续排查车主机网卡和雷达 IP。",
      "实车与仿真并行调试入口仍在收敛过程中，需要继续验证 launch 组合的稳定性。",
      "导航避障接口仍在配置阶段，需要与项目实际车辆模型和控制接口进一步统一。"
    ],
    nextPlan: [
      "继续推进实车 Fast-LIO 建图的数据链路排查，重点检查网卡、雷达 IP 和传感器发布状态。",
      "继续固化遥控、底盘通信、安全 mux 与 Gazebo 手柄联调的 launch 使用流程。",
      "继续完善导航避障环境和接口配置，开展更多避障与路径规划测试。"
    ],
    media: [
      {
        type: "image",
        src: "media/week07/gazebo-fast-lio-simulation.png",
        caption: "建图定位组在 Gazebo 与 RViz 中进行 Fast-LIO 仿真建图验证，显示激光扫描、点云目标和仿真场景。"
      }
    ]
  },
  {
    week: 10,
    date: "5.4 - 5.10",
    title: "第10周项目周报：Robosense 实车建图链路跑通",
    summary: "建图组本周重点推进实车建图：完成 Robosense 雷达网络配置与驱动调通，稳定发布 /rslidar_points；KISS-ICP 输出里程计和 TF，并进一步打通 /rslidar_points -> /scan -> /map 的 2D 栅格建图链路。",
    progress: 58,
    tags: ["建图定位", "Robosense", "KISS-ICP", "LaserScan", "RViz", "实车建图"],
    goals: [
      "推进履带车实车侧 Robosense 雷达建图链路。",
      "验证 KISS-ICP 里程计输出与车辆位姿实时变化。",
      "完成从点云到 LaserScan 再到 2D 栅格地图的建图显示。"
    ],
    tasks: [
      "完成实车侧雷达网络配置与驱动调通，确认 Robosense 雷达可稳定发布 /rslidar_points。",
      "确认 /rslidar_points 发布频率约 10 Hz，满足后续建图链路调试需求。",
      "成功运行 KISS-ICP，并输出 /kiss/odometry 和 odom -> robosense_Link TF。",
      "移动车辆时确认 KISS-ICP 位姿能够实时变化。",
      "进一步实现 /rslidar_points -> /scan -> /map 的栅格建图链路。",
      "通过 RViz 成功显示 2D 栅格地图、实时 LaserScan 和车辆位姿。"
    ],
    issues: [
      "当前重点完成链路跑通，后续仍需对建图质量、地图稳定性和实车移动场景进行持续验证。",
      "点云、LaserScan、里程计和 TF 的时间同步与参数配置需要在后续导航接入前继续检查。"
    ],
    nextPlan: [
      "继续完善 Robosense 实车建图链路的使用流程和交付文档。",
      "补充验证 2D 栅格地图导出方式，为 Nav2 导航地图使用做准备。",
      "继续检查实车移动过程中的地图质量、定位稳定性和 TF 链路。"
    ],
    media: [
      {
        type: "image",
        src: "media/week10/robosense-kiss-icp-frequency.png",
        caption: "Robosense 点云与 KISS-ICP 里程计频率验证，/rslidar_points 与 /kiss/odometry 均接近 10 Hz。"
      },
      {
        type: "image",
        src: "media/week10/odom-robosense-tf.png",
        caption: "使用 tf2_echo 验证 odom -> robosense_Link 坐标变换，车辆移动时位姿数据实时更新。"
      },
      {
        type: "image",
        src: "media/week10/rviz-pointcloud-map.png",
        caption: "RViz 中显示 Robosense 点云与 KISS-ICP 位姿累计结果，用于验证实车环境结构建图。"
      },
      {
        type: "image",
        src: "media/week10/rviz-2d-grid-map.png",
        caption: "RViz 中显示 /rslidar_points -> /scan -> /map 链路生成的 2D 栅格地图和车辆位姿。"
      }
    ]
  },
  {
    week: 11,
    date: "5.11 - 5.17",
    title: "第11周项目周报：地图导出与深度相机实车接入",
    summary: "建图组本周继续完善 Robosense 建图链路交付流程，验证 2D 栅格地图导出；同时完成 Orbbec Astra Pro Plus 深度相机在履带车上的实车接入，并通过远程 RViz 查看彩色图、深度图和点云。",
    progress: 68,
    tags: ["建图定位", "Robosense", "地图导出", "Orbbec", "深度相机", "RViz"],
    goals: [
      "完善 Robosense 建图链路的地图保存与交付流程。",
      "完成 Orbbec Astra Pro Plus 深度相机在履带车上的识别和 ROS2 话题发布。",
      "通过远程 RViz 验证彩色图、深度图和点云显示。"
    ],
    tasks: [
      "在已有栅格建图基础上，使用 nav2_map_server 的 map_saver_cli 将当前 /map 保存为 .pgm + .yaml 格式。",
      "确认 .pgm 文件本身是二进制灰度图，为后续地图查看和导航加载提供依据。",
      "在小车 Linux 上确认 Orbbec Astra Pro Plus 深度相机硬件可被识别。",
      "排查发现 OrbbecSDK_ROS2 v2-main 分支不适配旧款 Astra/OpenNI 类设备。",
      "切换到 OrbbecSDK_ROS2 main 分支后成功识别设备并发布 ROS2 话题。",
      "跑通 /camera/color/image_raw、/camera/depth/image_raw 和 /camera/depth/points。",
      "通过 VMware Ubuntu 虚拟机远程 RViz 成功查看彩色图、深度图和点云。"
    ],
    issues: [
      "OrbbecSDK_ROS2 v2-main 分支与旧款 Astra/OpenNI 类设备不适配，需要使用 main 分支。",
      "深度相机已经完成话题发布和远程显示，后续仍需验证在车体安装、线缆连接和长时间运行下的稳定性。",
      "地图导出流程已验证，但后续需要结合 Nav2 地图加载继续检查坐标系和分辨率配置。"
    ],
    nextPlan: [
      "继续整理 Robosense 建图链路和地图导出流程，形成可复现操作步骤。",
      "进一步验证深度相机在履带车上的稳定接入和点云质量。",
      "将保存的 2D 栅格地图用于后续 Nav2 导航配置与短距离导航测试。"
    ],
    media: []
  },
  {
    week: 12,
    date: "5.18 - 5.24",
    title: "第12周项目周报：电台遥控小蓝与 Nav2 初步接入",
    summary: "本周完成主控工控机经自组网电台遥控小蓝履带车的联调，打通手柄—电台—小蓝控制链路；建图组完成 Robosense 稠密点云地图和 Nav2 短距离导航初步尝试，并开始梳理 TF 链路稳定性问题。",
    progress: 78,
    tags: ["控制通信", "自组网电台", "小蓝履带车", "Robosense", "PCD", "Nav2", "TF"],
    goals: [
      "完成主控工控机通过自组网电台遥控小蓝履带车。",
      "排查蓝车深度相机无法复现问题。",
      "基于 Robosense 点云和 KISS-ICP 里程计实现稠密点云地图。",
      "开始接入 Nav2，使用已保存的 2D 栅格地图进行短距离导航尝试。"
    ],
    tasks: [
      "控制通信组将实车对象切换为小蓝，配置小蓝 192.168.10.100 与主控 192.168.10.101。",
      "控制通信组在主控部署手柄遥操作节点并发布 /cmd_vel，在小蓝 control_py 工作区同步编译相关程序。",
      "控制通信组采用原车 crawler_control_node 与履带串口 /dev/ttyACM4、9600 波特率实现底盘驱动。",
      "控制通信组解决包名不一致、launch 配置、编译缓存冲突及占位串口协议无法动车等问题。",
      "控制通信组实现手柄—电台—小蓝完整控制链路，并通过关闭 WiFi 对照实验确认通信走电台。",
      "建图组排查蓝车无法复现深度相机功能的问题，判断主要由相机接线硬件问题导致主机未识别深度相机。",
      "建图组基于 Robosense 点云和 KISS-ICP 里程计，实现点云按里程计位姿累计，并在 RViz 显示三维累计点云地图。",
      "建图组支持将稠密点云地图保存为 PCD 文件，实车测试中可看到环境结构持续累积并保留历史帧。",
      "建图组编写 Nav2 相关配置文件和启动文件，使用保存的 2D 栅格地图作为导航地图。",
      "建图组将 Robosense 点云转换成 /scan 供 AMCL 和 Nav2 使用，并完成远程 RViz 显示、地图加载、QoS 配置和初始位姿发布。",
      "建图组初步验证 /map、/scan、/amcl_pose 等关键话题。"
    ],
    issues: [
      "蓝车深度相机功能无法复现，初步判断是相机接线硬件问题导致主机未识别。",
      "Nav2 尚未完成完整闭环导航，主要问题集中在 TF 链路稳定性。",
      "map -> odom -> base_link 整条坐标变换链仍需继续整理和稳定。"
    ],
    nextPlan: [
      "优先梳理 Nav2 启动流程和 TF 发布逻辑。",
      "确保里程计、定位和车体坐标系稳定连接。",
      "在 TF 链路稳定后继续进行短距离导航测试。",
      "继续规范小蓝电台遥控流程：先 ping 通小蓝，再分别启动 radio_xiaolan_native 与 radio_gamepad_teleop。"
    ],
    media: []
  },
  {
    week: 13,
    date: "5.25 - 5.31",
    title: "第13周项目周报：Robosense + Nav2 短距离导航测试",
    summary: "建图组本周重点推进 Robosense + Nav2 短距离导航测试：在 RViz 中加载已建 2D 栅格地图，完成初始位姿校准后可选择目标点，Nav2 生成规划路径并输出速度指令控制履带车朝目标方向前进。",
    progress: 88,
    tags: ["建图定位", "Robosense", "Nav2", "AMCL", "KISS-ICP", "安全停车"],
    goals: [
      "推进 Robosense + Nav2 短距离导航测试。",
      "完成点云、里程计、LaserScan、AMCL 定位和 Nav2 控制输出的联调。",
      "针对导航测试中的停车可靠性问题补充安全机制。"
    ],
    tasks: [
      "在 RViz 中加载之前建好的 2D 栅格地图，并完成小车初始位姿校准。",
      "在地图上选定目标点后，验证 Nav2 可显示从当前位置到目标点的规划路径。",
      "验证 Nav2 输出速度指令，控制履带车朝目标方向前进。",
      "完成 Robosense 点云、KISS-ICP 里程计、LaserScan 转换、AMCL 定位和 Nav2 控制输出的联调。",
      "通过修正雷达时间戳配置，使 /scan、/kiss/odometry 和 TF 时间同步恢复正常。",
      "成功建立 map -> base_link 定位链路。",
      "验证 Nav2 可以正常输出 /cmd_vel 和 /cmd_vel_nav。",
      "针对测试时停车不可靠的问题，增加 /cmd_vel 超时自动停止机制。",
      "验证短时速度指令结束后车辆可以自动停止，提升后续导航调试安全性。"
    ],
    issues: [
      "短距离导航已能规划路径并输出速度控制，但仍需继续扩大测试场景和验证稳定性。",
      "停车可靠性曾存在安全风险，已通过 /cmd_vel 超时自动停止机制进行改进。",
      "后续仍需持续关注时间戳、TF 同步和定位链路在不同实车测试场景下的稳定性。"
    ],
    nextPlan: [
      "继续开展更完整的短距离导航实车测试，验证不同目标点和不同路径下的稳定性。",
      "继续完善 Nav2 参数、AMCL 定位和 TF 同步配置。",
      "在安全停车机制基础上推进更长时间、更复杂场景的导航调试。"
    ],
    media: []
  }
];
