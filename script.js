setInterval(setClock, 1000); /* call setClock every 1000 ms, or every sec */

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
/* retrieving hand elements from html */

function setClock() {
    const currentDate = new Date(); /* calling date constructor just gives you a date object w/ the current date */
    const secondsRatio = currentDate.getSeconds() / 60; /* this will be a percentage of a minute, i.e. 50% */
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; /* add secondsRatio so minute hand gradually moves from one minute to the next */
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
    /* using JS to change variables in the css file, in this case --rotation */
}

setClock(); /* call set clock as soon as the page loads so that the correct time appears before the first second */