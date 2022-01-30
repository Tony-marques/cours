// DECOMPOSITION SUR LES TABLEAUX

let arr = ["tony", "marques", 29];

[prenom, nom, age] = arr;

console.log(prenom, nom, age); // tony marques 29

// Intervertir 2 variables
let A = "Tony";
let B = "Marques";

[A, B] = [B, A];

console.log(A, B); // Marques Tony

// DECOMPOSITION SUR LES OBJETS
let person = {
  lastName: "Marques",
  firstName: "Tony",
};

let { lastName } = person;

console.log(lastName); // Marques
