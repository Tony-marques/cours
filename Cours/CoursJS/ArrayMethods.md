# Les méthodes sur les tableaux
[Revenir en arrière](./Cours_JS.md)
## 1. forEach()

- Permet d'itérer sur chaque item du tableau.

Syntaxe: arr.forEach((item, index, array) => {}):

- item est l’élément.
- index est sont index.
- array est le tableau lui même.

```js
let arr = [1, 2, 3];
arr.forEach((item, index) => {
  console.log(item, index);
  // item: 1 2 3
  // index: 0 1 2
});
```

---

## 2. slice()

- Retourne un nouveau tableau entre start et end, end non compris.

Syntaxe: arr.slice(start, end):

- start: index de départ pour la copie du tableau.
- end: index de fin pour la copie du tableau.

```js
let arr = ["t", "e", "s", "t"];

console.log(arr.slice(1, 3));
// e,s (copie de l'index 1 à 3. 3 non compris)

console.log(arr.slice(-2));
// s,t (copie les 2 dernières valeurs du tableau)
```

---

## 3. splice()

- Cette méthode permet de supprimer, remplacer, ajouter des éléments à un tableau

Syntaxe: arr.splice(start, deleteCount, elem1, elem2) :

- paramètre start: index à partir duquel on va effectuer la modification.
- paramètre deleteCount: nombre d'éléments à supprimer depuis l'index start.
- paramètre(s) suivant(s): valeur(s) d'élément(s) à insérer à partir de l'index start.

```js
let fruits = ["Mangue", "Raisin", "Figue", "Kiwi"];
fruits.splice(1, 2); // depuis l'index 1, supprimer 2 valeurs
console.log(fruits); // ['Mangue', 'Kiwi']
```

```js
let fruits = ["Mangue", "Raisin", "Figue", "Kiwi"];
fruits.splice(1, 0, "Pomme"); // depuis l'index 1, supprimer 0 valeurs, puis y insérer 'Pomme'
console.log(fruits); // ['Mangue', 'Pomme', 'Raisin', 'Figue', 'Kiwi']
```

---

## 4. find()

- Permet de trouver le 1er élément trouvé dans le tableau selon la condition donnée

Syntaxe: arr.find((item, index, array) => {}):

- item est l’élément.
- index est sont index.
- array est le tableau lui même.

```js
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => {
  return item.id == 1;
});

console.log(user); // { id: 1, name: 'John' }
```

---

## 5. filter()
- Souvent utilisé avec la méthode .includes()
- La méthode find() recherche un seul (premier) élément qui rend la fonction true.
- Si il y a plusieurs éléments à rechercher, il faut utiliser la méthode filter()

Syntaxe: arr.find('item, index, array) => {}):

- item est l’élément.
- index est sont index.
- array est le tableau lui même.

```js
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// retourne le tableau des deux premiers users (id inférieur à 3)
let someUsers = users.filter((item) => {
  return item.id < 3;
});

console.log(someUsers);
// [ { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]
```

---

## 6. map()

- Crée un nouveau tableau avec les résultats de l'appel de la fonction fournie sur chaque élément du tableau.

Syntaxe: arr.map((item, index, array) => {}):

```js
let arr = ["tony", "marques"];

let length = arr.map((item, index, array) => {
  console.log(index); // 0 1
  return item.length;
});

console.log(length); // [ 4, 7 ]
```

---

## 6. sort()

- La méthode sort() trie le tableau selon la condition donnée

Syntaxe: arr.sort() => {}:

- Pour trier des valeurs numériques:

```js
let arr = [1, 2, 3, 10, 11, 100, 105, 150];

let sort = arr.sort((a, b) => {
  return a - b; // a - b pour croissant, b - a pour décroissant
});

console.log(sort); // [1, 2, 3, 10, 11, 100, 105, 150]
```

- Pour trier des éléments de type string, il faut utiliser .localeCompare():

```js
let arr = ["tony", "marques", "dorine", "walter"];

let sort = arr.sort((a, b) => {
  return a.localeCompare(b); 
  // de A à Z, sinon b.localeCompare(a) pour de Z à A
});

console.log(sort); // [ 'dorine', 'marques', 'tony', 'walter' ]
```

---

## 7. reduce()

- Permet de calculer une valeur unique basée sur un tableau

Syntaxe: arr.reduce((accumulator, item, index, array) => {})

```js
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((acc, item) => {
  return acc + item
});

console.log(result); // 15
```
[Revenir en arrière](./Cours_JS.md)