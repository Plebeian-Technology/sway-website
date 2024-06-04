(function () {
    "use strict"

    fetch("https://app.sway.vote/up")
        .then(() => console.log("Booting up app."))
        .catch((e) => null)
})()
