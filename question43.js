"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians_name) {
    magicians_name.forEach(name => {
        console.log(name);
    });
}
function make_great(great_names) {
    const great_magicians = [];
    great_names.forEach(name => {
        great_magicians.push("The Great ", name);
    });
    return great_magicians;
}
const old_magicians_names = ["Andy", "nandy", "Gulab jadugar", "saleem jadugar"];
const new_great_magicians_names = make_great([...old_magicians_names]);
show_magicians(old_magicians_names);
show_magicians(new_great_magicians_names);
