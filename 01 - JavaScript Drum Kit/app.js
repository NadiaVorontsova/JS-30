const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const elem = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    elem.classList.add("playing");
};

window.addEventListener("keydown", playSound);

const removeHighlight = (e) => {
    e.target.classList.remove("playing");
};

const elements = document.querySelectorAll(".key");
elements.forEach(elem=>elem.addEventListener("transitionend", removeHighlight));

