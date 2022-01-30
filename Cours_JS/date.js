// Création nouvel objet Date
let now = new Date();

console.log(now); // Affiche la date actuelle sous format
// 2022-01-30T22:58:03.771Z

console.log(now.toLocaleDateString()); // affiche la date au
// format jj/mm/aaaa

let start = Date.now();
console.log(start); // Affiche la date en milliseconde
