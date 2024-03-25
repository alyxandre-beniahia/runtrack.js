var date = new Date("2024/07/14");

function jourTravaille(date) {
  const getDayName = (number) => {
    const joursSemaines = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    return joursSemaines[number];
  };

  const getMonthName = (number) => {
    const joursSemaines = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Aout",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];
    return joursSemaines[number];
  };
  const publicHolidays = [
    new Date("2024/01/01").getTime() / 1000,
    new Date("2024/04/01").getTime() / 1000,
    new Date("2024/05/01").getTime() / 1000,
    new Date("2024/05/08").getTime() / 1000,
    new Date("2024/05/09").getTime() / 1000,
    new Date("2024/05/20").getTime() / 1000,
    new Date("2024/07/14").getTime() / 1000,
    new Date("2024/08/15").getTime() / 1000,
    new Date("2024/11/01").getTime() / 1000,
    new Date("2024/11/11").getTime() / 1000,
    new Date("2024/12/25").getTime() / 1000,
  ];

  if (publicHolidays.includes(Math.floor(date.getTime() / 1000))) {
    if (
      getDayName(date.getDay()) != "Samedi" &&
      getDayName(date.getDay()) != "Dimanche"
    ) {
      console.log(
        `Le ${getDayName(date.getDay())} ${date
          .toString()
          .slice(8, 10)} ${getMonthName(date.getMonth())} est un jour férie `
      );
    } else {
      console.log(
        `Le ${getDayName(date.getDay())} ${date
          .toString()
          .slice(8, 10)} ${getMonthName(date.getMonth())} est un week-end `
      );
    }
  } else {
    console.log(
      `Oui ${getDayName(date.getDay())} ${date
        .toString()
        .slice(8, 10)} ${getMonthName(date.getMonth())} est un jour travaillé`
    );
  }
}

jourTravaille(date);
