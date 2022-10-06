function FindNeedle(haystack, needle) {
	// Your code here:
	const finding = haystack.search(needle);
	return finding;
}

function FindNeedleTwo(haystack, needle) {
	for (let i = 0; i < haystack.length; i++) {
		if (needle === haystack.slice(i, i + needle.length)) {
			console.log(haystack.slice(i, i + needle.length));
			return i; // si coincide se corta ejecucion y retorna el indice
		}
	}
	return -1; //sino retorna -1
}

//complejidad temporal -----> O(n * m) siendo n el length del haystack y m el length del needle
// la complejidad temporal es la cantidad de comparaciones que debe realizar el algoritmo.

console.log(FindNeedleTwo('react-redux', 'redux'));

module.exports = FindNeedle;
