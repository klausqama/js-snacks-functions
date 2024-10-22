/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(string) {
  
    string = string.toLowerCase();
  
    let count = 0;
  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      if (
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u'
      ) {
        count = count + 1;
      }
    }
    return count;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)