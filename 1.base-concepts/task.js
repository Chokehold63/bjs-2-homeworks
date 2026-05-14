"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
    if (d < 0) {
    }
    else if (d === 0) {
      let x = -b / (2 * a);
      arr.push(x);
    }
    else {
      let x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d)) / (2 * a);
      arr.push(x1);
      arr.push(x2);
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent / 100) /12;
  let s = amount - contribution;
    if (percent === 0) {
      return s;
    }
  let payment = s * (p + (p / (((1 + p) ** countMonths) -1)));
  let totalPay = countMonths * payment;
  let result = Math.round(totalPay *100) /100;

  return result;
}