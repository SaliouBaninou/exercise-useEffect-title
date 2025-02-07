
# Exercice 01 useEffect: Mise à jour du titre de la page 📄✨

## Objectif 🎯

Cet exercice consiste à modifier dynamiquement le titre de la page en fonction de l'état `count`. Le titre doit afficher la valeur du compteur chaque fois que celui-ci est mis à jour.

## Fonctionnalités ⚙️

- Un état `count` est créé et géré avec `useState` 🧑‍💻.
- Un bouton permet d'incrémenter la valeur de `count` 🔘.
- `useEffect` est utilisé pour mettre à jour le titre de la page avec la valeur actuelle de `count`, sous la forme : `Compteur : X`, où `X` est la valeur de `count` 🔄.

## Prérequis 📦

- Node.js installé sur votre machine 💻.
- Un éditeur de texte ou IDE de votre choix (par exemple, VSCode) 🖥️.

## Installation ⚡

1. Clonez ce dépôt :
   ```bash
   git clone <URL du dépôt>
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd <nom du dossier>
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancer l'application 🚀

Pour démarrer l'application en mode développement, utilisez la commande suivante :

```bash
npm start
```

Cela ouvrira l'application dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000) 🌐.

## Fonctionnement 🔍

- **État `count` :** Initialisé à `0`, il est incrémenté à chaque clic sur le bouton 👍.
- **Effet `useEffect` :** Après chaque mise à jour de l'état `count`, le titre de la page est modifié pour afficher la nouvelle valeur du compteur 📈.

## Technologies utilisées 💡

- React (Hooks : `useState`, `useEffect`) ⚛️

## Auteur 🖋️

Ce projet est développé et maintenu par **Saliou Baninou**. Il est destiné à un usage personnel et ne doit pas être modifié sans autorisation préalable 🛑.

## Licence 📜

Ce projet est sous licence personnelle et ne doit pas être redistribué ou modifié sans l'accord de l'auteur 🚫.
