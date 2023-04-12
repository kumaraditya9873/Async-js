// 1.grab the value .

function getPaymentDetails(e) {
  e.preventDefault();
  const data = {
    number: document.getElementById("number").value,
    cvv: document.getElementById("cvv").value,
    otp: document.getElementById("otp").value,
  };
  // final stage -show the data here
  console.log(data);

  setTimeout(success, 5000);
}

function success() {
  alert("payment Sucessfull");
}

// e - is basically is an event
// .preventDefault -The preventDefault()
//  method cancels the event if it is cancelable,
//  meaning that the default action that belongs to
//  the event will not occur.

// For example, this can be useful when:

// 1.)Clicking on a "Submit" button,
// prevent it from submitting a form

//2.) Clicking on a link, prevent the link from
// following the URL
// Note: Not all events are cancelable.
// Use the cancelable property to find out if
// an event is cancelable.

// Note: The preventDefault() method does not prevent
//  further propagation of an event through the DOM.
//  Use the stopPropagation() method to handle this.
