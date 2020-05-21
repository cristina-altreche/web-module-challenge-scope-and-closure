// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * Counter1 has the counter declared inside the outer function and Counter2 has the counter declared globally.
 * 2. Which of the two uses a closure? How can you tell?
 * They both are using closures. Counter1's inner function is using the count variable outside of it's scope. Counter2 is also using the count variable outside of its scope.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * Counter 1 would be preferrable since you can now create multiple instances of the counter. For Counter2 you are limited to just the counter2(). Counter2 would be better if
 * you want the variable count to be referenced elsewhere.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 10;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * 3);
}

// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(num, callback) {
  let arr = [];
  let homeTotal = 0;
  let awayTotal = 0;
  let results = {};

  for (let i = 0; i < num; i++) {
    let obj = { Home: callback(), Away: callback() };
    arr.push(obj);

    homeTotal = homeTotal + arr[i].Home;
    // console.log(homeTotal);
    awayTotal = awayTotal + arr[i].Away;
    // console.log(awayTotal);
  }

  results = {
    Home: homeTotal,
    Away: awayTotal,
  };
  return results;
}

// console.log(finalScore(9, inning));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(num, callback) {
  let home = 0;
  let away = 0;
  let totalHome = 0;
  let totalAway = 0;
  for (let i = 0; i < num; i++) {
    home = callback();
    away = callback();

    totalHome = totalHome + home;
    totalAway = totalAway + away;

    if (i + 1 === 1) console.log(`${i + 1}st inning: ${home} - ${away}`);
    else if (i + 1 === 2) console.log(`${i + 1}nd inning: ${home} - ${away}`);
    else if (i + 1 === 3) console.log(`${i + 1}rd inning: ${home} - ${away}`);
    else console.log(`${i + 1}th inning: ${home} - ${away}`);
  }
  return console.log(`Final Score: ${totalHome} - ${totalAway}`);
}
scoreboard(9, inning);
