# Les méthodes sur les tableaux

## 1. forEach()
- Permet d'itérer sur chaque item du tableau.
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
- Retourne un nouveau tableau entre start et end, end non compris

Syntaxe: arr.slice([start], [end])
```js
let arr = ["t", "e", "s", "t"];

console.log(arr.slice(1, 3)); 
// e,s (copie de l'index 1 à 3. 3 non compris)

console.log(arr.slice(-2)); 
// s,t (copie les 2 dernières valeurs du tableau)

```
