document.addEventListener("DOMContentLoaded", function () {
  const userNameNode = document.createTextNode(
    `Welcome ${localStorage.getItem("name")}`
  );
  document.getElementById("header__title").appendChild(userNameNode);

  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    headerToolbar: {
      center: "addEventButton",
    },
    customButtons: {
      addEventButton: {
        text: "Demande d'autorisation de présence",
        click: function () {
          var userDates = JSON.parse(localStorage.getItem("user_dates")) || {};

          var email = localStorage.getItem("email");
          var dates = userDates[email] || [];

          var dateStr = prompt("Enter a date in YYYY-MM-DD format");
          var date = new Date(dateStr + "T00:00:00");

          if (!isNaN(date.valueOf())) {
            calendar.addEvent({
              title: "Demande de présence pour la journée",
              start: date,
              allDay: true,
            });
            dates.push(date);

            userDates[email] = dates;

            localStorage.setItem("user_dates", JSON.stringify(userDates));
          } else {
            alert("Invalid date.");
          }
        },
      },
    },
  });

  // Load user's dates onto the calendar
  var userDates = JSON.parse(localStorage.getItem("user_dates")) || {};
  var email = localStorage.getItem("email");
  var dates = userDates[email] || [];
  dates.forEach(function (date) {
    calendar.addEvent({
      title: "dynamic event",
      start: date,
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
