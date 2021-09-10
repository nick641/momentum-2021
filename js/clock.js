const clock = document.querySelector("h2#clock");


function getClock () {
    const date = new Date();
    const getHours = String(date.getHours()).padStart(2, 0);
    const getMinutes =String(date.getMinutes()).padStart(2, 0);
    const getSeconds =String(date.getSeconds()).padStart(2, 0);
    clock.innerText =`${getHours}:${getMinutes}:${getSeconds}`;
}
getClock();
setInterval(getClock, 1000);

