const getRandomIntInclusive = function(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


const randomNumber = getRandomIntInclusive(120, 19);
console.log(randomNumber);

const randomNumberDiv = document.getElementById("random-number");

randomNumberDiv.innerHTML = randomNumber;