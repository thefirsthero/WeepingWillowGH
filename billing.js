$(window).on('pageshow', function () {
  // Reset the form and clear input values
  $('#booking-form')[0].reset();
});

$(document).ready(function () {
  // Initialize date range picker
  var dateRangePicker = $('input[name="date-range"]').daterangepicker({
    isInvalidDate: function (date) {
      // Get the current date
      var currentDate = moment().startOf('day');

      // Define your blocked dates here
      var blockedDates = [
        '2023-07-15',
        '2023-07-16',
        '2023-07-17'
      ];

      // Convert the date to a string in the format 'YYYY-MM-DD'
      var dateString = date.format('YYYY-MM-DD');

      // Check if the date is in the blocked dates array
      if (blockedDates.includes(dateString)) {
        return true; // Return true to mark the date as invalid
      }

      // Check if the date is in the past
      if (date.isBefore(currentDate)) {
        return true; // Return true to mark the date as invalid
      }

      return false; // Return false for valid dates
    }
  });

  // Initialize date range picker
var dateRangePicker = $('input[name="date-range"]').daterangepicker({
  isInvalidDate: function (date) {
    // Get the current date
    var currentDate = moment().startOf('day');

    // Define your blocked dates here
    var blockedDates = [
      '2023-07-15',
      '2023-07-16',
      '2023-07-17'
    ];

    // Convert the date to a string in the format 'YYYY-MM-DD'
    var dateString = date.format('YYYY-MM-DD');

    // Check if the date is in the blocked dates array
    if (blockedDates.includes(dateString)) {
      return true; // Return true to mark the date as invalid
    }

    // Check if the date is in the past
    if (date.isBefore(currentDate)) {
      return true; // Return true to mark the date as invalid
    }

    return false; // Return false for valid dates
  }
});

// Handle date range selection
dateRangePicker.on('apply.daterangepicker', function (ev, picker) {
  var startDate = picker.startDate;
  var endDate = picker.endDate;

  // Check if any part of the selected range includes blocked dates
  var rangeStart = moment(startDate).startOf('day');
  var rangeEnd = moment(endDate).startOf('day');
  var blockedDates = [
    '2023-07-15',
    '2023-07-16',
    '2023-07-17'
  ];
  var includesBlockedDates = false;

  for (var m = moment(rangeStart); m.isSameOrBefore(rangeEnd); m.add(1, 'days')) {
    var mString = m.format('YYYY-MM-DD');
    if (blockedDates.includes(mString)) {
      includesBlockedDates = true;
      break;
    }
  }

  if (includesBlockedDates) {
    // Show an error message or take appropriate action
    alert('The selected date range includes blocked dates. Please choose different dates.');
    picker.clear(); // Clear the date range selection
  } else {
    // Valid date range, proceed with further actions
    // console.log('Selected date range is valid:', startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'));
  }
});

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
      // Submit the form
      $('#booking-form').unbind('submit').submit();
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


// Function to retrieve the room price from the previous screen (local storage) & display it
function calculateRoomPrice() {
  // Adjust this logic according to your price calculation requirements
  var details = localStorage.getItem('amount');
  details = JSON.parse(details);
  var roomPrice = details.money; // Example room price
  return roomPrice;
}


// Function to retrieve the room type from the previous screen (local storage) & display it
function displayRoomType() {

  var details = localStorage.getItem('amount');
  details = JSON.parse(details);

  if (details && details.room) {
    var roomType = details.room;
  }

  var roomTypeLabel = document.querySelector('.room-type-label');
  roomTypeLabel.textContent = roomType;
}

// Set the payfast room price
function setRoomPrice() {

  transactionAmount = calculateRoomPrice()

  // Set transaction amount
  $('#transaction-amount').val(transactionAmount);
}

// Call the displayRoomType function on page load
displayRoomType();
setRoomPrice();
