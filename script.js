//define variables//
var yes = 0;
var no = 0
var questionCount = 0;
var result = document.getElementById("result");

var restart_button = document.getElementById("Restart");


var q1a1 = document.getElementById("q1a1");


var q1a2 = document.getElementById("q1a2");


var q2a1 = document.getElementById("q2a1");


var q2a2 = document.getElementById("q2a2");


var q3a1 = document.getElementById("q3a1");


var q3a2 = document.getElementById("q3a2");





// //event listeners//

q1a1.addEventListener("click", yesCount);

q1a2.addEventListener("click", noCount);

q2a1.addEventListener("click", yesCount);

q2a2.addEventListener("click", noCount);

q3a1.addEventListener("click", yesCount);

q3a2.addEventListener("click", noCount);



//restart_button.addEventListener("click", updateResult);


//functions, defined//

function yesCount() {
  yes += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "yes" + yes);

  if (questionCount == 3) {
      console.log("quiz completed")
    updateResult();
  }
}

function noCount() {
  no += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount +  "no=" + no);

  if (questionCount == 3) {
      console.log("quiz completed")  
    updateResult();
  }
}



// if then //

function updateResult() {
  if (yes >= 2) {
    result.innerHTML = "You can access a legal abortion"
    console.log("You can access a legal abortion")
    }
  else if (no >= 2) {
    result.innerHTML = "You cannot access a legal abortion"
    console.log("You cannot access a legal abortion")
  }
}


