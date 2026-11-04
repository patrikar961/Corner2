# 🛍️ Corner69 — Shop (dépôt complet)

Site vitrine de boutique : catalogue filtrable, fiche produit avec carrousel
photos/vidéos, variantes, quantité, panier local, demande de commande et avis.

## Contenu du dépôt

```
index.html        Structure de la page
style.css         Design (même palette, mêmes formes)
theme.js          Toutes les couleurs (16 palettes + 9 nouvelles)
products.js       Vos produits, catégories, vidéo, avis
app.js            Logique : catalogue, carrousel, panier, commande, avis
assets/
  logo.svg        Logo de la boutique
  img/            Photos des produits
  video.mp4       Vidéo de la page d'accueil
  video/          Vidéos des produits (ex. moussev.mp4)
```

## Mise en ligne (GitHub Pages)

1. Copiez les 5 fichiers à la racine du dépôt, en remplacement des anciens.
2. Gardez votre dossier `assets/` (logo, images, vidéos).
3. `git add . && git commit -m "Refonte du site" && git push`
4. Attendez une minute, puis rechargez la page (Ctrl+F5 sur ordinateur) pour
   vider le cache.

## Réglages à faire dans `products.js`

| Réglage | Où | Exemple |
|---|---|---|
| Nom affiché dans l'en-tête | `SHOP.name` | `"Boutique Corner69"` |
| Lien Telegram | `SHOP.telegram` | `"https://t.me/+H15PSwqVM1o2ZWZk"` |
| Numéro WhatsApp | `SHOP.whatsapp` | `"33612345678"` (indicatif pays, sans `+`) |
| Envoi des commandes | `MAKE_WEBHOOK_URL` | `"https://hook.eu2.make.com/xxxx"` |
| Vidéo d'accueil | `VIDEO` | `type: "file"`, `src: "assets/video.mp4"` |

- Laisser `SHOP.whatsapp` vide affiche « Ouvrir WhatsApp » en attendant le
  numéro : le bouton prévient qu'il faut le configurer, il ne casse pas.
- Laisser `MAKE_WEBHOOK_URL` vide désactive l'envoi ; la demande de commande
  affiche alors un message d'explication au lieu d'échouer.

## Modifier les couleurs

Tout est dans `theme.js`. Changez une seule ligne :

```js
const ACTIVE_THEME = "neonSunset"; // <- votre palette actuelle
```

Palettes déjà prêtes : `neonSunset`, `tropical`, `cyberpunk`, `candyPop`,
`oceanDeep`, `royalGold`, `aurora`, `lavaFire`, `electricViolet`, `mintFresh`,
`peachy`, `rainbow`, `emerald`, `sakura`, `midnightBlue`, `miami`.

Nouvelles palettes néon : `neonNuit`, `bubblegum`, `sunsetMiami`, `toxicGreen`,
`royalPurple`, `neonCyan`, `hotCoral`, `sunsetGold`, `tropicalNeon`.

Pour une palette maison, remplissez `custom` puis mettez
`ACTIVE_THEME = "custom"`.

Chaque palette contient 8 réglages :

```js
primary:"#ff2e88"      // couleur principale (boutons, halos)
secondary:"#ffb400"    // couleur secondaire (prix, survols)
accent:"#00e5ff"       // couleur des détails et des liens
bg:"#12061f"           // fond de page
surface:"#1f0b33"      // fond des cartes et fenêtres
text:"#fff4fb"         // texte principal
muted:"#c9a8d9"        // texte secondaire
gradient:"linear-gradient(135deg,#ff2e88 0%,#ff7a00 50%,#ffd000 100%)"
```

Les couleurs dérivées (bordures, halos, teinte des champs) sont calculées
automatiquement à partir de ces 8 valeurs.

## Ajouter un produit

Dans `products.js`, copiez ce modèle et collez-le dans `PRODUCTS` :

```js
{
  id: 7,
  name: "Nom du produit",
  category: "Accessoires",   // doit exister dans CATEGORIES
  price: 29,
  featured: 7,               // ordre d'affichage « À la une »
  poster: "assets/img/mon-image.jpg",
  desc: "Description courte du produit.",
  media: [
    { type: "image", src: "assets/img/mon-image.jpg", alt: "Photo produit" },
    { type: "video", src: "assets/video/mon-video.mp4", poster: "assets/img/mon-image.jpg" }
  ],
  variants: [
    { name: "Format A", price: null },   // null = prix du produit
    { name: "Format B", price: 39 }
  ]
}
```

- `id` doit être unique.
- `variants` : une seule entrée si le produit n'a pas de variante (le choix
  des variantes est alors masqué).
- `media` vide affiche l'emoji `emoji: "📿"` à la place de la photo.

## Carrousel de la fiche produit

- Flèches ‹ ›, miniatures cliquables, glissement du doigt sur mobile.
- Flèches ← → du clavier quand la fiche est ouverte.
- Compteur « 2 / 3 » et pièce mise en avant selon le média affiché.

## Notes

- Le panier et les avis sont stockés dans le navigateur (localStorage) :
  ils ne sont pas partagés entre appareils.
- Remplacez les avis d'exemple par de vrais avis avant publication.
