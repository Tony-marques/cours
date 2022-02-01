# Les méthodes sur les chaînes de caractères (string)
[Revenir en arrière](./Cours_JS.md)
## 1. length
- La méthode length renvoie la longueur de la chaîne.
```js
let name = "Tony";

console.log(name.length);
// => 4
```
---

## 2. toUpperCase()
- La méthode toUpperCase() transforme chaque caractère de la chaîne en majuscules.
```js
let name = "Tony";

console.log(name.toUpperCase());
// => TONY
```
---
## 3. toLowerCase()
- La méthode toLowerCase() transforme chaque caractère de la chaîne en minuscules.
```js
let name = "Tony";

console.log(name.toUpperCase());
// => tony
```
---

## 4. trim()
- La méthode trim() supprime les espaces avant et après la chaîne. 
```js
let name = "          Tony             ";

console.log(name.trim());
// => Tony
```
---

## 5. slice()
- La méthode slice() renvoie la chaîne de startIndex à endIndex (non compris).

Syntaxe: slice(startIndex, endIndex)
```js
let name = "Tony";

console.log(name.slice(0, 2));
// => To
```
---

## 6. split()
- La méthode split() divise la chaîne donnée et renvoie les parties sous forme de tableau. la division est faite selon le paramètre.

Syntaxe: split("paramètre")
```js
let name = "Tony";

console.log(name.split("o")); // Chaque "o" divise la chaîne.
// => [ 'T', 'ny' ]
```
---

## 7. substr()
- La méthode substr() retourne la partie d'une chaîne de caractères comprise entre l'indice de départ et un certain nombre de caractères après celui-ci.

Syntaxe: split("paramètre")
```js
const name = 'Tony';

console.log(name.substr(1, 2)); // => retourne à partir de l'index 1, 2 valeur
// => "on"

console.log(name.substr(2)); // à partir de l'index 2, retourne toute la suite
// => "ny"
```
---
[Revenir en arrière](./Cours_JS.md)