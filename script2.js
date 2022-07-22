//generate email//

var displayName = document.getElementById("generate");
var button = document.getElementById("myButton");

button.addEventListener("click", displayGenerate);

function displayGenerate(){
  var text= document.getElementById("myText").value;
  displayName.innerHTML= "Dear " + text + ", I am writing to you as citizen of the United States, as I am concerned about abortion rights in your state, which are now at risk of being banned at will. Without action led by yourself, those in your state are at risk of losing reproductive freedoms. I ask that you veto any legislation that restricts receival of a safe abortion or prohibit access to abortion medications. Your advocacy and support for reproductive rights is critical to the well being of more than just women throughout the state, and I hope that you will carry through for the state by making the right decision in backing safe, legal abortions and a woman's right to privacy and choice. Thank you."
  
}
