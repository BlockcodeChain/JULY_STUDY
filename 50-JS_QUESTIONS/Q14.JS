// build a simple isPrime function to check if a number is prime or not


function isPrime(num){

    if(num < 2){
        console.log("Not Prime");
        return;
    }

    for(let i=2;i<num;i++){

        if(num%i===0){
            console.log("Not Prime");
            return;
        }

    }

    console.log("Prime");
}

isPrime(5);