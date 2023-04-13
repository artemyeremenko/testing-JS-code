function ageClassification(num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : "долгожители"
              : "старческий возраст"
            : "пожилой возраст"
          : "средний возраст"
        : "молодой возраст"
      : "детский возраст"
    : null;
}

console.log("    -1 :", ageClassification(-1)); // -1 : null
console.log("     1 :", ageClassification(1)); // 1 : детский возраст
console.log("    24 :", ageClassification(24)); // 24 : детский возраст
console.log(" 24.01 :", ageClassification(24.01)); // 24.01 : молодой возраст
console.log("    44 :", ageClassification(44)); // 44 : молодой возраст
console.log(" 44.01 :", ageClassification(44.01)); // 44.01 : средний возраст
console.log("    65 :", ageClassification(65)); // 65 : средний возраст
console.log("  65.1 :", ageClassification(65.1)); // 65.1 : пожилой возраст
console.log("    75 :", ageClassification(75)); // 75 : пожилой возраст
console.log(" 75.01 :", ageClassification(75.01)); // 75.01 : старческий возраст
console.log("    90 :", ageClassification(90)); // 90 : старческий возраст
console.log(" 90.01 :", ageClassification(90.01)); // 90.01 : долгожители
console.log("   122 :", ageClassification(122)); // 122 : долгожители
console.log("122.01 :", ageClassification(122.01)); // 122.01 : null
console.log("   150 :", ageClassification(150)); // 150 : null

function weekFn(cond) {
  let str = "";

  switch (cond) {
    case 1:
      str = "Понедельник";
      break;
    case 2:
      str = "Вторник";
      break;
    case 3:
      str = "Среда";
      break;
    case 4:
      str = "Четверг";
      break;
    case 5:
      str = "Пятница";
      break;
    case 6:
      str = "Суббота";
      break;
    case 7:
      str = "Воскресенье";
      break;
    default:
      str = null;
  }

  return str;
}

console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn("2")); // null

function defUpperStr(str) {
  return (str || "Default text").toUpperCase();
}

console.log(defUpperStr("My text")); // MY TEXT
console.log(defUpperStr()); // DEFAULT TEXT
