//"use strict";
var requestAnimationFrame = window.requestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.msRequestAnimationFrame;


var ball = document.getElementById("bubble-1");
var container = document.getElementById("bubble-container");
// some factor to scale the speed of the ball
var factor = (Math.random() * (0.20 - 0.05) + 0.05).toFixed(2);
var timeOld, timeElapsed;
// the current x position of the ball
var x = Math.round(Math.random() * container.offsetWidth);
var y = Math.round(Math.random() * container.offsetHeight);
var step = 1;
// the direction in the x dimension (1 or -1)
var dx = step;
var dy = step;
var width = ball.offsetWidth;
var height = ball.offsetHeight;
var cH = container.offsetHeight;
var cW = container.offsetWidth;

function movement() {
requestAnimationFrame(moveball);

function changeSpeed() {
factor = (Math.random() * (0.20 - 0.05) + 0.05).toFixed(2);
}

// check the balls position and set the direction if out of bounds
function checkBall() {
if (x + width >= cW) {
dx = -step;
changeSpeed();
}
if (x <= 0) {
dx = step;
changeSpeed()
}
if (y + height >= cH) {
dy = -step;
changeSpeed()
}
if (y <= 0) { 
dy = step;
changeSpeed()
}
}

// move the ball by (dx,dy)
function moveball(timestamp) {
// measure the time elapsed since last call to moveball function
if (!timeOld) timeOld = timestamp;
timeElapsed = timestamp - timeOld;
timeOld = timestamp;


// calculate ball's position based on movement's direction and time elapsed
x += dx * timeElapsed * factor;
y += dy * timeElapsed * factor;

// use CSS transform instead of top and left for performance reasons
ball.style.transform = "translate(" + x + "px, " + y + "px)";

checkBall();

requestAnimationFrame(moveball);
}
}
requestAnimationFrame(movement);