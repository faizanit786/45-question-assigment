"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", text = "I love typescript") {
    console.log("The size is ", size, "The text should be: ", text);
}
make_shirt("medium ");
make_shirt("small", "This message is for small shirts");
