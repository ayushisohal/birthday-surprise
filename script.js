const surpriseBtn = document.getElementById("surpriseBtn");
const messageCard = document.getElementById("messageCard");

surpriseBtn.addEventListener("click", function () {
    messageCard.classList.remove("hidden");
    surpriseBtn.style.display = "none";
});

const cakeBtn = document.getElementById("cakeBtn");
const cakeSection = document.getElementById("cakeSection");

cakeBtn.addEventListener("click", function () {
    cakeSection.classList.remove("hidden");
    cakeBtn.style.display = "none";
});

function blowCandle(candle) {
    const flame = candle.querySelector(".flame");

    if (flame) {
        flame.style.display = "none";
    }
}