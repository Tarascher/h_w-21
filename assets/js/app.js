let winterDays = [
  -48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46,
  -48, -23, -25, -22, 12, 38, 19, -20, 26, 4, 19, 23, 26, -41, 4, -13, -9, -11,
  -7, 38, 27, 41, 14, -35, -56, -28, -38, -44, -44, 29, -32, 41, 7, -25, 3, 27,
  -45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39,
  -28, -33, -27, -48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36,
  24,
];
//подсчет замерзаний за период
let down = 0;
for (let i = 0; i < winterDays.length - 1; i++) {
  if (winterDays[i] >= 0 && winterDays[i + 1] < 0) {
    down++;
  }
}
console.log(` замерзаний в  этот период было - ${down} раз`);

// подсчет максимального периода днейкогда был минус

let maximumNumberDaysWithNegativeTemperature = 0; //максимальное количество дней с отрицательной температурой
let maximumNumberDaysWithPositiveTemperature = 0; //максимальное количество дней с плюсовой температурой
let consecutiveNegativeDays = 0; //дни с отрицательной температурой идущие подряд
let successivePositivedays = 0; //дни с положительной температурой идущие подряд
for (let i = 0; i < winterDays.length - 1; i++) {
  if (winterDays[i] < 0 && winterDays[i + 1] < 0) {
    consecutiveNegativeDays++;
  } else if (winterDays[i] >= 0 && winterDays[i + 1] >= 0) {
    consecutiveNegativeDays = 0;
  }

  if (maximumNumberDaysWithNegativeTemperature < consecutiveNegativeDays) {
    maximumNumberDaysWithNegativeTemperature = consecutiveNegativeDays;
  }

  if (winterDays[i] >= 0 && winterDays[i + 1] >= 0) {
    successivePositivedays++;
  } else if (winterDays[i] < 0 && winterDays[i + 1] < 0) {
    successivePositivedays = 0;
  }

  if (maximumNumberDaysWithPositiveTemperature < successivePositivedays) {
    maximumNumberDaysWithPositiveTemperature = successivePositivedays;
  }
}

if (
  maximumNumberDaysWithNegativeTemperature <
  maximumNumberDaysWithPositiveTemperature
) {
  alert(
    `больше морозных дней идущих подряд , в количестве${maximumNumberDaysWithNegativeTemperature} дней`
  );
} else if (
  maximumNumberDaysWithNegativeTemperature >
  maximumNumberDaysWithPositiveTemperature
) {
  alert(
    `больше теплых дней идущих подряд , в количестве${maximumNumberDaysWithPositiveTemperature} дней`
  );
} else {
  alert(`поровну`);
}
console.log(
  `максимальное период дней с отрицательной температурой   -  ${maximumNumberDaysWithNegativeTemperature} дней;`
);
console.log(
  `максимальное период дней с плюсовой температурой   -  ${maximumNumberDaysWithPositiveTemperature} дней;`
);

/*let maxPeriod = [0];
console.log(mas);
for (let n = 0; n < mas.length; n++) {
  if (mas[n] < mas[n + 1]) {
    let result = mas[n + 1];
    maxPeriod.slice(result);
    console.log(result.length);
  }
}*/

/*for (let item of mas) {
  if (item > maxPeriod.length) {
    maxPeriod.length = item;
  }
}

console.log(maxPeriod);

let power = function (base, explouer) {
  var result = 1;
  for (let count = 0; count < explouer; count++) result *= base;
  return result;
};
console.log(power(2, 10));*/
