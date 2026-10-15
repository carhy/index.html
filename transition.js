const sunButton = document.querySelector(".sun-button");
const sunImage = document.querySelector("#sun-img");
const blackScreen = document.querySelector("#black-screen");

if (!sunButton || !sunImage || !blackScreen) {
} else {
    window.addEventListener("idk", () => {
        sunImage.src = "sun chilling.gif";
        sunButton.style.pointerEvents = "";
        blackScreen.classList.remove("visible");
    });

    sunButton.addEventListener("click", (event) => {
        event.preventDefault();
        sunButton.style.pointerEvents = "none";

        sunImage.onload = () => {
            sunImage.onload = null;
            sunImage.onerror = null;

            setTimeout(() => {
                blackScreen.classList.add("visible");

                setTimeout(() => {
                    window.location.href = sunButton.href;
                }, 500);
            }, 500);
        };

        sunImage.onerror = () => {
            sunImage.onload = null;
            sunImage.onerror = null;
            sunButton.style.pointerEvents = "";
            console.error('Could not load "sun nom nom.gif". Check the filename and folder.');
        };

        sunImage.src = new URL("sun nom nom.gif", document.baseURI).href;
    });

} 
