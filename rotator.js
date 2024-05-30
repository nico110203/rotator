// List of URLs to rotate
const urls = [
    "https://monpluganal.com/",
    "https://monpluganal.com/products/kit-plug-anal",
    "https://monpluganal.com/products/coffret-plug-anal"
];

// Function to get a random URL from the list
function getRandomUrl() {
    const randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
}

// Redirect to the random URL
window.location.href = getRandomUrl();
