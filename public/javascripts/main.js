var socket = io();

var score = 0;
var computerId;
var phoneId;

  function move(id){

      socket.emit('newMove', id);
      };

    socket.on('moved', function(id){
      phoneId = id;
    if (computerId == phoneId){
      var count = 0;

      if (count === 0) {
        score +=1;
        count ++;
      };
    } else {
      score -= 0.5;
     };
      $("#score").html(score);
  });


//Countdown timer before the game
var countdown = function(id){
  var duration = 1;

  var loweringCount = setInterval(function(){ 

    duration -= 1;
     $("#countdown").html(duration);
    if (duration === 0){
      $("#countdown").removeClass('show');
      $("#countdown").addClass('hide');
      clearInterval(loweringCount);
      startGame();
    }
  }, 1000);

};


var startGame = function(id){
  gameTime();
  var game = setInterval(function(){ 

    var id = id;
    var random = Math.floor(Math.random() * 6) + 1;

    if (random == 1) {
      id = "one";
    } else if (random == 2) {
      id = "two";
    } else if (random == 3) {
      id = "three";
    } else if (random == 4) {
      id = "four";
    } else if (random == 5) {
      id = "five";
    } else if (random == 6) {
      id = "six";
    };

    computerId = id;
    console.log("computer");

    $("#" + id).css('background-color', 'green');

    setTimeout(function(){
     $("#" + id).css('background-color', 'black');


    }, 1000);



 }, 3000);

//Sets time period for the game to end
  setTimeout(function(){
    clearInterval(game);
  }, 60000);

};

var gameTime = function(){
  var time = 10;
  var loweringCount = setInterval(function(){ 

    time -= 1;
     $("#gameTime").html(time);
    if (time === 0){
      clearInterval(loweringCount);
    }
  }, 1000);

};

