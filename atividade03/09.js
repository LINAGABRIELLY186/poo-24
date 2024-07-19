"use strict";
const array0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobrar = array0.map(num => num * 2);
const total = array0.reduce((acc, num) => acc + num, 0);
console.log("MAP => ", dobrar);
console.log("REDUCE=>", total);
