// List of URLs with their respective weights
const urlWeights = [

  
    // Bracelet Photo
    { url: "https://braceletphoto.com/", weight: 1 },
    { url: "https://t.co/np3kok1THf", weight: 4 },

   // Maison du Caftan
    { url: "https://maison-du-caftan.com/", weight: 1 },
    { url: "https://t.co/wwayQHVsGS", weight: 2 },
    { url: "https://t.co/27JTOTU81H", weight: 2 },

    
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
