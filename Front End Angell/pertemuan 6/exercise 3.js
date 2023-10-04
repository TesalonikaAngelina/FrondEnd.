//Array

let people = ["Greg", "Mary", "Devon", "James"];

//1.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//2.
people.forEach(person => {
  console.log(person);
});

//3. 
people.shift("Greg"); {
console.log(people);
};
//4.
people.pop("James"); {
console.log(people);
};
//5.
people.unshift("Matt"); {
console.log(people);
};
//6.
people.push("Tesalonika"); {
console.log(people);
};
//7.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

//8.
let newArray = people.slice(1, -1);

//9.
people = ["Matt", "Mary", "Devon", "Tesalonika"]; {
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
};
//10.
let withBob = people.concat("Bob");

let finalResult = withBob;
console.log(finalResult);

//Object

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1. Adding 'GO' di languages
programming.languages.push("Go");
console.log(programming.languages);

//2. Change default
programming["difficulty"] = 7;
console.log(programming.difficulty);

//3. delete
delete programming.jokes;
console.log(programming); 

//4. adding   key
programming.isFun = 'true';
console.log(programming);

//5. show index
programming.languages.map(function (value, index) {
    console.log(index + " - " + value);
});
