// name in lowercase , uppercase and titlecase
let personName = "asfah mussarrat";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
