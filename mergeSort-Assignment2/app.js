const exampleArrs = [
	[3, 2, 1, 13, 8, 5, 0, 1],
	[105, 79, 100, 110],
];

const arr = exampleArrs[0];

function mergesort(arr, start = 0, end = arr.length - 1) {
	if (start >= end) {
		return;
	}
	let mid = Math.floor((start + end) / 2);
	mergesort(arr, start, mid);
	mergesort(arr, mid + 1, end);
	merge(arr, start, mid, mid + 1, end);

	function merge(arr, ls, le, rs, re) {
		const temp = [];

		let i = ls;
		let j = rs;
		let k = 0;

		while (i <= le && j <= re) {
			if (arr[i] >= arr[j]) {
				temp[k++] = arr[j++];
			} else {
				temp[k++] = arr[i++];
			}
		}
		while (i <= le) {
			temp[k++] = arr[i++];
		}
		while (j <= re) {
			temp[k++] = arr[j++];
		}
		// copy temp to main arr
		for (let t = 0; t < temp.length; t++) {
			arr[ls + t] = temp[t];
		}
	}
}

for (const arr of exampleArrs) {
	console.log(`From: ${formatArr([...arr])}`);
	mergesort(arr);
	console.log(`To: ${formatArr(arr)}
  `);
}

console.log(`
________________________________________________

That's it, Have a nice day! <3
________________________________________________`);

function formatArr(arr) {
	return arr.join(" - ");
}
