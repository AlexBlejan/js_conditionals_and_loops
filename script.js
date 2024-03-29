console.log(`Hello`);

// if (conditie) {}

let userAge = 18;
console.log(`Varsta personei este:`, userAge, `ani`);
if (userAge >= 18) {
	console.log(`Persoana poate vota`);
}

let isChoreDone = true;
let hasEaten = false;
if (isChoreDone && hasEaten) {
	console.log(`Te poti uita la desene`);
}

if (!isChoreDone || !hasEaten) {
	if (!isChoreDone) {
		console.log(`Nu te uitila desene pana nu termini toata treaba si mananci`);
	}

	if (!hasEaten) {
		console.log(`Inca nu ai terminat de mancat`);
	}
}

// if..else (conditie){}

if (isChoreDone && hasEaten) {
	console.log(`Te poti uita la desene`);
} else {
	console.log(`Nu te uiti la desene pana nu termini toata treaba si mananci`);
}

// operatorul ternar

let age = 20;
let canVote = age >= 18 ? `Poate vota` : `Nu poate vota`;
console.log(canVote);

// if..else if..else

let number = 13;

if (number > 0) {
	console.log(`Numarul ales este pozitiv`);
} else if (number < 0) {
	console.log(`Numarul ese negativ`);
} else {
	console.log(`numarul este 0`);
}

// switch

const dayOfTheWeek = 5;

switch (dayOfTheWeek) {
	case 1:
		console.log(`Este Luni`);
		break;
	case 2:
		console.log(`Este Marti`);
		break;
	case 3:
		console.log(`Este Miercuri`);
		break;
	case 4:
		console.log(`Este Joi`);
		break;
	case 5:
		console.log(`Este Vineri`);
		break;
	case 6:
		console.log(`Este Sambata`);
		break;
	case 7:
		console.log(`Este Duminica`);
		break;

	default:
		console.log(`Nu stiu ce zi este`);
		break;
}

// Bucle

// while (conditie){}

// cel mai mic numar pozitiv dintr o lista

const numbers = [2, 99, 34, 25, 115, 23, -23];
let smallestNumber = Number.MAX_SAFE_INTEGER;
let currentIndex = 0;

while (currentIndex < numbers.length) {
	if (numbers[currentIndex] < smallestNumber) {
		smallestNumber = numbers[currentIndex];
	}
	currentIndex++;
}
console.log(`Cel mai mic numar din lista este `, smallestNumber);

// do..while

let n = 10;
let num = 0;
do {
	num++;

	console.log(num);
} while (num < n);

// for

let times = 10;

for (i = 0; i < 10; i++) console.log(`Hello ${i} !`);

// cel mai mic numar pozitiv dintr o lista folosin "for"

let smallestNr = Number.MAX_SAFE_INTEGER;

for (i = 0; i < numbers.length; i++) {
	if (numbers[i] < smallestNr) {
		smallestNr = numbers[i];
	}
}

console.log(`CEL MAI MIC NUMAR DIN LISTA ESTE `, smallestNr);

// for..of

const numbers2 = [22, 11, 91, 7, 33];

let min = numbers2[0];

for (const num of numbers2) {
	if (num < min) {
		min = num;
	}
}

console.log(`Cel mai mic numar din array numbers2 este`, min);

// for..in

const myCar = {
	band: `Volvo`,
	model: `XC90`,
	manufactureYear: 2012,
};

for (const property in myCar) {
	console.log(` ${property} are valoarea ${myCar[property]}`);
}

// break si continue

// break opreste iteratia cand e true, iar continue sare peste iteratia respectiva

const numbers3 = [1, 2, 3, 4, 5, 6];
const numberToFind = 7;
let isNumberInArray = false;

for (const num in numbers3) {
	console.log(num);
	if (numberToFind === num) {
		isNumberInArray = true;
		break;
	}
}
console.log(`${numberToFind} este in array: ${isNumberInArray}`);

for (const num of numbers3) {
	if (num % 2 > 0) {
		continue;
	}
	console.log(`numarul ${num} este par, iar dublul lui este ${num * 2}`);
}
