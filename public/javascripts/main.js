

var greenTest = function(id){
  setInterval(function(){ 

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
}