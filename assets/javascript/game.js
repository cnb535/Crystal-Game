// $(document).ready(function() {

	let totalScore = 0;
	let wins = 0;
	let losses = 0;

	const getRandomIntInclusive = function(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	const randomNumber = getRandomIntInclusive(19, 120);
	console.log(randomNumber);

	$("#random-number").html(randomNumber);

	const randomCrystal = getRandomIntInclusive(1,12);

	$("#crystal-1").on("click", function() {
		console.log(randomCrystal);


	});

	$("#crystal-2").on("click", function() {
		console.log(randomCrystal);


	});


// });