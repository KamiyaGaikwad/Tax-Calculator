// Inputs
const inputs = document.querySelectorAll("input, select");
// Error icons
const errorIcons = document.querySelectorAll(".bi-exclamation-circle");
// Error texts
const errorTexts = document.querySelectorAll(
  ".bi-exclamation-circle .tooltiptext",
);

// Age group input
const ageGroup = document.querySelector("#age-group");

// Overall income element
const overallIncome = document.querySelector("#overall-income");
// Modal
const resultDiv = document.querySelector("#result");
// Close button
const closeButton = document.querySelector(".close");
// Submit button
const submitButton = document.querySelector(".submit");
// Tax text
const taxText = document.querySelector("#tax-text");

//overall income value
let overAllIncome = 0;

// Income limit
const incomeLimit = 800000;

// Functions

// Input checker function
// This function checks if the values in input and select field valid or not and show error icon accordingly
const inputChecker = (input, errorIcon, errorText) => {
  if (input.value.length == 0) {
    errorIcon.style.display = "flex";
    errorText.innerText = "This input field is mandatory";
  } else if (isNaN(input.value) && input != ageGroup) {
    errorIcon.style.display = "flex";
    errorText.innerText = "Please enter numbers only";
  } else if (Number(input.value) < 0) {
    errorIcon.style.display = "flex";
    errorText.innerText = "Please enter non-negative numbers only";
  } else {
    errorIcon.style.display = "none";
  }
};

// Submit checker function
// This function checks for error after submit button calls this function, it gives true if all inputs are valid and error free
const submitChecker = () => {
  let checkedInputs = Array.from(inputs).filter((inp) =>
    inp === ageGroup
      ? inp.value.length > 0
      : inp.value.length > 0 && !isNaN(inp.value) && inp.value >= 0,
  );

  return checkedInputs.length === inputs.length;
};

// Tax calculator function
// Calculates the overall income after tax calculations
const taxCalculator = () => {
  let incomeAfterDeductions =
    Number(inputs[0].value) + Number(inputs[1].value) - Number(inputs[3].value);

  overAllIncome =
    incomeAfterDeductions <= incomeLimit
      ? Number(inputs[0].value) + Number(inputs[1].value)
      : taxedIncomeCalculator(incomeAfterDeductions);
  overallIncome.innerText = "₹ " + overAllIncome;
  taxText.innerText =
    incomeAfterDeductions <= incomeLimit
      ? "no tax applicable"
      : "after tax deductions";
};

// Taxed income calculator function
// Calculates tax amounts which needs to be deducted
const taxedIncomeCalculator = (incomeAfterDeductions) => {
  let taxableIncome = incomeAfterDeductions - incomeLimit;
  let taxAmount =
    ageGroup.value === "lessthan40"
      ? 0.3 * taxableIncome
      : ageGroup.value === "between40and60"
        ? 0.4 * taxableIncome
        : 0.1 * taxableIncome;
  return incomeAfterDeductions - taxAmount;
};

// Event listeners

// Hide the modal if close button is clicked
closeButton.addEventListener("click", () => {
  resultDiv.style.display = "none";
});

// Checks every event for events focus and change and call inputChecker function to verify valid inputs and show error if invalid inputs
inputs.forEach((input, index) => {
  input.addEventListener("change", () => {
    inputChecker(input, errorIcons[index], errorTexts[index]);
  });
  input.addEventListener("focus", () => {
    inputChecker(input, errorIcons[index], errorTexts[index]);
  });
});

// Shows modal on click of submit button if all inputs are valid. Calls tax calculator function for overall income. Show error icons if inputs are invalid
submitButton.addEventListener("click", () => {
  if (submitChecker()) {
    taxCalculator();
    resultDiv.style.display = "flex";
    inputs.forEach((input) => (input.value = ""));
  } else {
    inputs.forEach((input, index) => {
      inputChecker(input, errorIcons[index], errorTexts[index]);
    });
  }
});
