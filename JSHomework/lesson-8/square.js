var size = parseInt(prompt('Введите размер игрового поля', 2));

var arr = [];
var standartarr = [];
var colors = [];
for (let i = 0; i < size ** 2; i++) {
    arr.push(i + 1);
    standartarr.push(i + 1);
    colors.push(`rgb(${corn.rndRound(1, 255)}, ${corn.rndRound(1, 255)}, ${corn.rndRound(1, 255)})`);
};
standartarr.sort(function(a, b){return +a < +b});
arr.sort(corn.compareRandom);

var table = document.createElement('table');
for(var i=0; i< size; i++){
	var tr = document.createElement('tr');
	for(var j=0; j < size; j++){
		var td = document.createElement('td');		
		td.innerText = arr[i * size + j];
        td.style.color = colors[i * size + j];
		tr.append(td);
	}
	table.append(tr);
}
document.body.append(table);