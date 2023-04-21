//(// promise cotains with the producing
// code and call the consuming code )

// task :Complete the assignment step by step

// 1. User should be able to enter their name and register. alert when registered.

// 2. All the registered people should be added to array

// 3. create a promise which will periodially check wheather the registred user is the first person in the array.

// 4. We need to start vaccinating people. we need to keep on removing them from array, write a function for this.

// 5. If user is first person, promise will resolve saying that they can get the vaccine now.
let arr = ["mannu", "shayam", "junaid", "akhil", "broto"];
function register() {
  let name = document.getElementById("name").value;
  arr.push(name);
  // console.log(`arr: ${arr}`);
  // console.log(`name:${name}`);
  let message = `${name} your registartion is bieng sucess ,please wait for your turn`;

  alert(message);

  let myPromise = new Promise(function (resolve, reject) {
    if (arr[0] === name) {
      resolve(`${name} your vaccination is completed`);
    }
  });

  myPromise.then(function (res) {
    console.log("res:", res);
  });
}

function starVaccination() {
  arr.shift(); // .shift is used to remove first element in the array
  console.log(`arr:${arr}`);

  if (arr.length === 0) {
    clearInterval(interval);
  }
}

let interval = setInterval(starVaccination, 3000);
