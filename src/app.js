var ball = document.getElementById("bubble-1");
var test = ball.getElementsByClassName("bubble-item");
    var container = document.getElementById("bubble-container");
    //var btn = document.getElementById("btn");
    // some factor to scale the speed of the ball
    var factor = (Math.random() * (1.00 - 0.25) + 0.25).toFixed(2);
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
      // use requestAnimationFrame in favor of setInterval/setTimeout
      // See: https://css-tricks.com/using-requestanimationframe/
      requestAnimationFrame(moveball);
  
      function changeSpeed() {
        factor = (Math.random() * (1.00 - 0.25) + 0.25).toFixed(2);
      }

      // check the balls position and set the direction if out of bounds --- Math.floor(Math.random() * (factorMax - factorMin + 1) + factorMin);
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
        // measure the time elapsed since 
        // last call to moveball function
        if (!timeOld) timeOld = timestamp;
        timeElapsed = timestamp - timeOld;
        timeOld = timestamp;

  
        // calculate ball's position based on 
        // movement's direction and time elapsed
        x += dx * timeElapsed * factor;
        y += dy * timeElapsed * factor;
  
        // use CSS transform instead of top and left
        // for performance reasons
        // See: https://www.keycdn.com/blog/animation-performance#there-are-three-main-types-of-css-properties
        ball.style.transform = "translate(" + x + "px, " + y + "px)";
  
        checkBall();
        // call requestAnimationFrame again
        // like you would do with
        // setTimeout
        requestAnimationFrame(moveball);
      }
    }
    btn.addEventListener('click', movement);