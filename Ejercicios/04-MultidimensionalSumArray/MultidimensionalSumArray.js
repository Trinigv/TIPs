function mdArraySum(arr) {
	// Your code here:
	//empiezo con un array
	//recorro array
	//me fijo si primer elemento es entero o array
	//si es entero lo sumo
	//si es un array lo tengo que recorrer de nuevo (recursividad)
	//hasta que sea un entero entonces lo acumulo en variable
	var accumulator = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			accumulator += arr[i];
		} else {
			console.log(arr[i]);
			accumulator += mdArraySum(arr[i]); //no olvidarse del acumulador aca!!!
			//almacena el dato de la funcion ejecutada en ese contexto en el acumulador global?
		}
	}
	return accumulator;
}

console.log(mdArraySum([[2, 4], [1], [4, 2, 1]]));

module.exports = mdArraySum;
