var list = ["Farm", "Cheese", "Apple", "Character", "Planet", "Godfrey", "Orange", "Story", "Schelude", "Often",
 "Ocassionally", "Always", "Never", "Cow", "Animal", "Dog", "Sheep", "Banana", "Rarely", "However", "Oil", "Defined", "Variable"];
 
//colorPicker.addEventListener("input", updateFirst, false);

function validateForm() {
  let inputbox = document.getElementById("inputbox").value;
  
  for (var i = 0; i<list.length;i++)
  {
	if (inputbox == list[i])
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