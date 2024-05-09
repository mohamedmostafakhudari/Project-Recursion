function fibs(num) {
	if (num === 0) return [0];
	if (num === 1) return [0, 1];
	if (num === 2) return [0, 1, 1];

	const result = [0, 1, 1];

	let [a, b, c] = result;
	for (let i = 0; i <= num; i++) {
		[a, b, c] = [b, a + b, a + b + b];
		result.push(c);
	}
	return result;
}
console.log("Iterative version example: ", fibs(4));

function fibsRec(num) {
	if (num < 0) throw new Error("Only 0 or pos num allowed");
	const result = [];
	for (let i = 0; i <= num; i++) {
		result.push(helper(i));
	}
	return result;
	function helper(x, cache = [0, 1, 1]) {
		if (cache[x]) {
			return cache[x];
		}

		if (x === 0) return 0;
		if (x <= 2) return 1;
		let res = helper(x - 1, cache) + helper(x - 2, cache);
		cache[x] = res;
		return res;
	}
}
console.log("Recursive optimized version example: ", fibsRec(7));
