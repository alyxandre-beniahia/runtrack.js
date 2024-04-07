document.addEventListener("DOMContentLoaded", function () {
  const userNameNode = document.createTextNode(
    `Welcome ${localStorage.getItem("name")}`
  );
  document.getElementById("header__title").appendChild(userNameNode);

  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: "bootstrap5",
    initialView: "dayGridMonth",
    headerToolbar: {
      center: "addEventButton",
    },
    eventClick: function (info) {
      var eventDate = info.event.start;

      // Check if the event's date is in the future
      if (eventDate > new Date()) {
        if (confirm("Are you sure you want to delete this event?")) {
          info.event.remove();
          var userEvents =
            JSON.parse(localStorage.getItem("user_events")) || {};
          var email = localStorage.getItem("email");
          var events = userEvents[email] || [];

          // Filter out the deleted event
          var updatedEvents = events.filter(function (event) {
            return !(
              event.title === info.event.title &&
              event.date === info.event.start.toISOString()
            );
          });

          // Update localStorage with the updated events
          userEvents[email] = updatedEvents;
          localStorage.setItem("user_events", JSON.stringify(userEvents));
        }
      } else {
        alert("You can only delete events in the future.");
      }
    },
    customButtons: {
      addEventButton: {
        text: "Demande d'autorisation de présence",
        click: function () {
          var userEvents =
            JSON.parse(localStorage.getItem("user_events")) || {};

          var email = localStorage.getItem("email");
          var events = userEvents[email] || [];

          var title = prompt("Enter the event title");
          var dateStr = prompt("Enter a date in YYYY-MM-DD format");
          var date = new Date(dateStr + "T00:00:00");

          if (!isNaN(date.valueOf()) && title.trim() !== "") {
            calendar.addEvent({
              title: title,
              start: date,
              allDay: true,
            });
            events.push({ title: title, date: date.toISOString() });

            userEvents[email] = events;

            localStorage.setItem("user_events", JSON.stringify(userEvents));
          } else {
            alert("Invalid input.");
          }
        },
      },
    },
  });

  var userEvents = JSON.parse(localStorage.getItem("user_events")) || {};
  var email = localStorage.getItem("email");
  var events = userEvents[email] || [];
  events.forEach(function (event) {
    calendar.addEvent({
      title: event.title,
      start: event.date,
      allDay: true,
    });
  });

  calendar.render();

  const logoutLink = document.querySelector(".nav-link");
  logoutLink.addEventListener("click", function () {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href = "login.html";
  });
});

//Need to store the name of the event, add the edit event option
