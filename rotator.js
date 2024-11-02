// List of URLs with their respective weights
const urlWeights = [

  
    // Bracelet Photo
    { url: "https://braceletphoto.com/", weight: 2 },
    { url: "https://t.co/9rdZ3clfCf", weight: 4 },
    { url: "https://t.co/uLXASoIRz8", weight: 4 },
    { url: "https://t.co/jbbjVZDZoS", weight: 4 },
    


    
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
