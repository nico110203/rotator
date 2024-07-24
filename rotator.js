// List of URLs with their respective weights
const urlWeights = [

    // Mon Collier Unique
    
    { url: "https://t.co/3wB5heQPCU", weight: 10 },
    { url: "https://t.co/zxpfiwMHVx", weight: 10 },
    { url: "https://t.co/BgxDvnENMv", weight: 10 },
    { url: "https://t.co/r9zEcZIKZN", weight: 10 },
    { url: "https://t.co/ckU41VTIke", weight: 10 },
    
    
    { url: "https://t.co/oPZavxymTK", weight: 10 },
    { url: "https://t.co/ssjhqRyzVd", weight: 10 },
    { url: "https://t.co/43IDcCdwTG", weight: 10 },
    { url: "https://t.co/IhYMeGiiSn", weight: 10 },
    { url: "https://t.co/FJfiZDBMtP", weight: 10 },
  
    // Bracelet Photo

    { url: "https://t.co/QPMtVYynqy", weight: 25 },
    { url: "https://t.co/c4FhHtNbQE", weight: 25 },
    { url: "https://t.co/GiRCF6VXu1", weight: 25 },
    { url: "https://t.co/XGaylMhJD3", weight: 25 },
   
    
    // Maison du Caftan
    
    { url: "https://t.co/tSka5MFWtO", weight: 20 },
    { url: "https://t.co/aDYk3jQ8Ul", weight: 20 },
    
    { url: "https://t.co/5Q7RdS8dO3", weight: 20 },
    { url: "https://t.co/tpsX8VvTzX", weight: 20 },
    { url: "https://t.co/JkkAGEcB2u", weight: 10 },
    { url: "https://t.co/iT7hDOcl7e", weight: 10 },

    
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
