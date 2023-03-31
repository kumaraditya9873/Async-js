// // javascript is single threaded ,syncronous language

// console.log(`i'm first`);
// console.log(`i'm second`);
// console.log(`i'm third`);

// console.log(`i'm first`);
// boilingWater();
// console.log(`i'm third`);

// function boilingWater() {
//   console.log(`boiling...`);
//   for (let i = 0; i <= 10000; i++) {
//     console.log("still not done");
//   }
//   console.log(`done...`);
// }

// -x-x--x-x-x-x-x-x--x-x-x-x-x--x-x-x-x-x-x--x-x-x-x-x-

// lecture 3 :-recipe example

// task :-make soup ,boil water 10 min ,chop carrots, add carrots boil for 5 min ,chop onions ,add onions boil for 5 min
boilWater(100000);
console.log(`chop carrots`);
boilWater(5000);
console.log(`chop onions`);
boilWater(5000);

function boilWater(time) {
  console.log(`boiling...`);
  for (let i = 0; i <= time; i++) {
    console.log("still not done");
  }
  console.log(`done...`);
}
