function getDayName(dateString) {
  const date = new Date(dateString);  // نحول النص إلى كائن تاريخ
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()]; 
}
console.log(getDayName("2025-07-08"));
