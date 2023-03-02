

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

let start_background_color = "white";
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);

turtle = {
    x: 0,
    y: 0, 
    angle: 0,
    penState: false,
    move: function(distance) {
      var newX = this.x + distance * Math.cos(this.angle);
      var newY = this.y + distance * Math.sin(this.angle);
      if (this.penState) {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(newX, newY);
        context.stroke();
      }
      this.x = newX;
      this.y = newY;
      this.checkBounds();
    },

    left: function(distance) {
      var newX = this.x - distance * Math.cos(this.angle);
      var newY = this.y - distance * Math.sin(this.angle);
      if (this.penState) {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(newX, newY);
        context.stroke();
      }
      this.x = newX;
      this.y = newY;
      this.checkBounds();
    },

    right: function(distance) {
      var newX = this.x + distance * Math.cos(this.angle);
      var newY = this.y + distance * Math.sin(this.angle);
      if (this.penState) {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(newX, newY);
        context.stroke();
      }
      this.x = newX;
      this.y = newY;
      this.checkBounds();
    },
    up: function(distance) {
      var newX = this.x;
      var newY = this.y - distance;
      if (this.penState) {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(newX, newY);
        context.stroke();
      }
      this.x = newX;
      this.y = newY;
      this.checkBounds();
    },
    down: function(distance) {
      var newX = this.x;
      var newY = this.y + distance;
      if (this.penState) {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(newX, newY);
        context.stroke();
      }
      this.x = newX;
      this.y = newY;
      this.checkBounds();
    },
    penUp: function() {
      this.penState = false;
    },
    penDown: function() {
      this.penState = true;
    },
    reset: function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.x = 0;
      this.y = 0;
      this.angle = 0;
      this.penState = false;
    },
    checkBounds: function() {
      var radius = 10; // turtle radius
      if (this.x < radius) {
        this.x = radius;
      } else if (this.x > canvas.width - radius) {
        this.x = canvas.width - radius;
      }
      if (this.y < radius) {
        this.y = radius;
      } else if (this.y > canvas.height - radius) {
        this.y = canvas.height - radius;
      }
    }
    
  }
  

  function pen_up() {
    turtle.penUp();
  };
  function pen_down() {
    turtle.penDown();
  };
  function reset() {
   turtle.reset();
  }
document.addEventListener("keydown", function (event) {
    console.log(turtle.penState)
    if (turtle.penState) {
    
        if (event.keyCode == 37) {
            // left arrow key
            turtle.left(10);
        } else if (event.keyCode == 38) {
            // up arrow key
            turtle.up(10);
        } else if (event.keyCode == 39) {
            // right arrow key
            turtle.right(10);
        } else if (event.keyCode == 40) {
            // down arrow key
            turtle.down(10);
        }
    }
})