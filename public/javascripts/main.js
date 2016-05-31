 var socket = io();

 function sendFunction() {
    socket.emit('new message', $('#new-message').val());
    $('#new-message').val('');


  }

  socket.on('chat message', function(msg){
    $('#messages-area').append($('<li>').text(msg));
  });

  function move(){
    p += 10;

      socket.emit('newMove', p);
      console.log(p);

  };

    socket.on('moved', function(position){
      $(".move").css("left", position + x);

  });


//Countdown timer before the game
var countdown = function(id){
  var duration = 4;

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

    $("#" + id).css('background-color', 'green');

    setTimeout(function(){
     $("#" + id).css('background-color', 'black');
    }, 900);



 }, 1000);

//Sets time period for the game to end
  setTimeout(function(){
    clearInterval(game);
  }, 10000);

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




