const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setData = () => {
    const now = new Date();

    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const secDegrees = ((sec / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const minDegrees = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hourDegrees = ((min / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setData,1000)
