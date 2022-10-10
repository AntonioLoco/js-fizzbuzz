/* Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

const row = document.querySelector(".row");

// ELABORAZIONE
// for(let i = 1; i <= 100; i++){

//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     let fizzBuzz = "";

//     if( i % 3 === 0 && i % 5 === 0){
//         fizzBuzz = "fizzbuzz";
//         cell.classList.add(fizzBuzz);
//         cell.innerHTML = fizzBuzz;
//     } else if( i % 3 === 0){
//         fizzBuzz = "fizz";
//         cell.classList.add(fizzBuzz);
//         cell.innerHTML = fizzBuzz
//     } else if( i % 5 === 0){
//         fizzBuzz = "buzz";
//         cell.classList.add(fizzBuzz);
//         cell.innerHTML = fizzBuzz
//     } else {
//         cell.innerHTML = i;
//     }

//     // OUTPUT
//     row.append(cell);
// }


// SECONDO METODO
for(let i = 1; i <= 100; i++){
    let fizzBuzz = "";

    if( i % 3 === 0 && i % 5 === 0){
        fizzBuzz = "fizzbuzz";
    } else if( i % 3 === 0){
        fizzBuzz = "fizz";
    } else if( i % 5 === 0){
        fizzBuzz = "buzz";
    }

    // OUTPUT
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if(fizzBuzz !== ""){
        cell.classList.add(fizzBuzz);
        cell.innerHTML = fizzBuzz;
    } else {
        cell.innerHTML = i;
    }

    row.append(cell);
}


