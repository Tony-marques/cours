# Les dates

[Revenir en arrière](./Cours_JS.md)

## Création d'un nouvel objet Date

```js
let now = new Date();
console.log(now);
// => date actuelle sous format: 2022-01-30T22:58:03.771Z
```

---

## Mettre une date sous format jj/mm/aaaa

```js
let now = new Date();

now.toLocaleDateString();
// => date au format: jj/mm/aaaa
```

---

## Personnaliser le format de la date avec toLocaleDateString()

```js
let now = new Date();

now.toLocaleDateString("fr-FR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
// => lundi 31 janvier 2022
```

---

## Afficher la date en millisecondes

```js
let start = Date.now();
console.log(start);
// => date en milliseconde - 1643630614820
```

[Revenir en arrière](./Cours_JS.md)