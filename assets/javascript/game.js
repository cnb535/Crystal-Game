// $(document).ready(function() {

	let totalScore = 0;
	$("#number").html(totalScore);

	let wins = 0;
	$("#wins").html(wins);
	let losses = 0;
	$("#losses").html(losses);


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

		totalScore += randomCrystal;

		$("#number").html(totalScore);

		if (totalScore === randomNumber) {
			alert("Match!");
			wins++;
			$("#wins").html(wins);
			console.log(wins);
		}

		else if (totalScore >= randomNumber) {
			alert("Over!");
			losses++;
			$("#losses").html(losses);
			console.log(losses);
		}
	});

	$("#crystal-2").on("click", function() {
		console.log(randomCrystal);

		totalScore += randomCrystal;

		$("#number").html(totalScore);

		if (totalScore === randomNumber) {
			alert("Match!");
			wins++;
			$("#wins").html(wins);
			console.log(wins);
		}

		else if (totalScore >= randomNumber) {
			alert("Over!");
			losses++;
			$("#losses").html(losses);
			console.log(losses);
		}
	});

	$("#crystal-3").on("click", function() {
		console.log(randomCrystal);

		totalScore += randomCrystal;

		$("#number").html(totalScore);

		if (totalScore === randomNumber) {
			alert("Match!");
			wins++;
			$("#wins").html(wins);
			console.log(wins);
		}

		else if (totalScore >= randomNumber) {
			alert("Over!");
			losses++;
			$("#losses").html(losses);
			console.log(losses);
		}
	});

	$("#crystal-4").on("click", function() {
		console.log(randomCrystal);

		totalScore += randomCrystal;

		$("#number").html(totalScore);

		if (totalScore === randomNumber) {
			alert("Match!");
			wins++;
			$("#wins").html(wins);
			console.log(wins);
		}

		else if (totalScore >= randomNumber) {
			alert("Over!");
			losses++;
			$("#losses").html(losses);
			console.log(losses);
		}
	});


// });