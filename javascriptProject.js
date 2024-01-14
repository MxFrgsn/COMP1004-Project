var expectedResults = ["Farm", "Cheese", "Apple", "Character", "Planet", "Godfrey", "Orange", "Story", "Animated", "User", "Empty", "Still", "Water", "Grapes", "Fill", "When", "Why", "Worry", "Sad", "Pensive", "Because", "Intuition", "Pattern", "Recognition",
"Oval", "Square", "Paper", "Developer", "Controls", "Button", "Listener", "String", "Data", "Explained", "Error", "Means", "Exist", "Queue", "Event", "Object", "Exuberant", "Terrified", "Grief", "Morning", "Sunny", "Rain", "Vigorously",
"Rich", "Abundant", "Lush", "Lubricant", "Average", "Mode", "Mind", "Direction", "Rock", "Cartoon", "Stories", "Protagonist", "Anti-Hero", "Robot", "Drone", "King", "History", "Exiled", "Death", "Tortured", "Soul", "Religion",
"Eagle", "Black", "Blue", "Pigeon", "Parrot", "Extraordinary", "Powerful", "Earth", "Air", "Fire", "Water", "Avatar", "Lazy", "Brilliant", "Genius", "Gas", "Parliament", "Government", "Decree", "Judge", "Jury", "Execute", "Program",
"Algorithm", "Strong", "Timid", "Assembly", "Require", "Spontaneous", "Tore", "Rip", "Schedule", "Often", "Occasionally", "Always", "Never", "Cow", "Animal", "Dog", "Sheep", "Banana", "Rarely", "However", "Oil", "Defined", "Variable"];
 
let paragraph = document.createElement("p");
//colorPicker.addEventListener("input", updateFirst, false);

function displayExpectedResults()
{
	let arrayDisplayElement = document.getElementById("displayArray");
	for (var i = 0; i< expectedResults.length; i++)
	{
        paragraph.textContent += expectedResults[i] + " ";
	}
	arrayDisplayElement.appendChild(paragraph);
}
function validateForm() {
  event.preventDefault(); 
  let inputBox = document.getElementById("inputBox").value;
  
	if (inputBox == expectedResults[0])
	{
		expectedResults.shift(); // want it to glow green when true + remove it from the list on the html doc
		paragraph.innerHTML = "";
		displayExpectedResults();
		inputBox.className = "input.green";
	}
	else
	{
		inputBox.className = "input.red";
	}
  }
displayExpectedResults();
 // can input validation for every single letter entered and show it ont he green?