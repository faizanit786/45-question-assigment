"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// QUESTION 17
let guests = ["Maaz", "Muzamil", "Samy", "Hadi", "Feroz", "Mubashir"];
console.log("Hello guys. Got a bigger table so lets invite more firends to the dinner");
console.log("The updated list: " + guests[0]);
console.log("The updated list: " + guests[1]);
console.log("The updated list: " + guests[2]);
console.log("The updated list: " + guests[3]);
console.log("The updated list: " + guests[4]);
console.log("The updated list: " + guests[5]);
// Lets remove the guests
let removed1_guest = guests.pop();
console.log("Sorry " +
    removed1_guest +
    " due to the unavailibility of the bigger table you are no longer invited.");
let removed2_guest = guests.pop();
console.log("Sorry " +
    removed2_guest +
    " due to the unavailibility of the bigger table you are no longer invited.");
let removed3_guest = guests.pop();
console.log("Sorry " +
    removed3_guest +
    " due to the unavailibility of the bigger table you are no longer invited.");
let removed4_guest = guests.pop();
console.log("Sorry " +
    removed4_guest +
    " due to the unavailibility of the bigger table you are no longer invited.");
console.log("Hello " + guests[0] + " you are invited for the dinner.");
console.log("Hello " + guests[1] + " you are invited for the dinner.");
console.log(guests[2]);
console.log(guests[3]);
console.log(guests[4]);
console.log(guests[5]);
guests.pop();
guests.pop();
console.log(guests[0]);
