// 4-registration-form: Form Validation with JavaScript

// TODO: Get references to the form and success message elements


// TODO: Create a validateForm function
// This function should:
// 1. Accept a formData object as a parameter
// 2. Create an empty errors object
// 3. Validate username (must be at least 3 characters)
// 4. Validate email (must contain @)
// 5. Validate password (must be at least 8 characters AND contain a number)
//    HINT: Use /\d/.test(password) to check for a number
// 6. Validate confirmPassword (must match password)
// 7. Return the errors object


// TODO: Create a displayErrors function
// This function should:
// 1. Accept an errors object as a parameter
// 2. Clear all previous error messages (querySelectorAll('.error'))
// 3. Remove error/valid classes from all inputs
// 4. For each error in the errors object:
//    - Find the error span by id (e.g., #username-error)
//    - Set its textContent to the error message
//    - Find the input and add the 'error' class
// 5. For inputs WITHOUT errors that have values:
//    - Add the 'valid' class


// TODO: Create a handleSubmit function
// In this function:
// 1. Prevent default
// 2. Extract form data using FormData API
// 3. Call validateForm with the form data
// 4. If there are errors:
//    - Call displayErrors with the errors
//    - Return early (don't submit)
// 5. If validation passes:
//    - Call displayErrors with an empty object (clears errors)
//    - Clear and show success message
//    - Create h3 and p elements
//    - Set their text content
//    - Append to success message div
//    - Add 'show' class to success message
//    - Reset the form


// TODO: Add a submit event listener to the form
