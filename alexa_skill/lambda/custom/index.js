let AWS = require('aws-sdk');
const Alexa = require('ask-sdk-core');

const iot_data = new AWS.IotData({endpoint: 'a24zga3a3sdrrp-ats.iot.us-east-1.amazonaws.com'});

const send_message_to_chrome = (chrome_message) => {
    const mqtt_data = {
        topic: 'topic_1',
        payload: chrome_message,
        qos: 0
    };
        
    iot_data.publish(mqtt_data, (error_message, data) => {
        if(error_message)
            console.log(error_message);
        else
            console.log('Successfully published to IoT server.');
    });
} 

const LaunchRequestHandler = {
  canHandle (handlerInput) {
    // If this statement returns true, then execute the code in "handle,"
    // else if (see exports.handler down below)
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle (handlerInput) {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const NumberLinksIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle (handlerInput) {
    const speechText = 'Welcome to Chrome Speak!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Chrome Speak', speechText)
      .getResponse();
  }
};

const HelpIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle (handlerInput) {
    const speechText = 'Provide help statement';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Chrome Speak', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' ||
    handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle (handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Chrome Speak', speechText)
      .getResponse();
  }
};

const SessionEndedRequestHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle (handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  }
};

const ErrorHandler = {
  canHandle () {
    return true;
  },
  handle (handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  }
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder // exports.handler is the entry point of code like int main(){ }
  .addRequestHandlers(
    LaunchRequestHandler, // If canHandle returns true
    NumberLinksIntentHandler, // else if canHandle returns true
    CancelLinksIntentHandler,
    AccessLinkIntentHandler,
    HelpIntentHandler, // else if (from top to bottom)... 
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler) // else (this canHandle is always true)
  .lambda();
