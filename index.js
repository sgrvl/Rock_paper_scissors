const rulesWrap = document.getElementsByClassName('rulesWrap')[0];
var c = 0; // open/close counter

function rules(){
	if (c == 0) {
		rulesWrap.classList.add('rulesOpacity');
		c++;
	} else {
		rulesWrap.classList.remove('rulesOpacity');
		c--;
	}
}

const icon = document.getElementsByClassName('playIcon');
const triangle = document.getElementsByClassName('playWrap')[0];
const pulse = document.getElementsByClassName('hoverPulse')[0];
const result = document.getElementsByClassName('result')[0];
const playAgain = document.getElementsByClassName('playAgain')[0];
var score = document.getElementById('score');
const youPicked = document.getElementsByClassName('youPicked');
const theHouse = document.getElementsByClassName('theHouse');
var s = 0;

function choose(play){

	//Player hand
	if (play == 0) { //paper
		icon[0].classList.add('chosen');
		icon[1].classList.add('hidden');
		icon[2].classList.add('hidden');
	}
	if (play == 1) { //scissor
		icon[1].classList.add('chosen');
		icon[0].classList.add('hidden');
		icon[2].classList.add('hidden');
	}
	if (play == 2) { //rock
		icon[2].classList.add('chosen');
		icon[1].classList.add('hidden');
		icon[0].classList.add('hidden');		
	}

	triangle.style.background = 'transparent';
	pulse.style.animationPlayState = 'paused';
	playAgain.style.opacity = '1';
	youPicked[play].style.opacity = '1';	

	var computer = (Math.floor(Math.random()*3));

	//House hand
	if (computer == 0) { //paper
		icon[3].classList.add('computer');
	}
	if (computer == 1) { //scissor
		icon[4].classList.add('computer');
	}
	if (computer == 2) { //rock
		icon[5].classList.add('computer');
	}

	//score
	if (play == 0 && computer == 0) { //tie
		result.innerHTML = "TIE";
	}

	if (play == 0 && computer == 1) { //lose
		result.innerHTML = "YOU LOSE";
		s--;
	}

	if (play == 0 && computer == 2) { //win
		result.innerHTML = "YOU WIN";
		s++;
	}

	if (play == 1 && computer == 0) { //win
		result.innerHTML = "YOU WIN";
		s++;
	}

	if (play == 1 && computer == 1) { //tie
		result.innerHTML = "TIE";
	}

	if (play == 1 && computer == 2) { //lose
		result.innerHTML = "YOU LOSE";
		s--;
	}

	if (play == 2 && computer == 0) { //lose
		result.innerHTML = "YOU LOSE";
		s--;
	}

	if (play == 2 && computer == 1) { //win
		result.innerHTML = "YOU WIN";
		s++;
	}

	if (play == 2 && computer == 2) { //tie
		result.innerHTML = "TIE";
	}
	theHouse[computer].style.opacity = '1';

	score.innerHTML = s;

	document.getElementsByClassName('btn')[0].addEventListener('click', function(){
		
		triangle.style.background = '';
		pulse.style.animationPlayState = '';
		playAgain.style.opacity = '';
		youPicked[play].style.opacity = '';
		
		for (var e of icon) {
			e.classList.remove('chosen','hidden','computer');
		}
	});	
}



	