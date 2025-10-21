
# Générateur de Slogans IA

Ce projet est une application web simple "full-stack" qui utilise l'API OpenAI (GPT-3.5) pour générer des slogans marketing à partir d'un nom de produit fourni par l'utilisateur.
C'est un exemple de base pour démontrer comment intégrer une IA générative dans une application web de manière sécurisée, en séparant le front-end (client) et le back-end (serveur).

## Stack Technique

  * **Front-end (Client)**: HTML5, CSS3, JavaScript (avec l'API `fetch`)
  * **Back-end (Serveur)**: Node.js, Express
  * **API IA**: OpenAI (modèle `gpt-3.5-turbo`)
  * **Modules Node clés**: `express`, `openai`, `dotenv`, `cors`

## Structure du Projet

```
generateur-slogans/
├── client/              # Contient tous les fichiers du front-end
│   ├── index.html       # La structure de la page
│   ├── style.css        # Les styles
│   └── script.js        # Logique front (appel fetch)
├── server/              # Contient tous les fichiers du back-end
│   ├── server.js        # Le serveur Express
│   ├── package.json     # Dépendances et scripts
│   └── .env             # Fichier pour les clés secrètes (IMPORTANT)
└── README.md            # Ce fichier
```

## ⚙️ Installation et Lancement

Suivez ces étapes pour lancer le projet en local.

### 1\. Configuration du Back-end (Serveur)

Le serveur gère la communication avec l'API OpenAI pour protéger votre clé API.

1.  **Naviguez vers le dossier serveur :**

    ```bash
    cd generateur-slogans/server
    ```

2.  **Installez les dépendances Node.js :**

    ```bash
    npm install
    ```

3.  **Créez votre clé API :**

      * Allez sur [platform.openai.com](https://platform.openai.com/) et créez un compte.
      * Générez une nouvelle clé API secrète.
      * Assurez-vous d'avoir configuré la facturation (Billing) sur votre compte.

4.  **Configurez les variables d'environnement :**

      * Créez un fichier `.env` à la racine du dossier `server/`.
      * Ajoutez-y votre clé API secrète :

    <!-- end list -->

    ```
    OPENAI_API_KEY="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    ```

### 2\. Lancement du Projet

Vous devez lancer **deux** choses : le serveur back-end et le client front-end.

1.  **Lancez le serveur :**

      * Ouvrez un terminal dans le dossier `server/`.
      * Exécutez la commande :

    <!-- end list -->

    ```bash
    npm start
    ```

      * Votre serveur doit maintenant tourner sur `http://localhost:3000`.

2.  **Lancez le client :**

      * Ouvrez le fichier `client/index.html` directement dans votre navigateur web (Google Chrome, Firefox, etc.).
      * Vous pouvez simplement double-cliquer sur le fichier.

Et voilà \! Vous pouvez maintenant entrer un nom de produit et générer des slogans.

## ⚠️ Point de Sécurité Important

**Ne mettez jamais** votre `OPENAI_API_KEY` dans le code du dossier `client/` (le JavaScript `script.js`). Si vous le faites, n'importe qui visitant votre site pourrait voir votre clé et l'utiliser, ce qui pourrait vous coûter très cher.

La clé doit **TOUJOURS** rester secrète dans le serveur (dans le fichier `.env` qui n'est jamais partagé).
