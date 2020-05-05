/*
- When clicking **blue** it should change:

  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`

- When clicking **orange** it should change:

  - **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`

- When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`
  */

//Blue Button
var buttonBlue = document.getElementById("blueBtn");
buttonBlue.addEventListener("click", buttonBluClicked);
// Orange Button
var buttonOrange = document.getElementById("orangeBtn");
buttonOrange.addEventListener("click", buttonOrangeClicked);
//Green Button
var buttonGreen = document.getElementById("greenBtn");
buttonGreen.addEventListener("click", buttonGreenClicked);

//variables
var Jumbotron = document.querySelector(".jumbotron");
var donateAbikeButton = document.querySelector(".btn.btn-primary.btn-lrg");
var volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");

// funciones
function buttonBluClicked() {
  //- **Jumbotron** background color to `#588fbd`  
  Jumbotron.style.backgroundColor = "#588fbd";
  //- **Donate a bike** button background color to `#ffa500` 
  donateAbikeButton.style.backgroundColor = "#ffa500";
  //- **Volunteer** button background color to `black` and text color to `white`
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
}

function buttonOrangeClicked() {

  // - **Jumbotron** background color to `#f0ad4e`
  Jumbotron.style.backgroundColor = "#f0ad4e";
  // - **Donate a bike** button background color to `#5751fd`
  donateAbikeButton.style.backgroundColor = "#5751fd";
  // - **Volunteer** button background color to `#31b0d5` and text color to `white`
  volunteerButton.style.backgroundColor = "#31b0d5";
  volunteerButton.style.color = "white";
}

function buttonGreenClicked() {
  // - **Jumbotron** background color to `#87ca8a`
  Jumbotron.style.backgroundColor = "#87ca8a";
  // - **Donate a bike** button background color to `black`
  donateAbikeButton.style.backgroundColor = "black";
  //- **Volunteer** button background color to `#8c9c08`
  volunteerButton.style.backgroundColor = "#8c9c08";
}


/*
When the submit button is pressed, it should check that all the form fields are valid:

- The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields

**Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
*/
function partTwo() {
  var submitButton = document.querySelector("form .btn.btn-primary");

  var formList = document.querySelectorAll(".form-group");

  var emailInput = document.getElementById("exampleInputEmail1");

  submitButton.addEventListener("click", checkForm)

  function checkForm(event) {
    for (var i = 0; i < formList.length; i++) {
      var formlistItem = formList[i];
      var isInputValid = true;
      if (formlistItem.value.length == 0) {
        formlistItem.style.borderColor = "red";
        isInputValid = false;
      } else if (!emailInput.value.includes("@")) {
        emailInput.style.borderColor = "red";
        isInputValid = false;
      }
    }
    if (isInputValid) {
      for (var i = 0; i < formList.length; i++) {
        formlistItem = formList[i];
        formlistItem = [];
        formlistItem.style.borderColor = "ligthgrey";
      }
      alert("Thanks you for filling out the form!");
    }
  }
  event.preventDefault();

}