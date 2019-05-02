var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var awsIot = require('aws-iot-device-sdk');

// index.js creates a local server that listens on Port 3000
//




// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//


var device = awsIot.device({
   keyPath: '<YourPrivateKeyPath>',
  certPath: '<YourCertificatePath>',
    caPath: '<YourRootCACertificatePath>',
  clientId: '<YourUniqueClientIdentifier>',
      host: '<YourCustomEndpoint>'
});

//
//device connects to AWS IoT
// Subscribe to a topic(e.g. topic_1)
device
 .on('connect', function() {
   console.log('Established Connection to AWS IoT');
   device.subscribe('topic_1');
   //device.publish('topic_1', JSON.stringify({ test_data: 1}));
 });


//Listens for users connecting to the server
//Listens for messages from AWS IoT and pushes to the Chrome Extension when received

io.on('connection', function(socket){
  
  console.log("User connected.");
  device
  .on('message', function(topic, payload) {
    io.emit('message', payload.toString());
    console.log('message', topic, payload.toString()); // For debugging purposes, you can comment this line out
  });
  
    
});



//Configs server to listen on Port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});






  