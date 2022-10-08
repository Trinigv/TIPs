function MaxValue(shares) {
	// Your code here:
	// tengo que recorrer el array
	// el mayor profit es el valor max - valor min
	// busco el max y min comparandolos con un pointer anterior
	// resto y obtengo profit
	var sell = shares[0];
	var buy = shares[0];
	for (let i = 0; i < shares.length; i++) {
		if (sell < shares[i]) {
			sell = shares[i];
		} else if (shares[i] < buy) {
			buy = shares[i];
		}
	}
	console.log(sell, buy);
	var profit = sell - buy;
	return profit;
}

console.log(MaxValue([11, 5, 6, 7, 13, 3, 4]));

module.exports = MaxValue;
