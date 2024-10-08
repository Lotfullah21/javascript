const geography = [
	{
		name: "Afghanistan",
		population: 42.2 + "Million",
		location: "South Asia",
		age: 90,
	},
	{
		name: "India",
		population: 1.435 + " Billion",
		location: "South Asia",
		age: 43,
	},
	{
		name: "Iran",
		population: 87.9 + " Million",
		location: "West Asia",
		age: 40,
	},
];

const afg = geography.find(function (country) {
	return country.name === "Afghanistan";
});

console.log(afg);

const subjects = [
	"AI",
	"Machine learning",
	"Deep learning",
	"Python",
	"JavaScript",
	"AI",
];

const result = subjects.find(function (subject) {
	return subject === "AI";
});
