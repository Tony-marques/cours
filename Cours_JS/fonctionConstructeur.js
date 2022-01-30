function Person(firstName, lastName, age) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age,
  this.direBonjour = function () {
    console.log(`Bonjour ${firstName} ${lastName}, vous avez ${age} ans.`);
  };
}

const dorine = new Person("Dorine", "Walter", 25);
const tony = new Person("Tony", "Marques", 29);

dorine.direBonjour(); // Bonjour Dorine Walter, vous avez 25 ans
tony.direBonjour(); // Bonjour Tony Marques, vous avez 29 ans
