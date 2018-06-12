exports.camel_to_snake = function(someString) {
  let result = someString.split('').map(function(el, inx) {
    if (el === el.toUpperCase()) {
      if (inx) {
        return '_' + el.toLowerCase();
      } else {
        return el.toLowerCase(); 
      }
    }
    return el;
  }).join('');
  return result;
}

exports.snake_to_camel = function(someString) {
  let result = someString.split('_').map(function(el, inx) {
    return el.replace(el[0], el[0].toUpperCase()); 
    return inx ? el.replace(el[0], el[0].toUpperCase()) : el; 
  }).join('');
  return result;
}


//let str = camel_to_snake('someStringEveryBodyDanceNow');
//let str2 = snake_to_camel('some_string_every_body_dance_now');
//console.log(str);
//console.log(str2);