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
