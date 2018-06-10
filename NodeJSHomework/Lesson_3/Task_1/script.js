function getFreeLand(totalSquare, partSquare) {
  try {
    let k;
    let totalS = totalSquare[0] * 100;
    k = eval(totalSquare[1].trim().replace(':', '/'));
    k = parseFloat(k);
    
    let totalW = Math.sqrt(totalS / k);
    let totalH = totalW * k;
    
    if (isNaN(k) || !isFinite(k) || !k) {
      er = new Error('Error: totalSquare[1]: isNaN or isInfinite');
      throw er;
    }
    if (!totalSquare[0]) {
      er = new Error('Error: totalSquare[0]: undefined or 0');
      throw er;    
    }
    if (!partSquare[0]) {
      er = new Error('Error: partSquare[0] (width) : undefined or 0');
      throw er;    
    }
    if (!partSquare[1]) {
      er = new Error('Error: partSquare[1] (height) : undefined or 0');
      throw er;    
    }
    if (partSquare[1] > totalW && partSquare[1] > totalH) {
      er = new Error('Error: partSquare[1] (height) : resized!');
      throw er;        
    }
    if (partSquare[0] > totalW && partSquare[0] > totalH) {
      er = new Error('Error: partSquare[0] (width) : resized!');
      throw er;        
    }
    
    console.log('S = ' + totalS);
    console.log(totalSquare[1]);
    console.log('k = ' + k);
    console.log('W = ' + totalW);
    console.log('H = ' + totalH);
    
    console.log('w = ' + partSquare[0]);
    console.log('h = ' + partSquare[1]);
    
    let result = (totalS % (partSquare[0] * partSquare[1]));
    console.log('FreeSquare = ' + result);
    
    return result;
  } catch (err) {
    console.log(err.stack);
    return;
  }
}

getFreeLand([100, '1:1'], [15, 25]);