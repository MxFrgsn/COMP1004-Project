var expectedResults = ["Farm", "Cheese", "Apple", "Character", "Planet", "Godfrey", "Orange", "Story", "Animated", "User", "Empty", "Still", "Water", "Grapes", "Fill", "When", "Why", "Worry", "Sad", "Pensive", "Because", "Intuition", "Pattern", "Recognition",
"Oval", "Square", "Paper", "Developer", "Controls", "Button", "Listener", "String", "Data", "Explained", "Error", "Means", "Exist", "Queue", "Event", "Object", "Exuberant", "Terrified", "Grief", "Morning", "Sunny", "Rain", "Vigorously",
"Rich", "Abundant", "Lush", "Lubricant", "Average", "Mode", "Mind", "Direction", "Rock", "Cartoon", "Stories", "Protagonist", "Anti-Hero", "Robot", "Drone", "King", "History", "Exiled", "Death", "Tortured", "Soul", "Religion",
"Eagle", "Black", "Blue", "Pigeon", "Parrot", "Extraordinary", "Powerful", "Earth", "Air", "Fire", "Water", "Avatar", "Lazy", "Brilliant", "Genius", "Gas", "Parliament", "Government", "Decree", "Judge", "Jury", "Execute", "Program",
"Algorithm", "Strong", "Timid", "Assembly", "Require", "Spontaneous", "Tore", "Rip", "Schedule", "Often", "Occasionally", "Always", "Never", "Cow", "Animal", "Dog", "Sheep", "Banana", "Rarely", "However", "Oil", "Defined", "Variable"];
 
let paragraph = document.createElement("p");
var completedWords = 0;
var timerInterval;
var startTime;
var interval;

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
		completedWords++;
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

function timer()
{
	let currentTime = new Date();
    let timePassed = currentTime - startTime;

    if (timePassed >= 60000) { // 60000 milliseconds = 60 seconds
      console.log("60 seconds have passed!"); //changes this so it updates nicely on screen
	  clearInterval(timerInterval);
      calculateWPM()
    } else {
      console.log("Not yet 60 seconds");
    }
}
function calculateWPM()
{
	var WPM = completedWords;
	console.log("You have a",WPM," WPM") //changes this so it updates nicely on screen	
}

function checkIfEmpty()
{
	let inputBox = document.getElementById("inputBox").value;
	if (inputBox != "")
	{
	//const minuteTimer = setTimeout(timerCallback, 60000);
	startTime = new Date();
	timerInterval = setInterval(timer, 1000);
	clearInterval(interval);
	}
}
function timerCallback()
{
	console.log("End of Timer");
}


displayExpectedResults();
interval = setInterval(checkIfEmpty, 1000);
 