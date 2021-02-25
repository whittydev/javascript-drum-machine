const drumkit = document.getElementById("drumkit");

const data = {
  A: { name: "Verb Hit 2", sound: "sounds/deep verb hit 2.wav" },
  S: { name: "hit Long tail", sound: "sounds/hit long verb tail.wav" },
  D: { name: "Huge verb Hit", sound: "sounds/huge verb hit.wav" },
  F: { name: "metallic verb hit", sound: "sounds/metallic verb hit.wav" },
};

function construct() {
  for (let key in data) {
    let drumEl = document.createElement("div");
    drumEl.classList.add("drum");

    let h2 = document.createElement("h2");
    h2.textContent = key;

    let span = document.createElement("span");
    span.textContent = data[key].name;

    drumEl.appendChild(h2);
    drumEl.appendChild(span);
    drumkit.appendChild(drumEl);

    data[key].el = drumEl;

    drumEl.addEventListener("click", function (event) {
      let key = event.currentTarget.querySelector("h2").textContent;
      playDrum(key);
    });
  }
}

function playDrum(key) {
  let audio = new Audio();
  audio.src = data[key].sound;
  audio.play();

  data[key].el.style.webkitAnimation = "drum-animation 0.3s";
  data[key].el.style.animation = "drum-animation 0.3s";

  data[key].el.addEventListener("webkitAnimationEnd", removeAnimation);
  data[key].el.addEventListener("AnimationEnd", removeAnimation);
}

function removeAnimation(event) {
  event.currentTarget.style.webkitAnimation = "none";
  event.currentTarget.style.Animation = "none";
}

construct();

function handleKeyEvents(event) {
  playDrum(event.key.toUpperCase());
}

window.addEventListener("keydown", handleKeyEvents);
