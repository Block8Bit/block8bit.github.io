const startDate = new Date("2023-09-09T22:13:00");
const birthDateLuiz = new Date("1997-12-27T02:40:00");
const birthDateLucas = new Date("2004-05-04T00:36:00");
const percentage = 0.8;

const target = new Date(
  (startDate - percentage * birthDateLucas) / (1 - percentage)
);
console.log(target);
