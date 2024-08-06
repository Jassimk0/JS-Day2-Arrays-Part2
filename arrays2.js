students = ["jassim", "Ali", "Talal", "Mohsen"];

function isArrayLengthOdd(array) {
  if (array.length % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayLengthOdd(students));

function isArrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayLengthEven(students));

instructors = ["Mshary", "Hasan"];

function addLailaToArray(instructors) {
  instructors.push("Laila");

  return instructors;
}

console.log(addLailaToArray(instructors));

teams = ["Brazil", "Germany", "Argentina"];

function eliminateTeam(teams) {
  return teams.pop();
}

console.log(eliminateTeam(teams));

fruits = ["apple", "orange", "banana", "kiwi", "mango", "watermelon"];

function secondHalfOfArrayIfItIsEven(fruits) {
  half = fruits.length / 2;
  if (fruits.length % 2 === 0) {
    return fruits.slice(half);
  } else {
    return [];
  }
}

console.log(secondHalfOfArrayIfItIsEven(fruits));
