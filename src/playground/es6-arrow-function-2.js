const add = (a, b) => {
	return a + b
};

console.log(add(55, 1))

const user = {
	name: 'Andrew',
	cities: ['Philadelphia', 'New York', 'Dublin'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};

console.log(user.printPlacesLived());

const multiplier = {
	numbers: [4, 3, 2, 5],
	multiplyBy: 4,
	multiply() {
		return this.numbers.map((num) => num * this.multiplyBy);
	}
};

console.log(multiplier.multiply());