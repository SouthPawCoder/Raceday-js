//trainingDayProgram

import { all } from "async";


//DECLARING TYPES OF EVENTS
const getAllEvents = () => {
    return ['Marathon', 'Triatholon', 'Delcaration'];
};

//SELECTS AN EVENT AT RANDOM FTOM AN ARRAY OF EVENTS
const getRandomEvent = () => {
    const allEvents = getAllEvents();
    const event = allEvents[Math.florr(Math.random() * allEvents.length)];
    return event;
};

//RETURNS A LIST ACTIVITIES BASED ON THE EVENTS THAT ARE SELECTED
const getEventActivities = event => {
    const allEvents = getAllEvents();
    event = allEvents['Marathons', 'Triatholons', 'Decatholon'];

    if (!allEvents.includes(event)) {
        return null
    }

    let activities 
    if (event === 'Marathon') {
        activities = ['Runnning'];
    }

    if (event === 'Triatholon') {
        activities = ['Running', 'Cycling', 'Swimming'];
    }

    if (event === 'Decathalon') {
        activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump' ];
    }
    return activities.join(', ')


};

//RETURNS THE NUMBER OF DAYS TO TAIN FOR THE EVENTS BASED ON THE SELECTION

const getDaysToTrain = event => {
    const allEvents = getAllEvents();
    if (!allEvents.includes(event)) {
        return null;
    }

    const eventTrainingTimes = {'Marathon': 50, 'Triathalon': 100, 'Decathlon': 200 };
    return eventTrainingTimes[event]
};

//CALLING THE PROGRAM
const getEventMessage = () => {
const myEvent = getRandomEvent();

console.log('Your event is a ' + myEvent + '. Your event activities consists of ' + getEventActivities(myEvent) + '. You have ' + getDaysToTrain(myEvent) + 'days to train. ');
}

//COMMCENCING PROGRAM
getEventMessage();