import dotenv from 'dotenv';
import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';

// Charger les variables d'environnement du fichier .env
dotenv.config();

//Initialiser
const app = express();
const port = 3000;
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

//Middlewares
app.use(cors()); // autorise les requêtes cross-origin (de notre front)
app.use(express.json()); //permet au serveur de comprendre le json envoyé

// Définition de la route principale pour la génération
app.post('/generate-slogan', async (req, res) => {
    // 1. Récupérer le nom du produit depuis le cors de la requête
    const { productName } = req.body;

    if(!productName) {
        return res.status(400).json({error: 'Le nom du produit est manquant.'});
    }

    //interrogation du modèle IA générative
    try{
        // 2. Construire le prompt et appeler l'API OpenAI
        console.log(`Requête reçue pour le produit : ${productName}`);
        const completion = await openai.chat.completions.create({
            model:"gpt-3.5-turbo", //Modèle rapide et peu coûteux
            messages:[
                {
                    role: "system",
                    content: "Tu es un expert en marketing créatif spécialisé dans la création de slogans percutants."
                },
                {
                    role: "user",
                    content: `Propose 4 slogans courts et mémorables pour un produit qui s'appelle "${productName}".`

                }
            ],
            temperature:0.7,
            max_tokens:80
        });

        // 3. Extraire et envoyer la réponse au client
        const slogan = completion.choices[0].message.content.trim();
        res.json({slogan});
    } catch(error){
        console.error("Erreur lors de l'appel à l'API OpenAI", error);
        res.status(500).json({error: "Une erreur est survenue lors de la génération du slogan."});
    }
});

//Demarrage du serveur
app.listen(port,() => {
   console.log(`Serveur demarré sur http://localhost:${port}`);
});