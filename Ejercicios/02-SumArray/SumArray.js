function SumArray(arr, n) {
	// Your code here:
	//recorrer todo el arreglo
	//recorrerlo una segunda vez con indice i+1
	//sumar los valores y fijarse que coincidan con n
	for (let i = 0; i < arr.length - 1; i++) {
		//empiezo desde posicion 0 entonces en length tiene q ser - 1
		for (let j = 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === n) {
				return true;
			}
		}
	}
	return false;
}
// no me gusta esta solucion porque no chequea todos los elementos del array correctamente!!!
// para el caso de 2+2 da true porque da la casualidad de que lo sumo
// pero no compara en ningun momento la posicion inicial (1) dos veces entonces 2 da false
console.log(sumArray2([1, 2, 3, 4], 2));

function sumArray2(arr, n) {
	var start = 0;
	var end = arr.length - 1;
	while (start <= end) {
		var sum = arr[start] + arr[end];
		if (sum === n) {
			return true;
		} else if (sum < n) {
			start++;
		} else if (sum > n) {
			end--;
		}
	}
	return false;
}

module.exports = SumArray;
