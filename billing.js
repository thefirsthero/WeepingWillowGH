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
  var roomPrice = document.querySelector('.room-price-label');

  // Set prices based on the selected number of adults and children
  if (adults === "1") {
    childrenSelect.disabled = false;
    childrenSelect.innerHTML = '<option value="" selected hidden>No. of Children</option>' +
      '<option value="0">0</option>' +
      '<option value="1">1</option>' +
      '<option value="2">2</option>';

    // Calculate and display prices
    roomPrice.textContent = "Price: R" + calculateRoomPrice();
  } else if (adults === "2") {
    childrenSelect.disabled = false;
    childrenSelect.innerHTML = '<option value="" selected hidden>No. of Children</option>' +
      '<option value="0">0</option>' +
      '<option value="1">1</option>';

    // Calculate and display prices
    roomPrice.textContent = "Price: R" + calculateRoomPrice();
  }
}


// Function to calculate the price for the room
function calculateRoomPrice() {
  // Adjust this logic according to your price calculation requirements
  var details = localStorage.getItem('amount');
  details = JSON.parse(details);
  var roomPrice = details.money; // Example room price
  return roomPrice;
}


// Populate and display the room type based on the selected number of rooms
function displayRoomType() {

  var details = localStorage.getItem('amount');
  details = JSON.parse(details);

  if (details && details.room) {
    var roomType = details.room;
  }

  var roomTypeLabel = document.querySelector('.room-type-label');
  roomTypeLabel.textContent = roomType;
}

// Populate and display the room type based on the selected number of rooms
function setRoomPrice() {

  var details = localStorage.getItem('amount');
  details = JSON.parse(details);

  if (details && details.money) {
    var transactionAmount = details.money;
  }
  console.log(details.money)

  // Set transaction amount
  $('#transaction-amount').val(transactionAmount);
}

// Call the displayRoomType function on page load
displayRoomType();
setRoomPrice();
