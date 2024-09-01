const features = [
    "app downloads",
    "congregation sign in",
    "pivacy concerns",
    "fancy fonts",
    "crazy color picker",
    "comlicated layouts",
];

let currentIndex = 0;
const featureList = document.querySelector(".no-list");

function updateFeature() {
    featureList.classList.remove("show");
    featureList.classList.add("hide");

    setTimeout(() => {
        featureList.textContent = features[currentIndex];
        featureList.classList.remove("hide");
        featureList.classList.add("show");
        currentIndex = (currentIndex + 1) % features.length;
    }, 500); // Duration of the hide animation
}

// Change feature every 3 seconds (3000 milliseconds)
setInterval(updateFeature, 2000);

updateFeature();
