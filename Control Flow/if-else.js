// If-else statements are used to execute a block of code if a condition is true.
// If the condition is false, another block of code can be executed.

let hour = 20; // 24-hour format

if (hour >= 6 && hour < 12) {
  // if hour is between 6am and 12pm
  console.log("Good morning!"); // then log "Good morning!"
} else if (hour >= 12 && hour < 18) {
  // if it is between 12pm and 6pm
  console.log("Good afternoon!"); // then log "Good afternoon!"
} else console.log("Good evening!"); // otherwise log "Good evening!"
