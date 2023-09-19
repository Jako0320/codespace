// Import React from the React library
import React from "react";

// Create a React component called CalendarPage
const CalendarPage = () => {

  // Declare a state variable called date to store the current date
  const [date, setDate] = React.useState(new Date());

  // Create a function to handle the previous month button click
  const handlePreviousMonth = () => {
    // Set the date to the previous month
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
  };

  // Create a function to handle the next month button click
  const handleNextMonth = () => {
    // Set the date to the next month
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
  };

  // Create a function to render the calendar days
  const renderCalendarDays = () => {
    // Create an empty array to store the calendar days
    const days = [];

    // Add empty days to the beginning of the week to align the calendar with the first day of the week
    for (let i = 0; i < date.getDay(); i++) {
      days.push(<td key={i} />);
    }

    // Add the calendar days to the array
    for (let i = 1; i <= date.getDate(); i++) {
      days.push(<td key={i}>{i}</td>);
    }

    // Add empty days to the end of the week to align the calendar with the last day of the week
    for (let i = date.getDate() + 1; i <= 7; i++) {
      days.push(<td key={i} />);
    }

    // Return the calendar days
    return days;
  };

  // Return the calendar page
  return (
    <div className="calendar-page">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>{"<"}</button>
        <span>{date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
        <button onClick={handleNextMonth}>{"<"}</button>
      </div>

      <table className="calendar">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>{renderCalendarDays()}</tr>
        </tbody>
      </table>
    </div>
  );
};

// Export the CalendarPage component so that it can be used in other modules
export default CalendarPage;
