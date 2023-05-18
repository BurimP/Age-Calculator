document.addEventListener("DOMContentLoaded", function () {
  const dayData = document.getElementById("day-data");
  const dayLabel = document.getElementById("day-label");

  const monthData = document.getElementById("month-data");
  const monthLabel = document.getElementById("month-label");

  const yearData = document.getElementById("year-data");
  const yearLabel = document.getElementById("year-label");

  const bottomLabel = document.getElementById("bottom-label");
  const secondBottomLabel = document.getElementById("second-bottom-label");
  const thirdBottomLabel = document.getElementById("third-bottom-label");

  const circle = document.getElementById("circle");

  //   Bottom Data

  const dayNum = document.getElementById("day-num");
  const monthNum = document.getElementById("month-num");
  const yearNum = document.getElementById("year-num");

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDate = new Date().getDate();

  const currentMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  // =====Calculations=====

  circle.addEventListener("click", () => {
    // Day
    if (dayData.value > 31) {
      dayLabel.className = "red-text";
      dayData.className = "red-input";
      bottomLabel.className = "red-bottom-label";
    } else {
      dayLabel.className = "date-input-label";
      dayData.className = "date-input-input";
      bottomLabel.className = "bottom-label";
    }

    // Month
    if (monthData.value > 12) {
      monthLabel.className = "red-text";
      monthData.className = "red-input";
      secondBottomLabel.className = "red-bottom-label";
    } else {
      monthLabel.className = "date-input-label";
      monthData.className = "date-input-input";
      secondBottomLabel.className = "bottom-label";
    }

    // Year
    if (yearData.value > currentYear) {
      yearLabel.className = "red-text";
      yearData.className = "red-input";
      thirdBottomLabel.className = "red-bottom-label";
    } else {
      yearLabel.className = "date-input-label";
      yearData.className = "date-input-input";
      thirdBottomLabel.className = "bottom-label";
    }
  });

  let numDayData = 0;
  let numMonthData = 0;
  let numYearData = 0;

  dayData.addEventListener("input", (event) => {
    numDayData = event.target.value;
  });

  monthData.addEventListener("input", (event) => {
    numMonthData = event.target.value;
  });

  yearData.addEventListener("input", (event) => {
    numYearData = event.target.value;
  });

  circle.addEventListener("click", () => {
    let yearSubtraction = 0;
    let monthSubtraction = 0;
    let daySubtraction = 0;
    const numberOfMonths = 12;

    let days = 0;
    let months = 0;
    let years = 0;

    daySubtraction = currentDate - parseInt(numDayData);
    console.log(daySubtraction);
    if (daySubtraction < 0) {
      daySubtraction *= -1;
      monthSubtraction -= 1;
      days = currentMonthDays - daySubtraction;
    } else {
      days = currentDate - parseInt(numDayData);
      monthSubtraction = 0;
    }

    console.log("Days: ", days);
    console.log("monthSub: ", monthSubtraction);
    console.log("month sub: ", monthSubtraction);
    if (monthSubtraction >= 0) {
      months = currentMonth - parseInt(numMonthData);
      if (months < 0) {
        months =
          numberOfMonths + currentMonth - numMonthData + monthSubtraction;
        yearSubtraction -= 1;
      }
    }

    if (monthSubtraction < 0) {
      yearSubtraction -= 1;

      months = numberOfMonths + currentMonth - numMonthData + monthSubtraction;
    }

    console.log("Months: ", months);

    years = currentYear - numYearData + yearSubtraction;
    console.log("Years: ", years);

    dayNum.innerHTML = days;
    monthNum.innerHTML = months;
    yearNum.innerHTML = years;
    console.log(numDayData);

    if (
      numDayData < 0 ||
      numDayData > currentDate ||
      numMonthData < 0 ||
      numMonthData > 12 ||
      numYearData < 0 ||
      numYearData > currentYear
    ) {
      dayNum.innerHTML = "--";
      monthNum.innerHTML = "--";
      yearNum.innerHTML = "--";
    }
  });
});
