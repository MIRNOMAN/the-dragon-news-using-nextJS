export function getCurrentDate() {
    // Create a new Date object
    var currentDate = new Date();
  
    // Define arrays for day and month names
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    // Get day, month, date, and year
    var day = daysOfWeek[currentDate.getDay()];
    var month = months[currentDate.getMonth()];
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
  
    // Display the information
   return `${day}, ${month}, ${date}, ${year}`;
  }
  
  // Call the function to display the current date
//   showCurrentDate();
  