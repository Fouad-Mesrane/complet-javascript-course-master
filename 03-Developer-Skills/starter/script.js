// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const degrees1 = [17, 21, 23];
const degrees2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `...${arr[i]}C in ${i + 1} days`;
  }
  return str;
};

console.log(printForecast(degrees1));
console.log(printForecast(degrees2));
