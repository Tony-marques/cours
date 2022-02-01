# Les méthodes sur les number

[Revenir en arrière](./Cours_JS.md)

## 1. toString()

- La méthode toString() convertie le number en chaîne de caractère (string)

```js
let number = 123;

const newNumber = number.toString();
console.log(typeof newNumber); // => string
```

---

## 2. toFixed()

- La méthode toFixed() convertie le number en chaîne de caractère (string) puis arrondi avec le nombre en paramètre

```js
let number = 9.656;

console.log(number.toFixed(0)); // => 10
console.log(number.toFixed(2)); // => 9.66
console.log(number.toFixed(4)); // => 9.6560
```

---

# Il existe 3 méthodes pour convertir une variable en number:

- Number() => retourne un nombre
- parseInt() => retourne un entier ou nombre à virgule
- parseFloat() => retourne un entier

[Revenir en arrière](./Cours_JS.md)
