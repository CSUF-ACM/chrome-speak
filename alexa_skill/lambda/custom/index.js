/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle (handlerInput) {
    // If this statement returns true, then execute the code in "handle,"
    // else if (see exports.handler down below)
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle (handlerInput) {
    const speechText = 'Welcome to Chrome Speak.';

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
    const speechText = 'Enumerating links.';

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
    const speechText = 'Removing link numbers.';

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
    const speechText = 'Removing link numbers.';

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
    const speechText = 'Help menu still in development.';

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
    // CancelLinksIntentHandler,
    // AccessLinkIntentHandler,
    HelpIntentHandler, // else if (from top to bottom)... 
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler) // else (this canHandle is always true)
  .lambda();
