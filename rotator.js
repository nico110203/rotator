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
    { url: "https://t.co/ogNrrfZ1CN", weight: 30 },
    { url: "https://t.co/GV5jjpg7az", weight: 30 }
    { url: "https://l.instagram.com/?u=https%3A%2F%2Fbraceletphoto.com%2F&e=AT3Cq_ZgFf5-bTvlp_MUTTC3DCz4KB5nyY5aOfxZ198PCmXFX4JKuyZ-OFIi1xlFbkb7pzXRhKbZl5UCxkXA4Id5G4xORH7fjC-zf8BTm0vE6c56ZgGzEQ", weight: 100 }
    
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
