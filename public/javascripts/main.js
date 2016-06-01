//Run socket.io
var socket = io();

var id;
var computerId;
var phoneId;

var countInterval = 1;
var countdownTime = 1;

var totalPlayingTime = 10;

var squareChangeSpeed = 1000;
var inPlay = false;

var score = 0;
var right = 0;
var wrong = 0;

socket.on('moved', function(id){
  phoneId = id;
  var maxPoints = 0;
  
  if (inPlay) {
    if (computerId === phoneId && maxPoints === 0) {
      maxPoints ++;
      score ++;
      right ++;

      $("#right").html(right);
    } else {
      score -= 0.5;
      wrong ++;
      $("#wrong").html(wrong);
    };
    $("#score").html(score);
  }

});

socket.on('phoneData', function(coordinates){
      var x = coordinates.x;
      var y = coordinates.y;
      var z = coordinates.z;

      $(".square").css("height", x + "vw");

      console.log(coordinates);
});

var gameOne = function(){
  inPlay = true;
  countdown();
};

var countdown = function(){
  var timeTillStart = setInterval(function(){
    countdownTime -= countInterval;
    $("#countdown").html(countdownTime);

    if (countdownTime === 0) {
      $("#countdown").removeClass('show');
      $("#countdown").addClass('hide');
      
      clearInterval(timeTillStart);
      
      startGameOne();
    };

  },1000); 
};
    
var startGameOne = function() {
  inPlay = true;
  gameTime();

  var changeSquares = setInterval(function(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    if (randomNumber == 1) {
      id = "one";
    } else if (randomNumber == 2) {
      id = "two";
    } else if (randomNumber == 3) {
      id = "three";
    } else if (randomNumber == 4) {
      id = "four";
    } else if (randomNumber == 5) {
      id = "five";
    } else if (randomNumber == 6) {
      id = "six";
    };

    computerId = id;

    $("#" + id).css('background-color', 'green');

    setTimeout(function(){
      $("#" + id).css('background-color', 'black');
    }, squareChangeSpeed -100);

  }, squareChangeSpeed);

  setTimeout(function(){
    clearInterval(changeSquares);
    socket.disconnect()
    inPlay = false;
  }, totalPlayingTime * 1000);
};
  
var gameTime = function(){
  
  var countdownGameTime = setInterval(function(){
    totalPlayingTime -= countInterval;
    
    $("#gameTime").html(totalPlayingTime);

    if (totalPlayingTime === 0) {
      clearInterval(countdownGameTime);
      inPlay = false;
    };
  }, 1000);
};

