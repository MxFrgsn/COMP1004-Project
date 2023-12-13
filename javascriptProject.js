var words1 = ["Farm", "Cheese", "Apple", "Character", "Planet", "Godfrey", "Orange", "Story", "Schelude", "Often",
 "Ocassionally", "Always", "Never", "Cow", "Animal", "Dog", "Sheep", "Banana", "Rarely", "However", "Oil", "Defined", "Variable"];
 
function validateForm() {
  let x = document.getElementById("inputbox").value;
  
  for (var i = 0; i<words1.length;i++)
  {
	if (x == words1[i])
	{
		alert("Correct!");
		return true;
	}
	else
	{
		alert("Please enter word in array: ");
		return false;
	}
  }
}