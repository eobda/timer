/*
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

Example:
node timer1.js 10 3 5 15 9 

This makes it beep at
3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

*/

// get array alarms from command line
const alarms = process.argv.slice(2);

// "set" alarms using 1000 milliseconds * each alarm
alarms.forEach((alarm) => {
  if (alarm > 0) {
    setTimeout(() => {
      // trigger system sound
      process.stdout.write('\x07');
    }, alarm * 1000);
  }
});