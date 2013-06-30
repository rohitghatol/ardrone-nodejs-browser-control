/**
 * Created with JetBrains WebStorm.
 * User: rohitghatol
 * Date: 6/28/13
 * Time: 5:47 PM
 * To change this template use File | Settings | File Templates.
 */
var arDrone = require('ar-drone');




//client.createRepl();
//client.animateLeds('blinkRed', 5, 10);

//client.on('navdata', console.log);

//client.takeoff();
//client
//    .after(5000, function() {
//
//        this.clockwise(0.5);
//        client.animateLeds('blinkRed', 5, 2);
//    })
//    .after(3000, function() {
//        //this.animate('flipLeft', 15);
//    })
//    .after(1000, function() {
//        this.stop();
//        this.land();
//    });

var io = require('socket.io-client'),
    socket = io.connect('localhost', {
        port: 3111
    });
socket.on('connect', function () { console.log("socket connected"); });
socket.emit('image', { image: 'whazzzup?' });


var client = arDrone.createClient();
client.getPngStream()
    .on('error', console.log)
    .on('data', function(frame) {
        socket.emit('image', { image: frame });
    });
