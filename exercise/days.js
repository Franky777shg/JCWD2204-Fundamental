const days = 467;
const daysinYear = 365;
const daysInMonth = 30;

const year = Math.floor(days / daysinYear);
const residualYear = days % daysinYear;
const month = Math.floor(residualYear / daysInMonth);
const residualMonth = residualYear % daysInMonth;

console.log(`${year} year, ${month} month, ${residualMonth} days`);
