function* generatePassword(numLength) {
  const ALPAHABETUP = ['A','B','C','D','E','F','G','H','I','J','K','L',
    'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const ALPHABETLOW = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const ALPHABETNUM = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const ALPHABET = [ALPAHABETUP, ALPHABETLOW, ALPHABETNUM];
  
  while (true) {
    let result = '';
    for (let i = 0; i < numLength; i++) {
      result += generateSymbol(ALPHABET[rnd(0,3)]);
    }
    yield result;      
  }
}

function generateSymbol(someALPHABET) {
 return someALPHABET[rnd(0, someALPHABET.length)];
}

function rnd(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}

let gen = generatePassword(15);
let gen2 = generatePassword(5);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);