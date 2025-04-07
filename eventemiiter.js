// create event - listen for evernts , emit events on trigger 
// refer documentation

import events from "events";

var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
  setTimeout(() => {
    console.log('settimeout')
  }, 3000);
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

console.log('something end');