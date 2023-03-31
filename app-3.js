// task :-make soup ,
// boil water 10 min ,
// chop carrots,
//  add carrots boil for 5 min ,SetTimer etc
//  ,chop onions ,
//  add onions boil for 5 min
// Browser !!!!! Fetch Data , get Geolocation,setTimeOut,setTimer etc

boilWater();
console.log(`chop carrots`);

function boilWater() {
  console.log(`boiling....`);
  setTimeout(() => {
    console.log("done.");
    console.log("add carrots.");
    setTimeout(() => {
      console.log(`carrots done`);
      console.log(`add onions`);
      setTimeout(() => {
        console.log(`onions done`);
      }, 500);
    }, 500);
    console.log("chop onions");
  }, 1000);
}
