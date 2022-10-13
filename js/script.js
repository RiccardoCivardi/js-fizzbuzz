/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */


// dichiaro il limite emi prendo il container per l'output
const limit = 100;
const customContainer = document.querySelector('.custom-container');


// ciclo da 1 a 100 per stampare i box
for(let i=1; i <= limit; i++) {

  // creo elemento html box
  const box = document.createElement('div');
  // inizializzo il risultato
  let result;

  // do a box la classe .box
  box.classList.add('box');
  
  //logica Fizz Buzz con risultato e assegnazione classe specifica
  if(!(i % 3) && !(i % 5)) {
    result = 'FizzBuzz';
    box.classList.add('magenta');
  } 
  else if(!(i % 3)) {
    result = 'Fizz';
    box.classList.add('lightblue');
  } 
  else if(!(i % 5)) {
    result = 'Buzz';
    box.classList.add('yellow');
  } 
  else {
    result = i;
  };

  // inserisco il risultato nell'html di box
  box.innerHTML = result;
  
  // appendo i box dentro al container in html
  customContainer.append(box);

}

