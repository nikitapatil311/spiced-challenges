/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

button.addEventListener("click", () => {
  console.log("1", firstInput.value, secondInput.value);
  // secondInput.value = firstInput.value;
  // console.log("2",firstInput.value, secondInput.value)

  secondInput.value = firstInput.value.toUpperCase();
  //firstInput.value = temp;
  console.log("3", firstInput.value, secondInput.value);

  const temp = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = temp;
  console.log("4", firstInput.value, secondInput.value); //const temp = firstInput.value;
});

const temp = firstInput.value;
firstInput.value = secondInput.value;
secondInput.value = temp;
