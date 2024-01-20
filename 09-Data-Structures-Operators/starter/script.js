'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//propery NAmes
/* const properties = Object.keys(restaurant.openingHours);


let openStr = `We are open on ${properties.length} days : `;


for(const day of Object.keys(restaurant.openingHours)){
 openStr += `${day},`
  
}
//console.log(openStr);


// property values

const values = Object.values(restaurant.openingHours);


const entries = Object.entries(restaurant.openingHours);



for (const [key , {open, close}] of entries){
  
  console.log(`On ${key} we open at ${open} and close at ${close}`);

};
 */

/* const {name , categories, openingHours} = restaurant;
console.log(name , categories , openingHours);

const {fri : {open, close}} = openingHours;
console.log(open, close); */

/* const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[,rating],[,ratingCount]] = ratings;
console.log(rating, ratingCount);


const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRating, threeStarRating =0]= ratingStars;
console.log(threeStarRating); */

/* const arr = [7, 8, 9];

const newArr = [1,2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(...menu);
 */

const rest1 = {
  name: 'Capri',
  //numGuests: 20
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

// Nullisgh operator assignement (null and undefined)
/* rest1.numGuests ??= 10;
rest2.numGuests ??= 10; */

//rest1.owner = rest1.owner && 'anonymous'
//rest1.owner &&= 'anonymous'
//rest2.owner = rest2.owner && 'anonymous'
//rest2.owner &&=  'anonymous'

//console.log(rest1);
//console.log(rest2);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* for (const [x, y] of game.scored.entries()) {
  console.log(`Goal ${x + 1} : ${y}`);
}

const oddValues = Object.values(game.odds);

const average = function(...num){

}
let sum = 0;
let avg;
for (let i = 0; i < oddValues.length; i++) {
  sum += oddValues[i];
}
avg = sum / oddValues.length;
console.log(avg); */

/* const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const team1Final = [...players1, ...['Thiago', 'Coutinho', 'Perisic']];

const { team1, x:draw, team2 } = game.odds;
console.log(draw);

const printGoals = function (...players){

  console.log(`${players.length} goals scored`);
  
}

printGoals(...game.scored) */

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
  
} */

// maps

/* const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');


console.log(rest.get(true));

const time = 21;
console.log(
rest.get(time > rest.get('open') && time < rest.get('closed')));

console.log(
rest.has('categories'));

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);

console.log(rest.size);

console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'try again']
])

console.log(question);
// convert object to map

const hoursMap = new Map(Object.entries(restaurant.openingHours));


console.log(hoursMap);

console.log(question.get('question'));

for(const [key, value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  
  
}

const answer = 3;//Number(prompt('Your answer')); 

/* answer === question.get('correct') ? console.log(question.get(true)): console.log(question.get(false));
 */
/*
console.log(
question.get(question.get('correct') === answer));

// convert map to array

console.log(...question);
 */

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happened, on average, every ${90/ gameEvents.size} minutes`);

for(const [min, event] of gameEvents){

    const half = min <= 45 ? 'First' : 'Second';
    console.log(`[${half} Half] ${min} : ${event}`);
    
  // my way
   /* key <= 45
     ? console.log(`[First Half] ${key} : ${gameEvents.get(key)}`)
     : console.log(`[Second Half] ${key} : ${gameEvents.get(key)}`);
   ; */

  
}
