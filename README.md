# Portfolio Genius Template

Un portfolio web responsive en HTML/CSS/JavaScript pur, pensé pour être dupliqué rapidement pour plusieurs développeurs.

## Ce que ça contient

- Une page d'accueil avec hero animé
- Bio
- Compétences
- Projets web avec liens
- Section YouTube pour projets non hostés
- Contacts toujours disponibles
- Menu mobile
- Mode sombre / clair
- Animations subtiles
- Données centralisées dans `data.js`

## Démarrage rapide

Ouvrez simplement `index.html` dans un navigateur.

Pour un aperçu plus fiable en local, utilisez un petit serveur :

```bash
npx serve .
```

ou avec Python :

```bash
python -m http.server 8080
```

Puis ouvrez :

```text
http://localhost:8080
```

## Personnaliser pour Oli, Schneider, etc.

Copiez le dossier et modifiez seulement :

```text
data.js
assets/avatar.svg
```

Dans `data.js`, changez :

- `person`
- `hero`
- `bio`
- `skills`
- `projects`
- `videos.playlistId`
- `contactPitch`

## Playlist YouTube

Dans `data.js`, remplacez :

```js
playlistId: "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
```

par l'identifiant de la playlist YouTube.

Exemple :

```text
https://www.youtube.com/playlist?list=MON_PLAYLIST_ID
```

L'identifiant est la partie après `list=`.

## Ajouter un projet

Dans `data.js`, ajoutez un objet dans `projects` :

```js
{
  title: "Nom du projet",
  date: "Mars 2026",
  description: "Courte description.",
  url: "https://exemple.com",
  tags: ["WordPress", "SEO", "API"]
}
```

## Déploiement simple

Vous pouvez héberger ce dossier sur :

- Netlify
- Vercel
- GitHub Pages
- Un hébergement cPanel classique

Comme c’est statique, c’est léger, rapide, et pas capricieux. Contrairement à certains plugins WordPress un vendredi à 16h58.
