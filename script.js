document.addEventListener("DOMContentLoaded", function () {

    const cursorTaco = document.getElementById("cursor-taco");



    // Move taco image with the cursor

    document.addEventListener("mousemove", function (e) {

        cursorTaco.style.left = e.pageX + "px";

        cursorTaco.style.top = e.pageY + "px";

    });



    // Play scary music when user interacts

    const audio = document.getElementById("scary-music");

    document.body.addEventListener("click", () => {

        audio.play();

    });

});