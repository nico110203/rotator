// List of URLs with their respective weights
const urlWeights = [

    // Mon Collier Unique
    
    { url: "https://moncollierunique.com/", weight: 30 },
    { url: "https://t.co/vkilQKSyqL", weight: 10 },
    { url: "https://t.co/XdhkXUtafT", weight: 10 },
    
    { url: "https://t.co/Gqg3yYsJID", weight: 10 },
    { url: "https://t.co/TriZVXGvmb", weight: 10 },
    { url: "https://t.co/hybXWGYfQY", weight: 10 },
    { url: "https://t.co/USqEcngXRT", weight: 10 },
    { url: "https://t.co/ANcd3EPiOH", weight: 10 },
  
    // Bracelet Photo
    
    { url: "https://braceletphoto.com/", weight: 25 },
    { url: "https://t.co/rLoYiiE4C0", weight: 25 },
    { url: "https://t.co/kLWKy4xnET", weight: 25 },
    { url: "https://t.co/OENbRPOswC", weight: 25 },
    
    // Maison du Caftan
    
    { url: "https://maison-du-caftan.com/", weight: 10 },
    { url: "https://t.co/oCqq9bT6Mv", weight: 10 },
    { url: "https://t.co/GaUDDGvVei", weight: 10 },
    
    { url: "https://t.co/EHb54L9Rrp", weight: 10 },
    { url: "https://t.co/Npme9DJsBw", weight: 10 },
    { url: "https://t.co/xqyWcCzwBG", weight: 10 },
    { url: "https://t.co/MyLLqPwi9o", weight: 10 },

    { url: "https://t.co/iKfYFaL6BYo", weight: 5 },
    { url: "https://t.co/Cuwug6jTT3", weight: 5 },
    { url: "https://t.co/IbM40V5Cdh", weight: 5 },
    { url: "https://t.co/gBx18Ph8jg", weight: 5 },
    { url: "https://t.co/lKYbaHzm2K", weight: 5 },
    { url: "https://t.co/GvcJqDAJLU", weight: 5 },
    

    
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
