function calcAverageCalories(days) {
  allCalories = 0;
  for (const number of days) {
    allCalories += number.calories;
  }
  return allCalories / days.length;
}
