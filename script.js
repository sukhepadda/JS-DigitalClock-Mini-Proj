// clock
function clock(){
    let currDateTime = new Date();
    let currTime = `${currDateTime.getHours()} : ${currDateTime.getMinutes()} : ${currDateTime.getSeconds()} : ${currDateTime.getMilliseconds()}`;
    document.querySelector('#clock').innerText = currTime;
}

setInterval(clock, 1);



// stop watch

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

document.getElementById('start').addEventListener('click',function(){
    timer = true;
    stopWatch();
})

document.getElementById('stop').addEventListener('click',function(){
    timer = false;
})

document.getElementById('reset').addEventListener('click',function(){
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById("hrs").innerHTML = '00';
    document.getElementById("min").innerHTML = '00';
    document.getElementById("sec").innerHTML = '00';
    document.getElementById("milisec").innerHTML = '00'; 

})
function stopWatch() {
    if (timer) {
        count++;
  
        if (count == 100) {
            second++;
            count = 0;
        }
  
        if (second == 60) {
            minute++;
            second = 0;
        }
  
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
  
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
  
        if (hour < 10) {
            hrString = "0" + hrString;
        }
  
        if (minute < 10) {
            minString = "0" + minString;
        }
  
        if (second < 10) {
            secString = "0" + secString;
        }
  
        if (count < 10) {
            countString = "0" + countString;
        }
  
        document.getElementById('hrs').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('milisec').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}

// timer

