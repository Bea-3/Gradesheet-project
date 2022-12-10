/*
Program: External JS Demo
Date: 10th Dec, 2022
Author: Beatrice Pepple
*/

function gradeChecker(score){
	var message = ''; //this is a local variable for this function
	
	if(score <40){
		message = 'F'
	}else if(score >=40 && score <45){
		message = 'E'
	}else if(score >=45 && score <50){
		message = 'D'
	}else if(score >=50 && score <60){
		message = 'C'
	}else if(score >=60 && score <=69){
		message = 'B'
	}else if(score >=70 && score <=100){
		message = 'A'
	}else{
		message = 'Input Valid Score '
	}
	return message;
}

//onclick function for the button Get result
function getResult(scoreEng,scoreMath,scoreChem,scoreBio,scoreFre){
	var _total = Number(scoreEng) + Number(scoreMath) + Number(scoreChem) + Number(scoreBio) + Number(scoreFre)
	return _total
}
function average(){
	var scoreEng = document.getElementById('subEng').value
	var scoreMath = document.getElementById('subMath').value
	var scoreChem = document.getElementById('subChem').value
	var scoreBio = document.getElementById('subBio').value
	var scoreFre = document.getElementById('subFre').value
	
	var avg = getResult(scoreEng,scoreMath,scoreChem,scoreBio,scoreFre) / 5;
	return avg
}