// Try this demo by opening the terminal in this folder and running
// node --watch extra-functions.js
console.log('\nA Colorful Demo of Functions');
console.log('============================\n');

// The hex values for named colors are listed here:
// https://developer.mozilla.org/en-US/docs/Web/CSS/named-color

// Some functions to translate text into a color suitable for the VS Code terminal.
const red = function(text) {
    return `\x1b[31m${text}\x1b[0m`;
}
const blue = function(text) {
    return `\x1b[34m${text}\x1b[0m`;
}
const green = function(text) {
    return `\x1b[32m${text}\x1b[0m`;
}

/**
 * Generate a description of a color along with its hex value
 * as a colorized breakdown of the hex value.
 * @param {string} name A name for a color
 * @param {string} hexValue A 6-digit hexadecimal value
 */
const colorName = function(name, hexValue) {
    let redPart = hexValue.substring(0, 2);
    let greenPart = hexValue.substring(2, 4);
    let bluePart = hexValue.substring(4, 6);
    let result = `The color ${name} is #${red(redPart)}${green(greenPart)}${blue(bluePart)}.`;
    return result;
}

console.log(colorName('rebeccapurple', '663399'));
// A listing of some colors:
// blueviolet	    #8a2be2
// darkorange	    #ff8c00
// magenta          #ff00ff
// orangered	    #ff4500
// rebeccapurple	#663399
// seagreen	        #2e8b57
// sienna	        #a0522d
// springgreen	    #00ff7f

console.log('\n- the end -\n');