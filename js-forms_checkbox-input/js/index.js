console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  hideTosError();
  showTosError();
  const formElements = event.target.elements;
  console.log(formElements.tos.checked);
  if (formElements.tos.checked) {
    hideTosError();
    alert("Form submitted");
    return;
  }
  showTosError();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  //alert("Form submitted");
});
