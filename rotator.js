// List of URLs with their respective weights
const urlWeights = [
    { url: "https://t.co/iCGhRXO6fU", weight: 50 },
    { url: "https://moncollierunique.com/collections/collier-lettre", weight: 7 },
    { url: "https://moncollierunique.com/collections/collier-initiale", weight: 7 },
    { url: "https://moncollierunique.com/collections/collier-arbre-de-vie-prenom", weight: 7 },
    { url: "https://moncollierunique.com/collections/collier-personnalise-2-prenoms", weight: 7 },
    { url: "https://moncollierunique.com/collections/collier-infini-prenom", weight: 5 },
    { url: "https://moncollierunique.com/collections/collier-coeur-personnalise", weight: 5 },
    { url: "https://moncollierunique.com/products/collier-prenom-arabe", weight: 2 },
    { url: "https://moncollierunique.com/products/collier-5-prenoms", weight: 2 },
    { url: "https://moncollierunique.com/products/collier-3-prenoms", weight: 2 },
    { url: "https://moncollierunique.com/products/collier-plusieurs-prenoms", weight: 2 },
    { url: "https://moncollierunique.com/products/collier-4-prenoms", weight: 2 },
    { url: "https://moncollierunique.com/products/collier-prenom-lettre-separee", weight: 2 },
    { url: "https://t.co/5IfJncj3uQ", weight: 80 },
    { url: "https://braceletphoto.com/", weight: 20 },
    { url: "https://t.co/C8gqQGHozW", weight: 50 },
    { url: "https://maison-du-caftan.com/collections/caftan-marocain", weight: 7 },
    { url: "https://maison-du-caftan.com/collections/robe-caftan", weight: 7 },
    { url: "https://maison-du-caftan.com/collections/caftan-mariage", weight: 5 },
    { url: "https://maison-du-caftan.com/collections/caftan-moderne", weight: 3 },
    { url: "https://maison-du-caftan.com/collections/caftan-algerien", weight: 3 },
    { url: "https://maison-du-caftan.com/collections/caftan-pas-cher", weight: 3 },
    { url: "https://maison-du-caftan.com/collections/caftan-blanc", weight: 3 },
    { url: "https://maison-du-caftan.com/collections/caftan-bleu", weight: 3 },
    { url: "https://maison-du-caftan.com/collections/caftan-fillette", weight: 3 },
    { url: "https://maison-du-caftan.com/collections/caftan-homme", weight: 3 },
    { url: "https://maison-du-caftan.com/collections/caftan-noir", weight: 2 },
    { url: "https://maison-du-caftan.com/collections/caftan-rose", weight: 2 },
    { url: "https://maison-du-caftan.com/collections/caftan-rouge", weight: 2 },
    { url: "https://maison-du-caftan.com/collections/caftan-simple", weight: 2 },
    { url: "https://maison-du-caftan.com/collections/caftan-vert", weight: 2 },
    { url: "https://t.co/C8gqQGHozW", weight: 50 },
    { url: "https://robes-de-plage.com/", weight: 10 },
    { url: "https://robes-de-plage.com/collections/robe-de-plage-blanche", weight: 10 },
    { url: "https://robes-de-plage.com/collections/tunique-de-plage", weight: 10 },
    { url: "https://robes-de-plage.com/collections/kimono-de-plage", weight: 10 },
    { url: "https://robes-de-plage.com/collections/caftan-de-plage", weight: 10 },
    { url: "https://t.co/ogNrrfZ1CN", weight: 50 },
    { url: "https://monpluganal.com/", weight: 4 },
    { url: "https://monpluganal.com/collections/plug-anal-debutant", weight: 4 },
    { url: "https://monpluganal.com/collections/plug-anal-diamant", weight: 2 },
    { url: "https://monpluganal.com/collections/plug-anal-gonflable", weight: 4 },
    { url: "https://monpluganal.com/collections/plug-anal-homme", weight: 4 },
    { url: "https://monpluganal.com/collections/plug-anal-metal", weight: 4 },
    { url: "https://monpluganal.com/collections/plug-anal-silicone", weight: 2 },
    { url: "https://monpluganal.com/collections/plug-anal-vibrant", weight: 4 },
    { url: "https://monpluganal.com/collections/plug-anal-xxl", weight: 4 },
    { url: "https://monpluganal.com/collections/plug-lapin", weight: 2 },
    { url: "https://monpluganal.com/collections/plug-prostate", weight: 2 },
    { url: "https://monpluganal.com/collections/plug-queue", weight: 4 },
    { url: "https://monpluganal.com/collections/plug-queue-de-chat", weight: 4 },
    { url: "https://monpluganal.com/collections/plug-queue-de-chien", weight: 2 },
    { url: "https://monpluganal.com/collections/plug-tunnel", weight: 4 }
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
