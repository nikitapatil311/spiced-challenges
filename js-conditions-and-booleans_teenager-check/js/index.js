const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
var output = document.querySelector('[data-js="age-output"]');

//var buttonOutput = " ";

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
  if (age >= 13 && age <= 17) {
    output.innerHTML = "I am a Teenager";
  } else {
    output.innerHTML = "I am not a Teenager";
  }
});
