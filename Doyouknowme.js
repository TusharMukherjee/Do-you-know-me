//installing chalk

const chalk = require('chalk');
const log = console.log;

//installing readlineSync

var readlineSync=require('readline-sync');

console.log(chalk.red.bold('Welcome to the ' + chalk.blue.underline.bold('My Quiz')));

log(chalk.blue.bold('---------------------------------\n'));



//Signing UP

log(chalk.black.bgHex("#add8e6").bold('Enter Your Name \n'));

var userName = readlineSync.question(chalk.hex('#FFFF00').bgBlue('Name:') + (' '));

log(chalk.hex('#FFFF00').bold('\nHello! ') + chalk.redBright.bold(userName));
 
//Welcoming


log(chalk.bgRedBright(`\nAnswer my 3 questions to know how much do you know me ;P`));



log(chalk.blue("------------------------------------"));

var score = 0;

function play(question,answer){
log('\n')
var cAnswer=readlineSync.question(question);

if(cAnswer.toLowerCase()==answer){

  log('\nYou got me ' + chalk.yellowBright.bold("MATE!"));

  score = score + 1;
  log('Your current score my friend is: '+chalk.black.bgGreenBright.bold(score));
  log('----------------------------------------------');
}


else{

log('Sorry it is ' + chalk.red.bold("Wrong"));
log('Your current score my friend is: '+chalk.black.bgGreenBright.bold(score));
    
    }

}


var quesArr = [{
  question: 'My favourite Sport?\n',
  answer: 'football'
},
{
  question:'Do i like to go college?\n',
  answer: 'no'
},
{
  question: `Which one do I like
             Land, Mountains, Costal?\n`,
  answer: 'mountains'
}];

for(var i = 0; i < quesArr.length; i++){

  var nQuestion = quesArr[i];
  play(nQuestion.question, nQuestion.answer);
}

if(score==3){
  log(chalk.yellowBright.bold("Conrats you know me 100%"));
}
else if(score==2){
  log(chalk.blueBright.bold("Mate it is 66%"));
}
else{
  log(chalk.redBright.bold("You still don't know me ;D"));
}