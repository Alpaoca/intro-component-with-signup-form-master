document
  .querySelector('button[type="submit"]')
  .addEventListener("click", (e) => {
    e.preventDefault();

    validate();
  });
let isSubmit = false;
const inputs = document.getElementsByTagName("input");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

[...inputs].forEach((input) => {
  input.addEventListener("input", () => setInvalid(input));
});

function setInvalid(input) {
  const invalidElement = input.nextElementSibling;
  if (input.value === "" && isSubmit) {
    invalidElement.style.display = "flex";
    input.style.border = "2px solid hsl(358, 61%, 63%)";
    input.placeholder = "";
    input.style.background =
      "url(./images/icon-error.svg) no-repeat scroll 37em";
  } else if (input.value) {
    invalidElement.style.display = "none";
    input.style.border = "1px solid hsl(246, 25%, 77%)";
    input.style.color = "hsl(0, 0%, 0%)";
    input.style.removeProperty("background");
  }
}

function validate() {
  isSubmit = true;
  [...inputs].forEach((x) => {
    if (x.value === "") {
      x.nextElementSibling.style.display = "flex";
      x.style.border = "2px solid hsl(358, 61%, 63%)";
      x.placeholder = "";
      x.style.background = "url(./images/icon-error.svg) no-repeat scroll 37em";
    }
  });
  const emailBox = inputs[2]
  if (emailRegex.test(email.value)) {

  } else {
    emailBox.nextElementSibling.style.display = "flex";
    emailBox.style.border = "2px solid hsl(358, 61%, 63%)";
    emailBox.style.color = "hsl(358, 61%, 63%)";
    emailBox.style.background =
      "url(./images/icon-error.svg) no-repeat scroll 37em";
  }
}

