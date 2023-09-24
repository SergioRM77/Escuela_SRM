let mivideo = document.querySelector('#video');

addEventListener("visbilitychange", () => {
    if (document.visibilityState === "visible") {
        mivideo.play();
    } else {
        mivideo.pause();
    }
})