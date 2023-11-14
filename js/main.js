let editTimer = document.getElementById("overlay");
let setButton = document.getElementById("set_button");
let stopButton = document.getElementById("stop_button");
let startButton = document.getElementById("start_button");
let closeEditTimer = document.getElementById("close");
let startTime = document.getElementById("submit");
let timeShow = document.querySelector(".time");
let startMinutes = document.querySelector(".TaskTime");
let interval;
let pastTime;

// show editTimer function
setButton.onclick = function () {
  editTimer.classList.add("show");
  clearInterval(interval);
};

// close editTimer function
closeEditTimer.onclick = function () {
  editTimer.classList.remove("show");
};

// set time function
startTime.onclick = function () {
  editTimer.classList.remove("show");
  stopButton.removeAttribute("disabled");
  let time = startMinutes.value * 60;
  interval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeShow.innerHTML = `${minutes}: ${seconds}`;
    time--;
    pastTime = time;
    if (time < 0) {
      clearInterval(interval);
    }
  }, 1000);
};

// stop timer function
stopButton.onclick = function () {
  startButton.style.display = "inline-block";
  clearInterval(interval);
};

// start timer again function
startButton.onclick = function () {
  startButton.style.display = "none";
  interval = setInterval(() => {
    let minutes = Math.floor(pastTime / 60);
    let seconds = pastTime % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeShow.innerHTML = `${minutes}: ${seconds}`;
    pastTime--;
    if (pastTime < 0) {
      clearInterval(interval);
    }
  }, 1000);
};
