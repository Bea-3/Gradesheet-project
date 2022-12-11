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
		message = 'Input Valid Score'
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

function remarks(){
	var avg = average()
	var message = '' //this local variable just for remarks
	
	if(avg >=80 && avg <=100){
		message = 'Excellent!';
		document.getElementById('imgremark').innerHTML ='<object data="images/amazing.jpg" height="230px"></object>'
	}else if(avg >=70 && avg <80){
		message = 'Well done!';
		document.getElementById('imgremark').innerHTML = '<object data="images/applause.gif" height="230px"></object>'
	}else if(avg >=60 && avg <70){
		message = 'Good job!';
		document.getElementById('imgremark').innerHTML ='<object data="images/thumbs.gif" height="230px"></object>'
	}else if(avg >=50 && avg <60){
		message = 'Passed, But you can do better!';
		document.getElementById('imgremark').innerHTML ='<object data="images/cando.gif" height="230px"></object>'
	}else if(avg == ''){
		message = 'Invalid! You have not input a value'
		document.getElementById('imgremark').innerHTML ='<object data="images/invalid.gif" height="230px"></object>'
	}else if(avg){
		message = 'Failed! Try Harder Next Time'
		document.getElementById('imgremark').innerHTML ='<object data="images/sad.gif" height="230px"></object>'
	}else{
		message = 'Please check that you have input a valid score'
		document.getElementById('imgremark').innerHTML ='<object data="images/error.jpg" height="230px"></object>'
	}
	return message
}

//'<iframe src="https://giphy.com/embed/3o6Mbnm7WMv7O6yj5K" height="230px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'