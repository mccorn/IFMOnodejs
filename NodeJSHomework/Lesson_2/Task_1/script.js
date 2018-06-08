function get_quadrant_number(parX, parY) {
  parX = parseFloat(parX);
  parY = parseFloat(parY);
  if ((!parX)||(!parY)) return new Error();
  if (parY > 0) {
    if (parX > 0) {
      return 1;  
    } else if (parX < 0) {
      return 2;  
    }
  } else if (parY < 0){
    if (parX > 0) {
      return 4;  
    } else if (parX < 0) {
      return 3;  
    }
  }
  
};

let parXX;
let parYY;

parXX = 13;
parYY = 13;
console.log(`parXX = ${parXX} : parYY = ${parYY} - ${get_quadrant_number(parXX, parYY)}`);

parXX = 13;
parYY = -13;
console.log(`parXX = ${parXX} : parYY = ${parYY} - ${get_quadrant_number(parXX, parYY)}`);

parXX = -13;
parYY = 13;
console.log(`parXX = ${parXX} : parYY = ${parYY} - ${get_quadrant_number(parXX, parYY)}`);

parXX = -13;
parYY = -13;
console.log(`parXX = ${parXX} : parYY = ${parYY} - ${get_quadrant_number(parXX, parYY)}`);

parXX = 0;
parYY = 13;
console.log(`parXX = ${parXX} : parYY = ${parYY} - ${get_quadrant_number(parXX, parYY)}`);

parXX = 13;
parYY = 0;
console.log(`parXX = ${parXX} : parYY = ${parYY} - ${get_quadrant_number(parXX, parYY)}`);

parXX = -13;
parYY = 0;
console.log(`parXX = ${parXX} : parYY = ${parYY} - ${get_quadrant_number(parXX, parYY)}`);

parXX = -0;
parYY = -0;
console.log(`parXX = ${parXX} : parYY = ${parYY} - ${get_quadrant_number(parXX, parYY)}`);

parXX = '-10';
parYY = '10guykgk,';
console.log(`parXX = ${parXX} : parYY = ${parYY} - ${get_quadrant_number(parXX, parYY)}`);

