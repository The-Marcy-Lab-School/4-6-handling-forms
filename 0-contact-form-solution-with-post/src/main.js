// ----------------------------
// CONTACT FORM
// ----------------------------

// Step 1: Grab the form and the output elements
const contactForm = document.querySelector('#contact-form');
const contactOutputStatus = document.querySelector("#contact-output-status")
const contactOutputMessage = document.querySelector("#contact-output-message")
const contactOutputFrom = document.querySelector("#contact-output-from")

const FORMSPREE_URL = "https://formspree.io/f/mreegkrb";

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formValues = Object.fromEntries(new FormData(contactForm));
  formValues.anonymous = Boolean(formValues.anonymous);

  const { anonymous, name, email, message } = formValues;

  // Make changes to the formValues before sending
  if (anonymous) {
    delete formValues.name;
    delete formValues.email;
  }

  const config = {
    method: 'POST',
    body: JSON.stringify(formValues),
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  };

  try {
    const response = await fetch(FORMSPREE_URL, config);
    if (!response.ok) {
      throw Error(`Failed to submit. ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    console.log("Success:", data);
    const sender = Boolean(anonymous) ? "Anonymous" : `${name} (${email})`;
    contactOutputStatus.textContent = "Message Sent to Formspree!";
    contactOutputFrom.textContent = sender;
    contactOutputMessage.textContent = message;

    // Reset the form
    contactForm.reset();
  } catch (error) {
    console.error('Error:', error);
    contactOutputStatus.textContent = 'Failed to send message. Please try again.';
  }
});

/* 
.then and .catch syntax:

const FORMSPREE_URL = "https://formspree.io/f/FORMSPREE_URL";

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formValues = Object.fromEntries(new FormData(contactForm));
  const { anonymous, name, email, message } = formValues;

  // Make changes to the formValues before sending
  formValues.anonymous = Boolean(formValues.anonymous);
  if (formValues.anonymous) {
    delete formValues.name;
    delete formValues.email;
  }

  // Set up the POST request config
  const config = {
    method: 'POST',
    body: JSON.stringify(formValues),
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  };

  // Send the fetch
  fetch(FORMSPREE_URL, config)
    .then((response) => {
      // 3. Check if the response was successful
      if (!response.ok) {
        throw Error(`Failed to submit. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      // 4. Handle success — update the UI
      console.log('Success:', data);
      
      const sender = Boolean(anonymous) ? "Anonymous" : `${name} (${email})`;
      
      contactOutputStatus.textContent = "Message Sent to Formspree!";
      contactOutputFrom.textContent = sender;
      contactOutputMessage.textContent = message;
      contactForm.reset();
    })
    .catch((error) => {
      // 5. Handle errors — show error message
      console.error('Error:', error);
      contactOutputStatus.textContent = 'Failed to send message. Please try again.';
    });
  contactForm.reset();
});
*/