var socket = io();

var score = 0;
var right = 0;
var wrong = 0;
var ax;


var computerId;
var phoneId;

window.ondevicemotion = function(event) {
    ax = Math.round(Math.abs(event.accelerationIncludingGravity.x * 1));
};

var accel = function (){
  var axReading = setInterval(function(){ 
    socket.emit('acc', ax);
  }, 2000);
};

  function move(id){

      socket.emit('newMove', id);
      
      
  };

  socket.on('liveAcc', function(ax){

      console.log(ax);
      accel();

  });

    socket.on('moved', function(id){
      phoneId = id;
    if (computerId == phoneId){
      var count = 0;

      if (count === 0) {
        score +=1;
        count ++;
        right ++;
        $("#right").html(right);

      };
    } else {
      score -= 0.5;
      wrong ++;
      $("#wrong").html(wrong);
     };
      $("#score").html(score);
  });


//Countdown timer before the game
var countdown = function(id){


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

    $("#" + id).css('background-color', 'green');

    setTimeout(function(){
     $("#" + id).css('background-color', 'black');


    }, 1000);



 }, 1000);

//Sets time period for the game to end
  setTimeout(function(){
    clearInterval(game);
  }, 5000);

};

var gameTime = function(){
  var time = 10;
  var loweringCount = setInterval(function(){ 

    time -= 1;
     $("#gameTime").html(time);
    if (time === 0){
      clearInterval(loweringCount);
      clearInterval(axReading);
    }
  }, 1000);

};

// // ************* Accelerometer *************

//     // Position Variables
//       var x = 0;
//       var y = 0;
//       var z = 0;

//       // Speed - Velocity
//       var vx = 0;
//       var vy = 0;
//       var vz = 0;

//       // Acceleration
//       var ax = 0;
//       var ay = 0;
//       var az = 0;
//       var ai = 0;
//       var arAlpha = 0;
//       var arBeta = 0;
//       var arGamma = 0;

//       var delay = 100;
//       var vMultiplier = 0.01;     var alpha = 0;
    
//       var alpha = 0;
//       var beta = 0;
//       var gamma = 0;
      
      
//       if (window.DeviceMotionEvent==undefined) {
//         document.getElementById("no").style.display="block";
//         document.getElementById("yes").style.display="none";
//       } 
//       else {
//         window.ondevicemotion = function(event) {
//           ax = Math.round(Math.abs(event.accelerationIncludingGravity.x * 1));
//           ay = Math.round(Math.abs(event.accelerationIncludingGravity.y * 1));
//           az = Math.round(Math.abs(event.accelerationIncludingGravity.z * 1));    
//           ai = Math.round(event.interval * 100) / 100;

//           console.log(ax);

//           rR = event.rotationRate;
//           if (rR != null) {
//             arAlpha = Math.round(rR.alpha);
//             arBeta = Math.round(rR.beta);
//             arGamma = Math.round(rR.gamma);
//           }

// /*          
//           ax = Math.abs(event.acceleration.x * 1000);
//           ay = Math.abs(event.acceleration.y * 1000);
//           az = Math.abs(event.acceleration.z * 1000);   
//   */        
//         }
                
//         window.ondeviceorientation = function(event) {
//           console.log(event);
//           alpha = Math.round(event.alpha);
//           beta = Math.round(event.beta);
//           gamma = Math.round(event.gamma);
//         }       
        
//         function d2h(d) {return d.toString(16);}
//         function h2d(h) {return parseInt(h,16);}
        
//         function makecolor(a, b, c) {
//           red = Math.abs(a) % 255;
//           green = Math.abs(b) % 255;
//           blue = Math.abs(c) % 255;
//           return "#" + d2h(red) + d2h(green) + d2h(blue);
//         }
        
//         function makeacceleratedcolor(a, b, c) {
//           red = Math.round(Math.abs(a + az) % 255);
//           green = Math.round(Math.abs(b + ay) % 255);
//           blue = Math.round(Math.abs(c + az) % 255);
//           return "#" + d2h(red) + d2h(green) + d2h(blue);
//         }
 
//         setInterval(function() {
//           document.getElementById("xlabel").innerHTML = "X: " + ax;
//           document.getElementById("ylabel").innerHTML = "Y: " + ay;
//           document.getElementById("zlabel").innerHTML = "Z: " + az;                   
//           document.getElementById("ilabel").innerHTML = "I: " + ai;                   
//           document.getElementById("arAlphaLabel").innerHTML = "arA: " + arAlpha;                              
//           document.getElementById("arBetaLabel").innerHTML = "arB: " + arBeta;
//           document.getElementById("arGammaLabel").innerHTML = "arG: " + arGamma;                                                  
//           document.getElementById("alphalabel").innerHTML = "Alpha: " + alpha;
//           document.getElementById("betalabel").innerHTML = "Beta: " + beta;
//           document.getElementById("gammalabel").innerHTML = "Gamma: " + gamma;

//           document.getElementById("accelcolor").innerHTML = "Color: " + makecolor(ax, ay, az);
//           document.getElementById("accelcolor").style.background = makecolor(ax, ay, az);
//           document.getElementById("accelcolor").style.color = "#FFFFFF";
//           document.getElementById("accelcolor").style.fontWeight = "bold";

//           document.getElementById("gyrocolor").innerHTML = "Color: " + makecolor(alpha, beta, gamma);
//           document.getElementById("gyrocolor").style.background = makecolor(alpha, beta, gamma);
//           document.getElementById("gyrocolor").style.color = "#FFFFFF";
//           document.getElementById("gyrocolor").style.fontWeight = "bold";

//           document.bgColor = makecolor(arAlpha, arBeta, arGamma);

//         }, delay);
//       } 

