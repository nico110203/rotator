// List of URLs with their respective weights
const urlWeights = [

    // Mon Collier Unique
    
    { url: "https://moncollierunique.com/", weight: 30 },
    { url: "https://t.co/RIRmw6mVPE", weight: 10 },
    { url: "https://t.co/VX36IHxOMo", weight: 10 },
    
    { url: "https://t.co/rzjw1yLgPC", weight: 10 },
    { url: "https://t.co/aQS8MGI9cL", weight: 10 },
    { url: "https://t.co/aIcFbOLjnp", weight: 10 },
    { url: "https://t.co/8UfhERNdfC", weight: 10 },
    { url: "https://t.co/kE92wwfEgd", weight: 10 },
  
    // Bracelet Photo


 { url: "https://l.instagram.com/?u=https%3A%2F%2Fbraceletphoto.com%2F&e=AT30xrCJgDii50Qd_tj3Pf7QX12OPU3jYpI6cIZfS57IwZ_m_35vWSBiUzLAlAwMZpfzAPd9MQsZ7WsN_0t-BjZA_6reJ-o530o5fw", weight: 1000 },
   
    
    // Maison du Caftan
    
    { url: "https://maison-du-caftan.com/", weight: 20 },
    { url: "https://t.co/vrd95ZGZqm", weight: 10 },
    { url: "https://t.co/QFlc6MnZ3F", weight: 10 },
    
    { url: "https://t.co/XyxU36FazH", weight: 20 },
    { url: "https://t.co/bEFqNvDJVD", weight: 20 },
    { url: "https://t.co/Bt5ixq4iZA", weight: 10 },
    { url: "https://t.co/MTKO1L5dvj", weight: 10 },

    
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
