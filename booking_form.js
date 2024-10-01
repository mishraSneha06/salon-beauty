// script.js
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form values
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    // Validate form fields
    if (service === '' || date === '' || time === '') {
      alert('Please fill in all the fields.');
      return;
    }
  
    // Display confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
  
    // Optionally, clear the form fields
    document.getElementById('bookingForm').reset();
  });
  