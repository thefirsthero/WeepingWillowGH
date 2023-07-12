$(document).ready(function () {
    // Initialize date range picker
    $('input[name="date-range"]').daterangepicker();
  
    // Handle form submission
    $('#booking-form').submit(function (event) {
      event.preventDefault();
  
      // Validate form fields
      var fullName = $('input[name="full-name"]').val();
      var email = $('input[name="email"]').val();
      var phone = $('input[name="phone"]').val();
  
      var isValid = true; // Track overall form validity
  
      if (!isValidFullName(fullName)) {
        alert('Please enter a valid full name.');
        isValid = false;
      }
  
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
      }
  
      if (!isValidPhone(phone)) {
        alert('Please enter a valid phone number.');
        isValid = false;
      }
  
      if (isValid) {
        // Redirect to the index page on successful submission
        window.location.href = 'index.html';
      }
    });
  });
  
  // Function to validate full name
  function isValidFullName(fullName) {
    // Check if the full name is not empty
    if (fullName.trim() === '') {
      return false;
    }
  
    // Add any additional validation rules for the full name if needed
  
    return true;
  }
  
  // Function to validate email address
  function isValidEmail(email) {
    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if the email matches the pattern
    return emailPattern.test(email);
  }
  
  // Function to validate phone number
  function isValidPhone(phone) {
    // Regular expression pattern for phone number validation
    var phonePattern = /^\d{10}$/;
  
    // Check if the phone number matches the pattern
    return phonePattern.test(phone);
  }
  
  function updateChildren() {
    var adults = document.getElementById("adults").value;
    var childrenSelect = document.getElementById("children");
  
    if (adults === "1") {
      childrenSelect.disabled = false;
      childrenSelect.innerHTML = '<option value="" selected hidden>Number of children</option>' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="2">2</option>';
    } else if (adults === "2") {
      childrenSelect.disabled = false;
      childrenSelect.innerHTML = '<option value="" selected hidden>Number of children</option>' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>';
    }
  }
  