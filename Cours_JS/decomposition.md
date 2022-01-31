# La décomposition (destructuring)

## Sur les tableaux:

```js
let arr = ["tony", "marques", 29];

[prenom, nom, age] = arr;

console.log(prenom, nom, age); // tony marques 29
```

- Pour intervertir 2 variables:

```js
let A = "Tony";
let B = "Marques";

[A, B] = [B, A];

console.log(A, B); // Marques Tony
```

---


## Sur les objets:

```js
let person = {
  lastName: "Marques",
  firstName: "Tony",
};

let { lastName } = person;

console.log(lastName); // Marques
```

