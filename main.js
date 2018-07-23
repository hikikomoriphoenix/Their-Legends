function main() {
    // put code here if login form should be displayed

/*     var helloWorld = new HelloWorld();
    helloWorld.message(); */

    helloWorld();
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