// clock
function clock(){
    let currDateTime = new Date();
    let currTime = `${currDateTime.getHours()} : ${currDateTime.getMinutes()} : ${currDateTime.getSeconds()} : ${currDateTime.getMilliseconds()}`;
    document.querySelector('#clock').innerText = currTime;
}

setInterval(clock, 1);