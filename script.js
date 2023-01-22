// clock
// 
function clock(){
    let currDateTime = new Date();
    let clockHour = currDateTime.getHours();
    let clockMin = currDateTime.getMinutes();
    let clockSec = currDateTime.getSeconds();
    let clockMiliSec = currDateTime.getMilliseconds();




    // document.querySelector('#clock').innerText = currTime;
    document.querySelector('#clockHour').innerText = clockHour;
    document.querySelector('#clockMin').innerText = clockMin;
    document.querySelector('#clockSec').innerText = clockSec;
    document.querySelector('#clockMiliSec').innerText = clockMiliSec;
    // document.querySelector('#clock').innerText = currTime;
}
function btnToggle(){
    let switchToggle = document.getElementById('switch').value;
if(switchToggle.checked = true ){
    console.log('hello' )  
}
else {
    console.log('nothing');
}

}
setInterval(clock, 1);