function square(n) {
	for (var i = 1; i < n; i++) {
		var result = i + "x" + `${i}` + "=" + i * i;
		console.log(result);
	}
}
square(10);

const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

for (cat of cats) {
	myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
