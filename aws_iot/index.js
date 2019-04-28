var awsIot = require('aws-iot-device-sdk');

// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts
// to connect with a client identifier which is already in use, the existing
// connection will be terminated.*/

var device = awsIot.device({
  keyPath: './config/private.pem.key',
  certPath: './config/certificate.pem.crt',
  caPath: './config/AmazonRootCA1.pem.txt',
  clientId: 'chrome',
  host: 'a24zga3a3sdrrp-ats.iot.us-east-1.amazonaws.com'
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//

// console.log(device);
device
  .on('connect', function () {
    console.log('connect');
    device.subscribe('topic_1');
    device.publish('topic_1', JSON.stringify({ test_data: 1}));
  });

device
  .on('message', function (topic, payload) {
    console.log('Hey YA');
    console.log('message', topic, payload.toString());
  });
