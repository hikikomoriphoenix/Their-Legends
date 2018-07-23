function main() {
    // include scripts here
    
    // put code here if login form should be displayed
}

/**
 * Loads a javascript file
 * @param {String} script javascript file to load 
 */
function load(script) {
    document.write('<'+'script src="'+script+'" type="text/javascript"><' + '/script>');
}

function goToMain() {
    var menus = ["Start New Game", "Load Saved Game", "Create Random World"];
    for (var i in menus) {
        var menu = document.createElement("li");
        menu.innerHTML = menus[i];
        document.getElementById("menuList").appendChild(menu);
    }
}

main();