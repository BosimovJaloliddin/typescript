"use strict";
// let str:string="Hellow"
// str.toUpperCase
let obj = {
    name: "nexia",
    speed: "200",
    age: 2017,
};
const getData = (key) => {
    return obj[key];
};
console.log(getData("name"));
