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
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle (handlerInput) {
    const speechText = 'Welcome to Chrome Speak!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const NumberLinksIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'NumberLinksIntent';
  },
  handle (handlerInput) {
    const speechText = 'Links numbered!';

    send_message_to_chrome('message: number links');

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Chrome Speak', speechText)
      .getResponse();
  }
};

const CancelLinksIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'CancelLinksIntent';
  },
  handle (handlerInput) {
    const speechText = 'Links canceled!';

    send_message_to_chrome('message: cancel links');

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Chrome Speak', speechText)
      .getResponse();
  }
};

const AccessLinkIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'AccessLinkIntent';
  },
  handle (handlerInput) {
    const speechText = 'Hyperlink opened!';

    send_message_to_chrome('message: access link');

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Chrome Speak', speechText)
      .getResponse();
  }
};

const RefreshIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'RefreshIntent';
  },
  handle (handlerInput) {
    const speechText = 'Page refreshed!';

    send_message_to_chrome('message: refresh');

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Chrome Speak', speechText)
      .getResponse();
  }
};

const PreviousPageIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'PreviousPageIntent';
  },
  handle (handlerInput) {
    const speechText = 'Previous page reloaded!';

    send_message_to_chrome('message: back');

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Chrome Speak', speechText)
      .getResponse();
  }
};

const ForwardPageIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'ForwardPageIntent';
  },
  handle (handlerInput) {
    const speechText = 'Forward Page!';

    send_message_to_chrome('message: forward');

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

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler, 
    NumberLinksIntentHandler,
    CancelLinksIntentHandler,
    AccessLinkIntentHandler,
    RefreshIntentHandler,
    PreviousPageIntentHandler,
    ForwardPageIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();


