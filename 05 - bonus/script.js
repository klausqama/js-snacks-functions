/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function sayHelloByHours(person) {
    const date = new Date();
    const hour = 16; 
  
    let hello;
  
    if (hour < 13) {
      hello = 'buongiorno';
    } else if (hour < 17) {

      hello = 'buon pomeriggio';
    } else {
      hello = 'buonasera';
    }
  
    return `${hello} ${person}`;
  }

// Invoca la funzione qui e stampa il risultato in console

console.log(sayHelloByHours(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.