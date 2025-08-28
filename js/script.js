const heartButtons = document.getElementsByClassName("heart-btn");

for (const heartButton of heartButtons) {
  heartButton.addEventListener("click", function () {
    const heartCounterField = document.getElementById("heart-count");
    const heartFieldInnerText = heartCounterField.innerText;
    const currentHeartCount = parseInt(heartFieldInnerText);

    const heartCountBy1 = currentHeartCount + 1;

    heartCounterField.innerText = heartCountBy1;
  });
}

const allCopyButtons = document.getElementsByClassName("copy-btn");

for (const copyButton of allCopyButtons) {
  copyButton.addEventListener("click", function (e) {
    const copyCountField = document.getElementById("copy-count").innerText;
    const hotLineNumber =
      e.target.parentNode.parentNode.children[1].children[2].innerText;

    // task1
    alert(`${hotLineNumber} Copied`);
    // task2
    document.getElementById("copy-count").innerText =
      parseInt(copyCountField) + 1;
    //   task3
    navigator.clipboard.writeText(hotLineNumber);
  });
}

const allCallButtons = document.getElementsByClassName("call-btn");
for (const callbutton of allCallButtons) {
  callbutton.addEventListener("click", function (e) {
    // usable data
    const title =
      e.target.parentNode.parentNode.children[1].children[0].innerText;
    const number =
      e.target.parentNode.parentNode.children[1].children[2].innerText;

    const coinFieldText = document.getElementById("coin-count").innerText;

    let currentCoin = parseInt(coinFieldText);
    if (currentCoin < 20) {
      alert("❌ you don't have enough coin to call , please recharge");
      return;
    }

    alert(`📞 calling... ${title} ${number} `);
    document.getElementById("coin-count").innerText = currentCoin - 20;

    const historyContainer = document.getElementById("history-container");

    const div = document.createElement("div");
    div.className =
      "call-history bg-gray-200 p-2 flex justify-between my-4 rounded-lg";
    div.innerHTML = `
                <div class="text-part">
                  <h4 class="font-semibold">${title}</h4>
                  <p class="font-semibold">${number}</p>
                </div>
                <div class="time-part">
                  <span class="font-semibold">${new Date().toLocaleTimeString()}</span>
                </div>
    `;
    historyContainer.appendChild(div);
  });
}

document.getElementById("clear-history").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});
