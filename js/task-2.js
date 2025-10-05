function calcAverageCalories(days) {
  const calories = Object.values(days);
  let sumCalories = 0;

  for (const calorie of calories) {
    sumCalories += calorie.calories;
  }

  return sumCalories / 7;
  // return sumCalories / calories.length - ділитеми на реальну кількість днів в об'єкті
  // (днів може бути не 7), але якщо - [], буде - NaN.
  // треба перевірка на if (calorie.length === 0)
}

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0
