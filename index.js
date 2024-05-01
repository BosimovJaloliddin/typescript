"use strict";
// let str:string="Hellow"
// str.toUpperCase
function getData(data) {
    let config = {
        method: "POST",
        headers: {
            Authorization: "Bearer",
            "Content-Type": "Aplication/json",
        },
        body: data,
    };
    return config;
}
getData({ id: 1, name: "Jalol" });
