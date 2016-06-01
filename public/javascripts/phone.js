var socket = io()

var move = function(id){
  socket.emit('newMove',id);
};

socket.emit('acceleration',coordinates);

window.ondevicemotion = function(e){
    var ax = e.accelerationIncludingGravity.x;
    var ay = e.accelerationIncludingGravity.y;
    var az = e.accelerationIncludingGravity.z;

    var x =Math.round(ax);
    var y =Math.round(ay);
    var z =Math.round(az);

    var coordinates = {'x':x, 'y':y, 'z':z}

    // send data over the socket
    socket.emit('acceleration',coordinates);
}





