// in html ,create an input box and two
// buttons named 'submit url' and 'watch slideshow'

// store the img urls in an array named 'images',store
// that array in localStorage

let arr = [];
function addImage() {
  // we will first try to get the data from localStorage
  let images = JSON.parse(localStorage.getItem("images"));

  //   if it dosent exist create it
  if (images === null) {
    images = [];
  }
  let url = document.getElementById("image").value;

  //   add the value to array
  arr.push(url);
  //   set the array as "images"
  localStorage.setItem("images", JSON.stringify(arr));
}
