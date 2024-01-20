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

// working with strings

const airline = 'TAP Air Portugal';
const plane = 'A320';
/* console.log(plane[0]);
console.log('B730'[3]);

console.log(airline.slice(4));

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You are lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
 */

const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing  email
const email = 'fouad@gmail.io';
const loginEmail = ' Fouad@Gmail.Io \n';



console.log(loginEmail.toLowerCase().trim());

// replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announecement = 'All passengers to door 23, door 23';
console.log(announecement.replaceAll('door', 'gate'));

console.log('a+very+nice+string'.split('+'));



