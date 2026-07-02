// FIND LARGEST WORD

let str="my name is ishi sahu"


// they are sperated by space so we can split by space and then find the largest word
// approach
// split by space and then i use reduce 

let largestWord = str.split(" ").reduce((acc, curr) => {
     if(acc.length > curr.length) return acc;
     return curr
    },"")

    console.log(largestWord)


    // without inbuilt function

  let str = "my name is ishi sahu";

let words = str.split(" ");

let longest = "";

for (let word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}

console.log(longest);