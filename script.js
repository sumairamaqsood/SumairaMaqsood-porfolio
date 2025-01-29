document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // // Validate form fields (optional, since we already use required HTML attributes)
    // if (!name || !email || !message) {
    //   alert('Please fill in all fields.');
    //   return;
    // }

    // Store the inquiry data in localStorage (so it's available even after page reload)
    let inquiries = JSON.parse(localStorage.getItem('inquiries')) || [];
    inquiries.push({ name, email, message });
    localStorage.setItem('inquiries', JSON.stringify(inquiries));

    // Show a success message to the user
    // document.getElementById('responseMessage').innerText =
    //   'Your inquiry has been submitted successfully!';
    alert('Your inquiry has been submitted successfully!');

    // Clear the form after submission
    document.getElementById('contactForm').reset();
  });

// Function to display stored inquiries
function displayInquiries() {
  // Just an example: you could use this function to display stored inquiries somewhere, but it's optional.
}

// Display inquiries on page load (if any)
window.onload = function () {
  // Call displayInquiries() if you want to show saved inquiries on page load.
};
