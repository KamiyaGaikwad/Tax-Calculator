# Tax-Calculator
This is a simple tax calculator implemented in JavaScript. It calculates the overall income after considering gross income, extra income, age group and deductions. Additionally, it provides validation for input fields.

## References & Requirements
- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Do not restrict the user from entering incorrect values like characters in the number fields
    - Highlight an error icon to the right of the input field (shown as an example in the above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, don't show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
    - If the user has not entered this value and clicks on submit, show an error icon hovering over which should show that the input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on the above calculations.

## Assumptions
- **Input Validation:**
  - Input values are validated on focus, change, and when the submit button is clicked.
  - Errors are displayed to the user under the following conditions:
    - Typing a number less than zero results in an error message "Please type non-negative numbers".
    - Clicking on an input field and not typing anything or leaving any field empty and clicking the submit button results in an error message "This input field is mandatory".
    - Typing anything other than a number results in an error message "Please type numbers only".
- **Overall Income Calculation:**
  - If the sum of gross income, extra income, and deductions is less than or equal to 8 lakhs, the overall income is displayed as the sum of gross income and extra income.

## Run Locally
To run your application locally, follow these steps:
1. **Download the Code**: Download the HTML, CSS, and JavaScript files to your local machine.
2. **Open HTML File**: Open the HTML file in your preferred web browser. You can do this by double-clicking the HTML file or right-clicking and selecting "Open with" and choosing your web browser.
3. **Ensure Internet Connection**: Since your application uses Bootstrap icons via CDN links, ensure that you have an internet connection while running the application locally. If you don't have an internet connection, the icons may not be visible.
4. **Interact with the Application**: Once the HTML file is opened in your web browser, you can interact with the tax calculator just like you would on a live website. Input values, click the submit button, and verify that the calculations and error messages work as expected.

## Usage
To use the tax calculator:
- Input the gross income, extra income, age group, and total deductions.
- Click the submit button to calculate the overall income and display the result.
- If any input is invalid, error messages will be shown to guide the user on how to correct the inputs.
