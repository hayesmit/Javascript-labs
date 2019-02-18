
function startClock() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timer').innerHTML =
  "Today's time: " + h + ":" + m + ":" + s;
  var t = setTimeout(startClock, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
var clock = new Date();
var start = true;
var command = "start"
function startStop(){
    if (start){
        clock = new Date();
        clock.setHours(0,0,0,0);
//        setHours(hours, min, sec, milisec)
        start = false;
      }
    if (command === "start"){
        clock.setSeconds(clock.getSeconds()+1)
        var hour = clock.getHours();
        var minute = clock.getMinutes();
        var seconds = clock.getSeconds();
        var swDisplay = document.getElementById("stopWatch");
        stopWatch.innerText = `${hour}:${minute}:${seconds}`;
        console.log(`${hour}:${minute}:${seconds}`);
        setTimeout(startStop, 1000);
}}

var alarmClock;
var startCountdown = "start";
var begin;
function alarmFunc(){
console.log("just entered alarm function")
//        console.log(alarmClock.getHours(), alarmClock.getMinutes(), alarmClock.getSeconds());

//    console.log("just entered alarm functino");
    if (startCountdown === "start"){
    alarmClock = new Date();
//    console.log("should only print onece");
        alarmClock.setHours(0,0,0,0);
        alarmClock.setHours(document.getElementById("hours").value);
//        console.log(document.getElementById('hours').value);
        alarmClock.setMinutes(document.getElementById("minutes").value);
        alarmClock.setSeconds(document.getElementById("seconds").value);
//        setHours(hours, min, sec, milisec)
        startCountdown = "continue";
      }
      if (alarmClock.getHours() == 0 && alarmClock.getMinutes() == 0 && alarmClock.getSeconds() == 0){
        console.log("time up");
        document.getElementById("acDisplay").innerText = "Time is Up!!!!";
        begin = "stop";
        clearInterval(alarmInterval);
        }
       if (begin === "start"){
        alarmClock.setSeconds(alarmClock.getSeconds()-1);
//        console.log(alarmClock)
        var AChour = alarmClock.getHours();
        var ACminute = alarmClock.getMinutes();
        var ACseconds = alarmClock.getSeconds();
        var display = document.getElementById("acDisplay");
        display.innerText = `${AChour}:${ACminute}:${ACseconds}`;
//        console.log(`${AChour}:${ACminute}:${ACseconds}`);
        }

}

var lap = document.getElementById("lap")
var count = 1;
lap.addEventListener("click", function(e){
    var today = new Date();
    var hour = clock.getHours();
    var min = clock.getMinutes();
    var seconds  = clock.getSeconds();

    let around = document.createElement("li");
    around.innerText = `Lap ${count}> ${hour}:${min}:${seconds}`;
    document.getElementById('laps').appendChild(around);
    count +=1;

})


var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function(e){
console.log("STOPPPPPPP");
command = "stop";
})

var startButton = document.getElementById("start");
startButton.addEventListener("click", function(e){
console.log("STARTTTT");
command = "start";
startStop()})

let alarmInterval;
var alarmButton = document.getElementById("alarm");
alarmButton.addEventListener("click", function(e){
startCountdown = "start";
begin = "start";
alarmInterval = setInterval(alarmFunc, 1000);
});

startClock();



//var onClock = [0,0,0];

//
//  hour = onClock[0];
//  min = onClock[1];
//  seconds = onClock[2];
//  var today = new Date();
//  today.setHours(hour, min, seconds);
//  var h = today.getHours();
//  var m = today.getMinutes();
//  var s = today.getSeconds();
//  m = checkTime(m);
//  s = checkTime(s);
//  document.getElementById('stopWatch').innerHTML =
//  "Today's time: " + h + ":" + m + ":" + s;
//  onClock[0] = today.getHours;
//  onClock[1] = today.getMinutes;
//  onClock[2] = today.getSeconds;
//  console.log(today.getSeconds);
//  var t = setTimeout(startStop, 500);
