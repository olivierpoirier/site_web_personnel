# Portfolio Olivier Poirier

Site professionnel statique construit avec Vite et des composants JavaScript légers.

## Démarrage

Installez les dépendances :

```bash
npm.cmd install
```

Lancez le site en local :

```bash
npm.cmd run dev
```

Vite affichera une adresse locale du type :

```text
http://127.0.0.1:5173/
```

## Structure

```text
src/
  components/   Sections, layout et cartes du portfolio
  data/         Contenu modifiable du site
  features/     Interactions, animations et thème
  styles/       CSS global
  utils/        Helpers HTML, liens et URLs
design/         Sources des visuels de Michel et prompts de création
public/media/   Médias publics des projets
```

Les sources PNG du logo de Michel et le SVG de l'aperçu de partage sont conservés dans
`design/brand/`. Le site utilise les variantes optimisées de `public/media/brand/`,
et les balises Open Graph et Twitter référencent `michel-social-preview.png`.

## Modifier le contenu

Le texte, les projets, les compétences, les liens et les coordonnées sont dans :

```text
src/data/portfolio.js
```

Les captures, GIFs et vidéos de projets vont dans :

```text
public/media/projects/
```

Chaque projet peut ensuite référencer un média principal, une courte galerie, des points forts et des liens :

```js
{
  title: "Nom du projet",
  featured: true,
  media: {
    type: "image",
    src: "/media/projects/demo.gif",
    alt: "Démo du projet"
  },
  gallery: [
    { type: "image", src: "/media/projects/screenshot.png", alt: "Capture du projet" }
  ],
  highlights: ["Point fort 1", "Point fort 2"],
  links: {
    live: "https://exemple.com",
    github: "https://github.com/..."
  }
}
```

## Build de production

```bash
npm.cmd run build
```

Le site optimisé sera généré dans :

```text
dist/
```

Vous pouvez ensuite l'héberger sur Vercel, Netlify, GitHub Pages ou tout hébergement statique.
