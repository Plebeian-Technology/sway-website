(function () {
    "use strict"

    console.error = () => null;
    console.warn = () => null;
    console.log = () => null;
    console.table = () => null;
    console.info = () => null;
    console.dir = () => null;

    fetch("https://sway.vote/up")
        .then(() => console.log("Booting up app."))
        .catch((e) => null)
})()
