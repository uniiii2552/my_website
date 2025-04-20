// 模擬的典藏資料（可以加更多）
const archiveData = [
  {
    title: "鴨嘴獸骨骼結構圖",
    type: "圖像資料",
    metadata: {
      拍攝者: "動物學家李博士",
      拍攝時間: "2023-05",
      地點: "澳洲塔斯馬尼亞",
      描述: "展示鴨嘴獸的骨骼結構與特徵",
      授權情況: "CC BY-NC"
    }
  },
  {
    title: "鴨嘴獸繁殖行為影片",
    type: "影片資料",
    metadata: {
      時長: "2分30秒",
      內容簡介: "介紹鴨嘴獸築巢與育幼行為",
      來源平台: "YouTube",
      語言: "英語配中文字幕"
    }
  },
  {
    title: "電感覺研究論文",
    type: "學術論文",
    metadata: {
      作者: "Dr. Emily Waters",
      出版單位: "澳洲野生動物期刊",
      年份: "2022",
      摘要: "探討鴨嘴獸在捕食時如何使用電感覺",
      DOI: "10.1234/platypus.2022.007"
    }
  }
];

// 搜尋功能
function searchData() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const filtered = archiveData.filter(item =>
    item.title.toLowerCase().includes(keyword) ||
    Object.values(item.metadata).some(val =>
      val.toLowerCase && val.toLowerCase().includes(keyword)
    )
  );

  if (filtered.length === 0) {
    resultsDiv.innerHTML = "<p>找不到相關資料。</p>";
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>資料類型：</strong>${item.type}</p>
      <ul>
        ${Object.entries(item.metadata).map(([key, value]) => `<li><strong>${key}：</strong>${value}</li>`).join("")}
      </ul>
    `;
    resultsDiv.appendChild(card);
  });
}
function askAI() {
  const question = document.getElementById("userQuestion").value;
  const aiAnswer = document.getElementById("aiAnswer");

  // 模擬回答（實際可接 API）
  if (question.includes("鴨嘴獸") && question.includes("吃什麼")) {
    aiAnswer.innerText = "鴨嘴獸主要以水生昆蟲、小蝦和蛤蜊為食。";
  } else if (question.includes("住哪裡")) {
    aiAnswer.innerText = "鴨嘴獸棲息於澳洲東部與塔斯馬尼亞的淡水河流。";
  } else {
    aiAnswer.innerText = "這是一個很棒的問題！未來版本將整合真實 ChatGPT 回答喔。";
  }
}

function simulateHabitat() {
  const temp = document.getElementById("tempSelect").value;
  const flow = document.getElementById("flowSelect").value;
  const food = document.getElementById("foodSelect").value;
  const result = document.getElementById("simulationResult");

  if (temp === "適中" && flow === "有" && food === "是") {
    result.innerText = "✔️ 環境適合鴨嘴獸生存！";
  } else {
    result.innerText = "⚠️ 這樣的環境可能不利於鴨嘴獸生存。請再試試其他條件！";
  }
}
