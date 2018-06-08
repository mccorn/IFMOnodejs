function* generatePassword(numLength) {
  const alphabetUp = ['A','B','C','D','E','F','G','H','I','J','K','L',
    'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const alphabetLow = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let result = '';
  
  for (let i = 0; i < numLength; i++) {
    let key = rnd(0,3);  
    switch (key) {
      case 0: 
        result += alphabetUp[rnd(0,alphabetUp.length)];
        break;
      case 1:
        result += alphabetLow[rnd(0,alphabetLow.length)];
        break;
      default:
        result += rnd(0,10);
    }
  }
  yield result;
}

function rnd(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}

let gen = generatePassword(15);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);