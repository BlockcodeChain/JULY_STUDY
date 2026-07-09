// write a  fn that check all elements in an array are numbers


function checker(arr) {
    return arr.every(data => typeof data === "number");
}

console.log(checker([1,2,3,4]));      // true
console.log(checker([1,2,"3",4]));    // false


// method 2

function checker(arr) {

    for (const item of arr) {

        if (typeof item !== "number") {
            return false;
        }

    }

    return true;
}

console.log(checker([1,2,3]));
console.log(checker([1,2,"3"]));