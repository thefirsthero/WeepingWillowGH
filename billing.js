$(document).ready(function () {
    // Initialize date range picker
    $('input[name="date-range"]').daterangepicker();
  
    // Handle form submission
    $('.submit-btn').click(function (event) {
      event.preventDefault();
      var fullName = $('input[name="full-name"]').val();
      var dateRange = $('input[name="date-range"]').val();
      var rooms = $('select[name="rooms"]').val();
      var adults = $('select[name="adults"]').val();
      var children = $('select[name="children"]').val();
      var email = $('input[name="email"]').val();
      var phone = $('input[name="phone"]').val();
  
      var bookingDetails = {
        fullName: fullName,
        dateRange: dateRange,
        rooms: rooms,
        adults: adults,
        children: children,
        email: email,
        phone: phone,
      };
  
      console.log(bookingDetails);
  
      // Perform any additional processing or validation as needed
  
      // Save the booking details to localStorage or perform other actions
      // Example: localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
  
      // Display success message or redirect to another page
      alert('Booking successful!');
      window.location.href = 'index.html';
    });
  });
  