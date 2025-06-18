let noClickCount = 0;

function shrinkNo() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  noClickCount++;
  noBtn.style.transform = `scale(${1 - 0.1 * noClickCount})`;
  yesBtn.style.transform = `scale(${1 + 0.1 * noClickCount})`;
  if (noClickCount >= 5) noBtn.style.display = "none";
}

function handleDelay(value) {
  const delayInput = document.getElementById("delayInput");
  const noDelayMsg = document.getElementById("noDelayMessage");
  if (value === "yes") {
    delayInput.classList.remove("hidden");
    noDelayMsg.classList.add("hidden");
  } else if (value === "no") {
    delayInput.classList.add("hidden");
    showNoDelayMessage();
  } else {
    delayInput.classList.add("hidden");
    noDelayMsg.classList.add("hidden");
  }
}

function showNoDelayMessage() {
  document.getElementById("noDelayMessage").classList.remove("hidden");
  launchBalloon();
}

function launchBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  document.getElementById("balloon-container").appendChild(balloon);
  setTimeout(() => balloon.remove(), 3000);
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-fall');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 500);

function updateCountdown() {
  const countdown = document.getElementById('countdown');
  const eventTime = new Date("2025-06-22T18:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventTime - now;

  if (distance <= 0) {
    countdown.innerText = "🎉 Đến giờ đi chơi rồi! 💖";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerText = `⏳ Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây nữa`;
}

setInterval(updateCountdown, 1000);
updateCountdown();