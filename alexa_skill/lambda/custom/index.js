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
    delete handlerInput.requestEnvelope.session
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

    send_message_to_chrome('{"command": "number links"}');

    response = handlerInput.responseBuilder.speak(speechText).reprompt(speechText).getResponse();
    // response = handlerInput.responseBuilder.getResponse();
    // delete body.response.shouldEndSession;
    return response;
  }
};

const CancelLinksIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'CancelLinksIntent';
  },
  handle (handlerInput) {
    const speechText = 'Links canceled!';

    send_message_to_chrome('{"command": "cancel links"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
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
    const link_number = handlerInput.requestEnvelope.request.intent.slots.number.value;

    send_message_to_chrome('{"command": "access link", "link_number": ' + link_number + '}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
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

    send_message_to_chrome('{"command": "refresh"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
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

    send_message_to_chrome('{"command": "back"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
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

    send_message_to_chrome('{"command": "forward"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const ScrollUpIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'ScrollUpIntent';
  },
  handle (handlerInput) {
    const speechText = 'Scrolling up!';

    send_message_to_chrome('{"command": "scroll up"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const ScrollDownIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'ScrollDownIntent';
  },
  handle (handlerInput) {
    const speechText = 'Scrolling down!';

    send_message_to_chrome('{"command": "scroll down"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const ScrollToBottomIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'ScrollToBottomIntent';
  },
  handle (handlerInput) {
    const speechText = 'Hit rock bottom!';

    send_message_to_chrome('{"command": "scroll to bottom"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const ScrollToTopInetntHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'ScrollToTopIntent';
  },
  handle (handlerInput) {
    const speechText = 'Scrolling to top!';

    send_message_to_chrome('{"command": "scroll to top"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const AutoScrollUpIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'AutoScrollUpIntent';
  },
  handle (handlerInput) {
    const speechText = 'Auto scrolling up!';

    send_message_to_chrome('{"command": "auto scroll up"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const AutoScrollDownIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'AutoScrollDownIntent';
  },
  handle (handlerInput) {
    const speechText = 'Auto scrolling Down!';

    send_message_to_chrome('{"command": "auto scroll down"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const GoogleQueryIntent = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'GoogleQueryIntent';
  },
  handle (handlerInput) {
    const speechText = 'Googled this for you!';
    var query = handlerInput.requestEnvelope.request.intent.slots.Query.value;

    send_message_to_chrome('{"command": "google query", "query": "' + query + '"}');

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const HelpIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle (handlerInput) {
    const speechText = 'Help menu still needs to be created.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
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

    const speechText = 'Sorry, I\'m a little nervous right now. What was the command again?';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
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
    ScrollUpIntentHandler,
    ScrollDownIntentHandler,
    ScrollToBottomIntentHandler,
    ScrollToTopInetntHandler,
    AutoScrollUpIntentHandler,
    AutoScrollDownIntentHandler,
    GoogleQueryIntent,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();