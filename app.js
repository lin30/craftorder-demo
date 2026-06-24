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

const goalMap = {
  stable: {
    label: "学校订单优先",
    proof: "稳定接学校订单",
    pricing: "预算友好、复购优先",
    priceMultiplier: 0.98,
    marginMultiplier: 1.82,
    laborMultiplier: 1,
    buyerReason: "强调教学目标、课堂秩序、成果可验收和复购稳定性。",
    opsResult: "适合先做 8-16 人标准课，保留学校批量采购空间。",
    mediaAngle: "把一门手艺做成老师能直接采购的综合实践课",
    partnerAsk: "可先提供一场试课，再按年级或班级批量排期。"
  },
  tourism: {
    label: "文旅街区优先",
    proof: "进入文旅街区",
    pricing: "高客单、强展示",
    priceMultiplier: 1.16,
    marginMultiplier: 2.08,
    laborMultiplier: 1.14,
    buyerReason: "突出到店体验、拍照传播、游客停留时长和街区活动转化。",
    opsResult: "适合周末固定档期，单场人数可略低但客单价更高。",
    mediaAngle: "在城市街区预约一场能带走作品的手艺体验",
    partnerAsk: "可与街区活动、亲子市集或城市漫游路线联动。"
  },
  gift: {
    label: "材料包转化优先",
    proof: "带动文创材料包",
    pricing: "作品包、复购加价",
    priceMultiplier: 1.08,
    marginMultiplier: 1.96,
    laborMultiplier: 1.08,
    buyerReason: "把课程成果延伸成材料包、伴手礼和节日复购。",
    opsResult: "适合把单场体验转成材料包预售或团购订单。",
    mediaAngle: "做完一节体验课，还能把材料包带回家继续创作",
    partnerAsk: "可同步准备材料包清单，用课程带动后续购买。"
  }
};

const form = document.querySelector("#craftForm");
const bookingForm = document.querySelector("#bookingForm");
const planButton = document.querySelector("#planButton");
const navButtons = document.querySelectorAll(".nav-button");
const quickSlotButton = document.querySelector("#quickSlotButton");
const copyButton = document.querySelector("#copySummary");
const handoffTitle = document.querySelector("#handoffTitle");
const handoffStepItems = document.querySelectorAll("#handoffSteps li");
const heroProofCourse = document.querySelector("#heroProofCourse");
const heroProofGoal = document.querySelector("#heroProofGoal");
const toast = document.querySelector("#toast");

let latestSummary = "";
let organizeTimers = [];
let toastTimer = null;

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

function getCityFactor(city) {
  if (["北京", "上海", "深圳", "广州", "杭州"].some((item) => city.includes(item))) {
    return 1.18;
  }
  if (["成都", "南京", "苏州", "武汉", "厦门", "西安", "长沙"].some((item) => city.includes(item))) {
    return 1.08;
  }
  if (/[县乡镇]/.test(city)) {
    return 0.88;
  }
  return 1;
}

function calculatePricing(state, audience) {
  const cityFactor = getCityFactor(state.city);
  const goal = goalMap[state.goal];
  const timeFactor = state.duration === 45 ? 0.78 : state.duration === 180 ? 1.65 : 1;
  const capacity = Math.max(6, state.capacity || 16);
  const material = Math.max(5, state.cost || 18);
  const venue = Math.round((state.duration === 180 ? 360 : 190) * cityFactor * timeFactor / capacity);
  const assistantFee = capacity > 18 || state.duration === 180 ? 120 * timeFactor : 0;
  const facilitatorFee = (state.duration === 45 ? 180 : state.duration === 180 ? 520 : 320) * goal.laborMultiplier;
  const labor = Math.round((facilitatorFee + assistantFee) / capacity);
  const equipment = state.duration === 180 ? 14 : state.duration === 45 ? 4 : 7;
  const breakEven = material + venue + labor + equipment;
  const marketAnchor = audience.priceBase * timeFactor * cityFactor * goal.priceMultiplier;
  const price = Math.ceil(Math.max(marketAnchor, breakEven * goal.marginMultiplier) / 5) * 5;
  const margin = Math.max(18, Math.round(((price - breakEven) / price) * 100));
  const laborPlan = capacity > 18 || state.duration === 180 ? "主讲 1 人 + 助教 1 人" : "主讲 1 人";

  return { price, margin, material, venue, labor, equipment, breakEven, cityFactor, timeFactor, laborPlan };
}

function renderPlan() {
  const state = readState();
  const profile = craftProfiles[state.craft];
  const audience = audienceMap[state.audience];
  const goal = goalMap[state.goal];
  const pricing = calculatePricing(state, audience);
  const price = pricing.price;
  const margin = pricing.margin;
  const courseName = `${state.city}${profile.name}研学课：${profile.motif}的手作实验`;

  document.querySelector("#courseName").textContent = courseName;
  heroProofCourse.textContent = `${state.city}${profile.name} / ${state.duration} 分钟 / ${state.capacity} 人`;
  heroProofGoal.textContent = goal.label;
  document.querySelector("#price").textContent = `${currency(price)}/人`;
  document.querySelector("#margin").textContent = `约 ${margin}%`;
  document.querySelector("#capacityOut").textContent = `${state.capacity} 人/场`;
  document.querySelector("#materialCost").textContent = `${currency(pricing.material)}/人`;
  document.querySelector("#venueCost").textContent = `${currency(pricing.venue)}/人`;
  document.querySelector("#laborCost").textContent = `${currency(pricing.labor)}/人`;
  document.querySelector("#equipmentCost").textContent = `${currency(pricing.equipment)}/人`;
  document.querySelector("#laborPlan").textContent = pricing.laborPlan;
  document.querySelector("#cityFactorOut").textContent = pricing.cityFactor.toFixed(2);
  document.querySelector("#goalStrategy").textContent = goal.pricing;
  document.querySelector("#breakEvenPrice").textContent = `${currency(pricing.breakEven)}/人`;
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

  const deliveryCourse = `${state.city}${profile.name}研学课，面向${audience.label}，主打${profile.motif}主题，目标是${goal.proof}。`;
  const deliveryBuyer = `可交付教学目标、${state.duration}分钟流程、学生任务卡、老师备课提醒和成果展示建议；${goal.buyerReason}`;
  const deliveryOps = `${state.capacity}人/场，${pricing.laborPlan}，建议价${currency(price)}/人，材料成本约${currency(state.cost)}/人，毛利空间约${margin}%；${goal.opsResult}`;

  document.querySelector("#deliveryTitle").textContent = `${profile.name}课程成果包已整理`;
  document.querySelector("#deliveryCourse").textContent = deliveryCourse;
  document.querySelector("#deliveryBuyer").textContent = deliveryBuyer;
  document.querySelector("#deliveryOps").textContent = deliveryOps;
  renderAnalysisSteps(state, profile, audience, pricing);
  latestSummary = [
    "匠单 CraftOrder 成果包",
    `课程：${deliveryCourse}`,
    `采购理由：${deliveryBuyer}`,
    `经营测算：${deliveryOps} 保本价约${currency(pricing.breakEven)}/人，城市系数${pricing.cityFactor.toFixed(2)}。`,
    `预约页：${profile.takeaway}，${profile.age}，6-${state.capacity}人成团。`,
    `传播标题：${goal.mediaAngle}`
  ].join("\n");

  document.querySelector("#corePlan").innerHTML = [
    ["课程包装", `面向${audience.label}，主打“${profile.motif}”主题，适配${audience.channel}。`],
    ["经营目标", `${goal.label}：${goal.buyerReason}`],
    ["报价边界", `每场上限 ${state.capacity} 人，${pricing.laborPlan}，保本价约 ${currency(pricing.breakEven)}/人，建议定价 ${currency(price)}/人。`],
    ["可交付成果", `${profile.takeaway}，并整理出学生任务卡、老师备课提醒和${goal.proof}话术。`]
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
    `0-3 秒：展示一件${profile.name}成品，字幕“${goal.mediaAngle}”。`,
    `3-15 秒：输入城市、人数、材料成本和经营目标，生成课程流程、报价和预约页。`,
    `15-30 秒：切到学生完成作品和成果墙，结尾提示“${goal.partnerAsk}”。`
  ].map((text) => `<span>${text}</span>`).join("");

  document.querySelector("#socialTitles").innerHTML = [
    goal.mediaAngle,
    `${state.city}周末亲子体验：${profile.takeaway}`,
    `${profile.name}传承人接单前，先把报价和预约页算清楚`
  ].map((text) => `<span>${text}</span>`).join("");

  document.querySelector("#partnerPitch").innerHTML =
    `<span>您好，我们可以为${audience.label}提供 ${state.duration} 分钟${profile.name}研学课程。课程包含文化导入、材料认知、动手创作、成果展示四个环节，每场可接待 ${state.capacity} 人，${pricing.laborPlan}。本场保本价约 ${currency(pricing.breakEven)}/人，建议报价 ${currency(pricing.price)}/人；${goal.partnerAsk} 如果方便，我们可以约 15 分钟电话或到工坊看一次材料。</span>`;
  setFlowState("price", "课程与报价已更新");
}

function renderAnalysisSteps(state, profile, audience, pricing) {
  const goal = goalMap[state.goal];
  document.querySelector("#analysisTitle").textContent = "已整理课程结构与经营约束";
  document.querySelector("#analysisPanel").classList.remove("is-running");
  document.querySelector("#analysisSteps").innerHTML = [
    ["拆技艺", `${profile.name} 的主题是“${profile.motif}”，适合做成${state.duration}分钟课程。`],
    ["对齐采购", `${audience.label}需要教学目标、成果展示和安全提醒。`],
    ["匹配目标", `${goal.label}会影响报价倍率、传播角度和合作话术。`],
    ["核算价格", `材料、场地、${pricing.laborPlan}和工具折旧合计，保本价约${currency(pricing.breakEven)}/人。`]
  ].map((item, index) => actionItem(item, index)).join("");
}

function organizePlan() {
  const analysisPanel = document.querySelector("#analysisPanel");
  const analysisTitle = document.querySelector("#analysisTitle");
  const analysisSteps = document.querySelector("#analysisSteps");

  organizeTimers.forEach((timer) => window.clearTimeout(timer));
  organizeTimers = [];
  setPlanButtonBusy(true);
  setFlowState("price", "正在整理方案");
  analysisPanel.classList.add("is-running");
  analysisTitle.textContent = "正在推演课程、成本和接单话术";

  const runningSteps = [
    ["读取经营条件", "识别项目、城市、客群、课时、人数、材料成本和经营目标。"],
    ["拆成可采购课程", "生成教学目标、课堂流程、任务卡和安全提醒。"],
    ["核算接单价格", "按师资、场地、工具折旧、城市系数和经营目标给出报价。"],
    ["整理交付文本", "同步更新预约页、传播标题和合作话术。"]
  ];

  const renderRunning = (activeIndex) => {
    analysisSteps.innerHTML = runningSteps
      .map((item, index) => {
        const status = index < activeIndex ? "is-done" : index === activeIndex ? "is-active" : "";
        return actionItem([...item, status], index);
      })
      .join("");
  };

  renderRunning(0);
  [1, 2, 3].forEach((step, index) => {
    organizeTimers.push(window.setTimeout(() => renderRunning(step), 420 * (index + 1)));
  });

  organizeTimers.push(window.setTimeout(() => {
    renderPlan();
    setPlanButtonBusy(false);
    showToast("方案已整理完成");
  }, 1680));
}

function setPlanButtonBusy(isBusy) {
  planButton.classList.toggle("is-loading", isBusy);
  planButton.textContent = isBusy ? "推演中" : "整理方案";
  planButton.setAttribute("aria-busy", String(isBusy));
}

function setFlowState(stage, title) {
  const order = ["course", "price", "reserve", "copy"];
  const activeIndex = Math.max(0, order.indexOf(stage));

  handoffTitle.textContent = title;
  handoffStepItems.forEach((item, index) => {
    item.classList.toggle("is-done", index < activeIndex || stage === "copy");
    item.classList.toggle("is-active", index === activeIndex);
    item.toggleAttribute("aria-current", index === activeIndex);
  });
}

function setFlowForView(viewId) {
  const viewFlowMap = {
    studio: ["price", "正在查看报价与接单测算"],
    school: ["course", "正在查看研学课程包"],
    booking: ["reserve", "正在查看预约页"],
    media: ["copy", "正在查看传播交付包"]
  };
  const flow = viewFlowMap[viewId];
  if (flow) {
    setFlowState(flow[0], flow[1]);
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2100);
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall back for preview browsers that block Clipboard API on permission grounds.
    }
  }

  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.append(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();

  if (!copied) {
    throw new Error("copy unavailable");
  }
}

function actionItem(item, index) {
  return `
    <div class="action-item ${item[2] || ""}">
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
      "20 分钟：复盘记录，整理研学成果卡。"
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

function switchView(viewId) {
  navButtons.forEach((item) => item.classList.toggle("is-active", item.dataset.view === viewId));
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-visible"));
  document.querySelector(`#${viewId}`).classList.add("is-visible");
  setFlowForView(viewId);
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

form.addEventListener("input", renderPlan);
planButton.addEventListener("click", organizePlan);
quickSlotButton.addEventListener("click", () => {
  document.querySelector("#bookingDate").value = "本周六";
  document.querySelector("#bookingSlot").value = "14:00-15:30";
  document.querySelector("#reserveState").textContent =
    "已选本周六 14:00-15:30，请补充联系人和联系电话后确认预约。";
  document.querySelector("#reserveState").classList.remove("is-done");
  setFlowState("reserve", "预约时段已选择");
  showToast("已带入周六下午档期");
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  confirmBooking();
});

function confirmBooking() {
  const state = readState();
  const profile = craftProfiles[state.craft];
  const reserveState = document.querySelector("#reserveState");
  const date = document.querySelector("#bookingDate").value;
  const slot = document.querySelector("#bookingSlot").value;
  const contact = document.querySelector("#bookingContact").value.trim();
  const phone = document.querySelector("#bookingPhone").value.trim();

  if (!contact || !phone) {
    reserveState.textContent = "请先补全联系人和联系电话，方便传承人确认材料和到场人数。";
    reserveState.classList.remove("is-done");
    showToast("还缺联系人或电话");
    return;
  }

  reserveState.textContent =
    `预约成功：${contact} 已预约 ${date} ${slot} 的${profile.name}体验，联系电话 ${phone}。传承人将在 24 小时内确认材料与到场人数。`;
  reserveState.classList.add("is-done");
  setFlowState("reserve", "预约记录已确认");
  showToast("预约记录已生成");
}

copyButton.addEventListener("click", async () => {
  const originalText = copyButton.textContent;

  try {
    await copyText(latestSummary);
    copyButton.textContent = "已复制成果包";
    setFlowState("copy", "成果包已复制");
    showToast("成果包已复制到剪贴板");
  } catch {
    copyButton.textContent = "已整理成果包";
    setFlowState("copy", "成果包已整理");
    showToast("成果包已整理完成");
  }

  window.setTimeout(() => {
    copyButton.textContent = originalText;
  }, 1800);
});

renderPlan();
