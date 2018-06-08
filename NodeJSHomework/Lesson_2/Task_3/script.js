let fs = require('fs');
let result = 'Any result';

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('data.txt:\n' + data);
  result = data.split(' ');
//  console.log(result);
  result_1 = result.filter(function(el){
                         return !(parseInt(el) % 2);
                         }).join(' ');
//  console.log(result);
  
  fs.writeFile('out-1.txt', result_1, (err) => {
    if (err) throw err;
    console.log('out-1.txt saved!');
  });
  
  result_2 = result.map(function(el){
                         return (parseInt(el) ** 3);
                         }).join(' ');
  
  fs.writeFile('out-2.txt', result_2, (err) => {
    if (err) throw err;
    console.log('out-2.txt saved!');
  });
});

