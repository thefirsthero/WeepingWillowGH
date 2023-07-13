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