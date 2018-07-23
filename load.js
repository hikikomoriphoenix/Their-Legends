/**
 * Loads a javascript file
 * @param {String} script javascript file to load 
 */
function load(script) {
    document.write("<script src="+script+" type='text/javascript'></script>");
}

// Load all scripts containing functions to be used in main
load("message.js");
load("hello-world.js");