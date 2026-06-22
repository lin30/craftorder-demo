const craftProfiles = {
  paper: {
    name: "剪纸",
    motif: "城市纹样",
    course: "宋韵剪纸研学课：一张红纸里的城市纹样",
    takeaway: "剪纸作品可装裱带走",
    age: "8 岁以上",
    colors: ["#a83f35", "#2b2923", "#e5c16b", "#f5e7cf"],
    objectives: [
      "认识剪纸中的对称、留白与吉祥纹样。",
      "用城市地标提炼一个可剪、可讲述的个人图案。",
      "完成一幅可展示的剪纸作品，并说出图案含义。"
    ],
    tasks: [
      ["看", "观察 3 种传统纹样，圈出最想保留的线条。"],
      ["做", "用折、描、剪三个步骤完成个人纹样。"],
      ["讲", "用 30 秒介绍作品里的城市记忆。"]
    ],
    notes: [
      ["工具安全", "提前准备儿童安全剪刀，复杂镂空由老师示范。"],
      ["材料备份", "每位学生至少 2 张练习纸，避免一次失误影响体验。"],
      ["成果展示", "课程末尾用一面临时成果墙增强仪式感。"]
    ]
  },
  dye: {
    name: "扎染",
    motif: "水纹与花结",
    course: "蓝白扎染研学课：把一块布变成流动的图案",
    takeaway: "扎染方巾可晾干带走",
    age: "7 岁以上",
    colors: ["#315c83", "#f4f0e7", "#2e6d62", "#b7c3d4"],
    objectives: [
      "理解扎、夹、染对图案形成的影响。",
      "学习天然染色与生活织物之间的关系。",
      "完成一块方巾，并记录自己的图案实验。"
    ],
    tasks: [
      ["看", "比较圆形、条纹、云纹三种扎法效果。"],
      ["做", "选择一种扎法完成方巾染色。"],
      ["记", "写下扎法、浸染时间和最终图案变化。"]
    ],
    notes: [
      ["场地", "需要可清洗桌面、围裙、一次性手套和晾晒区。"],
      ["节奏", "染色等待时间可穿插非遗故事和图案猜想。"],
      ["卫生", "低龄学生分组操作，统一回收染液和手套。"]
    ]
  },
  fan: {
    name: "漆扇",
    motif: "流动色漆",
    course: "国风漆扇体验课：让颜色在水面开花",
    takeaway: "漆扇成品可带走",
    age: "9 岁以上",
    colors: ["#2e6d62", "#a83f35", "#d5a23b", "#f7f1e5"],
    objectives: [
      "认识漆扇的材料、纹理和色彩偶然性。",
      "学习配色、入水、提扇三步操作。",
      "完成一把有个人色彩主题的漆扇。"
    ],
    tasks: [
      ["配", "选择主色、辅色和留白比例。"],
      ["试", "用练习片观察颜料扩散方向。"],
      ["成", "完成漆扇并给作品命名。"]
    ],
    notes: [
      ["防污", "桌面需铺防水布，学生佩戴围裙和手套。"],
      ["控量", "每组限量滴色，避免水面过度混浊。"],
      ["拍照", "提扇瞬间适合做短视频传播素材。"]
    ]
  },
  bamboo: {
    name: "竹编",
    motif: "经纬结构",
    course: "竹编入门研学课：用经纬做一个小竹盘",
    takeaway: "竹编杯垫或小竹盘可带走",
    age: "10 岁以上",
    colors: ["#a86f25", "#e7c47e", "#2e6d62", "#40372a"],
    objectives: [
      "理解竹篾经纬交错的结构逻辑。",
      "学习压一挑一的基础编织方法。",
      "完成一个可使用的小型竹编作品。"
    ],
    tasks: [
      ["认", "识别竹篾正反面和纹理方向。"],
      ["编", "完成 6 行以上基础经纬编织。"],
      ["修", "整理边缘并检查结构是否牢固。"]
    ],
    notes: [
      ["年龄限制", "竹篾边缘可能刮手，低龄学生需使用预处理材料。"],
      ["助教", "16 人以上建议配置 1 名助教。"],
      ["展示", "适合与环保、乡土材料主题结合。"]
    ]
  },
  shadow: {
    name: "皮影",
    motif: "角色与关节",
    course: "皮影小剧场研学课：让角色在光里动起来",
    takeaway: "皮影角色卡可带走",
    age: "8 岁以上",
    colors: ["#2b2923", "#a83f35", "#e6b56f", "#315c83"],
    objectives: [
      "了解皮影角色、光源和幕布的关系。",
      "制作一个可活动的角色卡。",
      "小组完成 1 分钟光影故事。"
    ],
    tasks: [
      ["选", "选择一个角色并确定动作。"],
      ["装", "连接关节与操作杆。"],
      ["演", "在幕布后完成小组演出。"]
    ],
    notes: [
      ["空间", "需要遮光角落、幕布和稳定光源。"],
      ["分组", "3-4 人一组，分别负责角色、旁白、操作。"],
      ["版权", "故事脚本使用原创校园/城市主题。"]
    ]
  },
  sachet: {
    name: "香囊",
    motif: "节气与草本",
    course: "节气香囊研学课：把草本气味装进布袋",
    takeaway: "香囊作品可带走",
    age: "6 岁以上",
    colors: ["#a83f35", "#2e6d62", "#d5a23b", "#785a42"],
    objectives: [
      "认识端午、节气和香囊习俗。",
      "学习基础缝合、填充和配色。",
      "完成一个具有祝福含义的香囊。"
    ],
    tasks: [
      ["闻", "分辨 3 种安全草本气味。"],
      ["缝", "完成基础收口或穿绳。"],
      ["赠", "写一张香囊祝福卡。"]
    ],
    notes: [
      ["过敏提示", "提前告知草本材料，过敏学生使用无香填充。"],
      ["低龄支持", "低龄学生使用预打孔布片，减少针线风险。"],
      ["节日营销", "端午、毕业季、重阳节都适合作为活动节点。"]
    ]
  }
};

const audienceMap = {
  school: { label: "小学三至五年级研学班", channel: "学校德育与综合实践课程", priceBase: 88 },
  family: { label: "亲子家庭", channel: "周末亲子体验", priceBase: 99 },
  tour: { label: "外地游客", channel: "文旅街区半日体验", priceBase: 128 },
  team: { label: "公司团建", channel: "企业文化团建", priceBase: 168 }
};

const form = document.querySelector("#craftForm");
const generateBtn = document.querySelector("#generateBtn");
const navButtons = document.querySelectorAll(".nav-button");
const reserveButton = document.querySelector("#mockReserve");

function currency(value) {
  return `¥${Math.round(value)}`;
}

function readState() {
  return {
    craft: document.querySelector("#craft").value,
    city: document.querySelector("#city").value.trim() || "本地",
    audience: document.querySelector("#audience").value,
    duration: Number(document.querySelector("#duration").value),
    capacity: Number(document.querySelector("#capacity").value),
    cost: Number(document.querySelector("#cost").value),
    goal: document.querySelector("#goal").value
  };
}

function nodeList(items, tagName) {
  return items.map((item) => `<${tagName}>${item}</${tagName}>`).join("");
}

function renderPlan() {
  const state = readState();
  const profile = craftProfiles[state.craft];
  const audience = audienceMap[state.audience];
  const timeFactor = state.duration === 45 ? 0.78 : state.duration === 180 ? 1.65 : 1;
  const price = Math.max(audience.priceBase * timeFactor, state.cost * 3.6);
  const margin = Math.max(18, Math.round(((price - state.cost) / price) * 100));
  const courseName = `${state.city}${profile.name}研学课：${profile.motif}的手作实验`;

  document.querySelector("#courseName").textContent = courseName;
  document.querySelector("#price").textContent = `${currency(price)}/人`;
  document.querySelector("#margin").textContent = `约 ${margin}%`;
  document.querySelector("#capacityOut").textContent = `${state.capacity} 人/场`;
  document.querySelector("#lessonTitle").textContent = `${profile.name}非遗研学：从观察到完成一件作品`;
  document.querySelector("#taskTitle").textContent = `${profile.name}学生任务卡`;
  document.querySelector("#bookingName").textContent = courseName;
  document.querySelector("#bookingPrice").textContent = currency(price);
  document.querySelector("#bookingAge").textContent = profile.age;
  document.querySelector("#bookingTime").textContent = `${state.duration} 分钟`;
  document.querySelector("#bookingPeople").textContent = `6-${state.capacity} 人成团`;
  document.querySelector("#bookingTakeaway").textContent = profile.takeaway;
  document.querySelector("#bookingIntro").textContent =
    `面向${audience.label}，在${state.city}工坊完成一件${profile.name}作品，课程包含文化导入、材料认知、动手创作和成果讲述。`;

  document.querySelector("#corePlan").innerHTML = [
    ["课程包装", `面向${audience.label}，主打“${profile.motif}”主题，适配${audience.channel}。`],
    ["经营约束", `每场上限 ${state.capacity} 人，材料成本约 ${currency(state.cost)}/人，建议定价 ${currency(price)}/人。`],
    ["可交付成果", `${profile.takeaway}，并生成学生任务卡、老师备课提醒和短视频素材。`]
  ].map((item, index) => actionItem(item, index)).join("");

  document.querySelector("#objectives").innerHTML = nodeList(profile.objectives, "li");
  document.querySelector("#timeline").innerHTML = nodeList(buildTimeline(state, profile), "li");
  document.querySelector("#studentTasks").innerHTML = profile.tasks.map((item, index) => actionItem(item, index)).join("");
  document.querySelector("#teacherNotes").innerHTML = profile.notes.map((item, index) => actionItem(item, index)).join("");

  const swatches = document.querySelectorAll(".material-visual span");
  swatches.forEach((swatch, index) => {
    swatch.style.setProperty("--swatch", profile.colors[index]);
  });

  document.querySelector("#videoScript").innerHTML = [
    `0-3 秒：展示一件${profile.name}成品，字幕“这不是普通手工课，是一门能被学校采购的非遗研学课”。`,
    `3-15 秒：输入城市、人数、材料成本，AI 生成课程流程、学生任务卡和预约页。`,
    `15-30 秒：切到学生完成作品和成果墙，结尾提示“让手艺被看见，也被预约”。`
  ].map((text) => `<span>${text}</span>`).join("");

  document.querySelector("#socialTitles").innerHTML = [
    `把${profile.name}做成一节学校愿意采购的研学课`,
    `${state.city}周末亲子体验：${profile.takeaway}`,
    `非遗传承人不会运营？先让 AI 生成一套接单页`
  ].map((text) => `<span>${text}</span>`).join("");

  document.querySelector("#partnerPitch").innerHTML =
    `<span>您好，我们可以为${audience.label}提供 ${state.duration} 分钟${profile.name}研学课程。课程包含文化导入、材料认知、动手创作、成果展示四个环节，每场可接待 ${state.capacity} 人，学生可带走作品，也可配合学校完成综合实践成果记录。</span>`;
}

function actionItem(item, index) {
  return `
    <div class="action-item">
      <span class="index-chip">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <strong>${item[0]}</strong>
        <p>${item[1]}</p>
      </div>
    </div>
  `;
}

function buildTimeline(state, profile) {
  if (state.duration === 45) {
    return [
      `5 分钟：用成品引入${profile.name}的文化背景。`,
      "10 分钟：老师演示关键步骤和安全提醒。",
      "25 分钟：学生完成核心制作。",
      "5 分钟：作品命名与合影展示。"
    ];
  }
  if (state.duration === 180) {
    return [
      `20 分钟：参观材料与工具，理解${profile.name}的地域故事。`,
      "35 分钟：图案设计与小样练习。",
      "80 分钟：完成正式作品。",
      "25 分钟：成果墙展示与学生讲述。",
      "20 分钟：复盘记录，生成研学成果卡。"
    ];
  }
  return [
    `10 分钟：看一个真实${profile.name}作品，提出观察问题。`,
    "15 分钟：认识材料、工具和安全边界。",
    "45 分钟：分步骤完成个人作品。",
    "15 分钟：成果展示与同伴互评。",
    "5 分钟：老师发放延伸观察任务。"
  ];
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-visible"));
    document.querySelector(`#${button.dataset.view}`).classList.add("is-visible");
  });
});

form.addEventListener("input", renderPlan);
generateBtn.addEventListener("click", renderPlan);
reserveButton.addEventListener("click", () => {
  const reserveState = document.querySelector("#reserveState");
  reserveState.textContent = "已模拟预约：周六 14:00，16 人研学班，等待传承人确认。";
  reserveState.classList.add("is-done");
});

renderPlan();
