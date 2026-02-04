// ----------------------------
// CONTACT FORM
// ----------------------------

// Step 1: Grab the form and the output elements
const contactForm = document.querySelector('#contact-form');
const contactOutputStatus = document.querySelector("#contact-output-status")
const contactOutputMessage = document.querySelector("#contact-output-message")
const contactOutputFrom = document.querySelector("#contact-output-from")

// Step 2: Add a "submit" event listener to the form(don't forget event!)
contactForm.addEventListener('submit', (event) => {
  // Step 3: event.preventDefault()
  event.preventDefault();

  // Step 4: Get the form data
  const message = contactForm.elements.message.value;
  const name = contactForm.elements.name.value;
  const email = contactForm.elements.email.value;

  // use .checked for checkboxes, not .value
  const isAnonymous = contactForm.elements.anonymous.checked;

  // Step 5: Use the form data (display it)
  contactOutputMessage.textContent = `${message}`;
  contactOutputStatus.textContent = "Message Received!";

  const sender = isAnonymous ? 'Anonymous' : `${name} (${email})`
  contactOutputFrom.textContent = sender;

  // Step 6: Reset the form
  contactForm.reset();
});
