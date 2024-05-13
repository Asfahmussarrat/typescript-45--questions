"use strict";
//make a function about the car details
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
;
console.log(make_car("toyota", "corolla", ["color", "red"], ["year", 2024]));
console.log(make_car("mercedes", "benz", ["color", "black"], ["sunroof", "true"]));
