//takes in the inqurie Node package 
var k = 0;


console.log("press '?'  or 'new' to begin" + "\n");
console.log("? begins the quiz | new allows you to create a new flashcard");
var inquirer = require("inquirer");
var file = require('fs');

var cardArray = [];
//trivia card constructor
function TriviaCard(question, responce, cardNum){
	this.question = question;
	this.responce = responce;
	this.cardNum = cardNum;
	this.ask = function(){
		inquirer.prompt([

  						{name: "question",
    					message: this.question + '\n'}

						]).then(function(answers) {
							console.log('-------------------------');
							if (question.answer === this.responce){
								console.log("Correct!");
								user.score++;
								console.log("your score is: " + user.score);
								k++;
								}
							else {
								console.log("incorrect, try again");
								user.score--;
								console.log("your score is: " + user.score);
								k = 0;
							}
//SOMETHING WENT WRONG WITH THE ANSWERS, IT NO LONGER RECOGNIZES INCORRECT RESPONCES
		});
	}
}	
var user = {
	score:0,
}

var card1 = new TriviaCard("Who's the best developer?", "tim", 1);
var card2 = new TriviaCard("What does S.T.I.G stand for?", "secure technical information guidelines", 2);
var card3 = new TriviaCard("which is better a CASP or a Security+?", "CASP", 3);
var card4 = new TriviaCard("what state is Ft. Huachuca in?", "Arizona", 4);
var card5 = new TriviaCard("8 * 2 = ", "16", 5);



cardArray.push(card1, card2, card3, card4, card5);
for (var i = 0; i < cardArray.length; i++) {
	file.appendFile("questionLogFile.txt", cardArray[i].question + "_" + cardArray[i].responce + " | ", function(err){
		}); 
}

// console.log(cardArray);

if (process.argv[2] === 'new') {
	console.log("use the following format: Question, Answer, questionNumber");
	var userQuestion =  process.argv[2];
	var userQuestionAnswer =  process.argv[3];
	var userQuestionNumber = process.argv[4];
	var userCard = new TriviaCard(user, userQuestionAnswer, userQuestionNumber );
	cardArray.push(userCard);
}

//ask questions function

if (process.argv[2] === "?") {
	askQuestions();
}
//all the questions are runnign at once, check the recursive examples from class

function askQuestions(){
	console.log("starting questions, get them correct to move on, else start over");
		//k = 0;
		cardArray[k].ask();
//this is only asking the first question
}



