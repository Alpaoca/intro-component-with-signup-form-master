document
  .querySelector('button[type="submit"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    validate();
  });
let isSubmit = false;
const inputs = document.getElementsByTagName("input");

[...inputs].forEach((input) => {
  input.addEventListener("input", () => setInvalid(input));
});

function setInvalid(input) {
  const invalidElement = input.nextElementSibling;
  if (input.value === "" && isSubmit) {
    invalidElement.style.display = "flex";
  } else if (input.value) {
    invalidElement.style.display = "none";
  }
}

function validate() {
  isSubmit = true;
  [...inputs].forEach((x) => {
    if (x.value === "") {
      x.nextElementSibling.style.display = "flex";
    }
  });
}
