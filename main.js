var randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var randomNumberBox = document.querySelector('.random-number-box');
var inputGuess = document.querySelector('.guess-input');
var clickButton = document.querySelector('.button');
var incrimentText = document.querySelector('.incriment-text-span')
var i = 0;
randomNumberBox.textContent = randomNumber;
incrimentText.textContent = i;
clickButton.addEventListener('click', function () {
	i++;
	incrimentText.textContent = i;
	
	if (inputGuess.value > randomNumber) {
		// console.log('Input more than X')
alert('Input more than X')
	}
	else if (inputGuess.value < randomNumber) {
		// console.log('Input less than X');
		alert('Input less than X');
	}
	else {
		// console.log('Congratulation you win')
		alert('Congratulation you win')

		var repeat = confirm('Do you want one more time?')

		if(repeat==true)
			window.location.reload()
	}
}); 