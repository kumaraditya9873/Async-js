// task :- 1) in slideshow.html,grab the images
// array from localstorage
// 2) after every three seconds ,grab
// a image from images array and show on DOM

let arr = [];

function startSS() {
  //   1.) get the images array from local storage

  let images = JSON.parse(localStorage.getItem("images"));
  console.log("images:", images);
}
