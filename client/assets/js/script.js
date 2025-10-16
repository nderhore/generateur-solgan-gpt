document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const productNameInput = document.getElementById('productName');
    const sloganOutput = document.getElementById('sloganOutput');
    const loader = document.getElementById('loader');

    // URL de notre serveur back-end
    const API_URL = 'http://localhost:3000/generate-slogan';

    const generateSlogan = async () => {
        const productName = productNameInput.value;

        if (!productName) {
            alert('Veuillez entrer un nom de produit.');
            return;
        }

        // Afficher le loader et cacher l'ancien texte
        loader.classList.remove('hidden');
        sloganOutput.textContent = '';
        generateBtn.disabled = true;

        try {
            // Envoyer la requête au serveur back-end
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productName: productName }), // On envoie le nom du produit en JSON
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const data = await response.json();
            // Afficher le slogan reçu du serveur
            sloganOutput.textContent = data.slogan;

        } catch (error) {
            console.error('Erreur lors de la récupération du slogan:', error);
            sloganOutput.textContent = "Désolé, une erreur est survenue. Veuillez réessayer.";
        } finally {
            // Cacher le loader et réactiver le bouton
            loader.classList.add('hidden');
            generateBtn.disabled = false;
        }
    };

    generateBtn.addEventListener('click', generateSlogan);
});
