// First example
let x = 1;
while (x < 10) {
	console.log(x);
	x += 1;
}

let i = 2018;
while (i <= 2022) {
	console.log(i);
	i += 1;
}

let cities = ["Kabul", "Herat", "Baghlan"];

let afgProvinces = "Afghanistan's famous cities are ";

let c = 0;

while (c < cities.length) {
	if (c === cities.length - 1) {
		afgProvinces = afgProvinces + "and " + cities[c];
		console.log(afgProvinces);
	} else {
		afgProvinces = afgProvinces + cities[c] + ", ";
		console.log(afgProvinces);
	}
	c++;
}
