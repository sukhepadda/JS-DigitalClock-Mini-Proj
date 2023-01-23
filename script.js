// clock
//
function clock24hrs() {
  let currDateTime = new Date();
  let clockHour = currDateTime.getHours();
  let clockMin = currDateTime.getMinutes();
  let clockSec = currDateTime.getSeconds();
  let clockMiliSec = currDateTime.getMilliseconds();

  // document.querySelector('#clock').innerText = currTime;
  document.querySelector("#clockHour").innerText = clockHour;
  document.querySelector("#clockMin").innerText = clockMin;
  document.querySelector("#clockSec").innerText = clockSec;
  document.querySelector("#clockMiliSec").innerText = clockMiliSec;
  // document.querySelector('#clock').innerText = currTime;
}
function clock12hrs() {
  let currDateTime = new Date();
  let hour12 = (currDateTime.getHours() + 24) % 12 || 12;
  //    console.log(hour12);

  let clockHour = currDateTime.getHours();
  let clockMin = currDateTime.getMinutes();
  let clockSec = currDateTime.getSeconds();
  let clockMiliSec = currDateTime.getMilliseconds();

  // document.querySelector('#clock').innerText = currTime;
  document.querySelector("#clockHour").innerText = hour12;
  document.querySelector("#clockMin").innerText = clockMin;
  document.querySelector("#clockSec").innerText = clockSec;
  document.querySelector("#clockMiliSec").innerText = clockMiliSec;
  if (clockHour > 12) {
    // console.log('pm');
    document.querySelector("#amPm").innerText = "PM";
  } else {
    // console.log('am');
    document.querySelector("#amPm").innerText = "AM";
  }
}

function btnToggle() {
  let switchToggle = document.getElementById("switch");
  if (switchToggle.checked == true) {
    clearInterval(my24hrsInterval);
    const my12hrsInterval = setInterval(clock12hrs, 1);
  } else {
    window.location.reload(); //reload for windows
    //  history.go(0);// reload for codepen
  }
}
const my24hrsInterval = setInterval(clock24hrs, 1);
