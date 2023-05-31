console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  function calculatePizzaGain(diameter1) {
    var area1 = (1 / 4) * Math.PI * diameter1 * diameter1;

    var pizzaGain1 = ((area2 - area1) / area1) * 100;
    outputSection.innerHTML = Math.round(pizzaGain1);
  }
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  function calculatePizzaGain(diameter2) {
    var area2 = (1 / 4) * Math.PI * diameter2 * diameter2;
    var pizzaGain2 = ((area2 - area1) / area1) * 100;
    outputSection.innerHTML = Math.round(pizzaGain2);
  }
});

// Task 1
// define the function calculatePizzaGain here

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
