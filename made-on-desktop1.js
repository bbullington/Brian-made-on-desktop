/*arrays




 */

// var listOfNumbers= [2,3,5,7,11];
// console.log(listOfNumbers[2]);
// console.log(listOfNumbers.length);
// //listOfNumbers=2;
//
// console.log(listOfNumbers);
//
// for (var i=0; i<listOfNumbers.length; i++){
//     console.log(listOfNumbers[i]);
//     console.log("loop");
// }
//
// listOfNumbers.push(13);
// console.log(listOfNumbers);


function isprime(value){
    for(var i=2; i<value; i++){
        if(value%i==0){
            //console.log(i);
            return false;
        }
    }
    return value>1;
}
//console.log(isprime(14));

var primeNumberCounter = 0;  //This will be where I count up to the 1000th prime number

for(var testcase=2; testcase<100000; testcase++){       //testcase is the iterative number to test. Starting at 2 to avoid 1 and 0. Limit put to prevent infinite loop.
    if(isprime(testcase)){                          // test if testcase if prime. If so, then iterate up primeNumberCounter
        primeNumberCounter++
    }
    if(primeNumberCounter==1000){                   //when we reach the 1000th prime number, then print out what the number is, i.e. testcase
        console.log(testcase+ "is the "+ primeNumberCounter + "th prime!");
        break;                                      //end for loop
    }
}

var primes= [];


for(var i=0; i<100; i++){
    console.log(i+" is the being tested");
    if(isprime(i)){
        primes.push(i);
        console.log(primes);
    }
}