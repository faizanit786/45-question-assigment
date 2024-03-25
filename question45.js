"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function aboutCarInfo(manufacturer, model_name, ...options) {
    const carInfo = {
        manufacturer: manufacturer,
        model_name: model_name
    };
    options.forEach(option => {
        const [key, value] = option;
        carInfo[key] = value;
    });
    return carInfo;
}
console.log(aboutCarInfo("Honda", "Civic", ["Color", "Black"], ["Year", "2022"]));
