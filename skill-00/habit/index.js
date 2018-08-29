'use strict';
const Alexa = require('alexa-sdk');

//app id -> alexa skill id
const APP_ID = "amzn1.ask.skill.d7264309-256f-4e7d-8580-bb3a9bae161d";

// constants
const SKILL_NAME = "Habits";
const GET_GOOD_HABIT_MESSAGE = "Here's your good habit: ";
const HELP_MESSAGE = "You can ask me for a good habit. Something like... Tell me a Good Habit!";
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = "Learn Good. Bye bye!";


// habits
const habits = [
        "Brush your teeth before going to bed!",
        "Wash your hands before eating food!",
        "Put keys on keyholders!",
        "Put things on their proper places!",
        "Respect your parents and elders!",
        "Do Not watch television from close!",
        "Do Not fight with your sibling!",
        "Believe is giving! It always makes you a better person!"
    ];
    
// handlers 
const handlers = {
    'LaunchRequest': function () {
        this.emit('GetGoodHabitIntent');
    },
    'GetGoodHabitIntent' : function () {
        const habitarray = habits;
        const habitindex = Math.floor(Math.random() * habitarray.length);
        const randomhabit = habitarray[habitindex];
        const speechOutput = GET_GOOD_HABIT_MESSAGE + randomhabit;
        
        this.response.cardRenderer(SKILL_NAME, randomhabit);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent' : function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;
        
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent' : function () {
        const speechOutput = STOP_MESSAGE;
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent' : function () {
        const speechOutput = STOP_MESSAGE;
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    }
};

exports.handler = function (event, context, callback) {
      //
     // callback(null, "Hello world");
     const alexa = Alexa.handler(event, context, callback);
     alexa.APP_ID = APP_ID;
     alexa.registerHandlers(handlers);
     alexa.execute();
};
