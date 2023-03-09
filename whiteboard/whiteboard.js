/* My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:
"dolphin" -> "The Dolphin"
However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:
"alaska" -> "Alaskalaska"
Complete the function that takes a noun as a string, and returns her preferred band name written as a string. */

function getBandName(noun) {
    if (noun[0] === noun[noun.length -1]) {
        return `${noun.slice(0,1).toUpperCase()}${noun.slice(1)}${noun.slice(1)}`; 
    } else {
        return `The ${noun.slice(0,1).toUpperCase()}${noun.slice(1)}`;
    }
};

console.log(getBandName('dolphin'));
console.log(getBandName('alaska'));

// With ternary operator:
function bandNameGenerator(str) {
    return str[0].toLowerCase() != str.at(-1).toLowerCase() ?
        `The ${str[0].toUpperCase() + str.slice(1)}`
        : str[0].toUpperCase() + str.slice(1) + str.slice(1)
};


// With if else chain:
function bandNameGenerator(str) {
    if (str[0].toLowerCase() != str.at(-1).toLowerCase()) {
        return `The ${str[0].toUpperCase() + str.slice(1)}`
    } else {
        return str[0].toUpperCase() + str.slice(1) + str.slice(1)
    }
};