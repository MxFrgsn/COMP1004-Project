var expected_Inputs = ["Farm", "Cheese", "Apple", "Character", "Planet", "Godfrey", "Orange", "Story", "Animated", "User", "Empty", "Still", "Water", "Grapes", "Fill", "When", "Why", 
"Worry", "Sad", "Pensive", "Because", "Intuition", "Pattern", "Recognition","Oval", "Square", "Paper", "Developer", "Controls", "Button", "Listener", "String", "Data", "Explained",
 "Error", "Means", "Exist", "Queue", "Event", "Object", "Exuberant", "Terrified", "Grief", "Morning", "Sunny", "Rain", "Vigorously",
"Rich", "Abundant", "Lush", "Lubricant", "Average", "Mode", "Mind", "Direction", "Rock", "Cartoon", "Stories", "Protagonist", "Anti-Hero", "Robot", "Drone", "King", "History", 
"Exiled", "Death", "Tortured", "Soul", "Religion","Eagle", "Black", "Blue", "Pigeon", "Parrot", "Extraordinary", "Powerful", "Earth", "Air", "Fire"];
var back_up= ["Water", "Avatar","Prophet","Lazy", "Brilliant", "Genius", "Gas", "Parliament", "Government", "Decree", "Judge", "Jury", "Execute", "Program","Algorithm", "Strong", "Timid", 
"Assembly", "Require", "Spontaneous", "Tore", "Rip", "Schedule", "Often", "Occasionally", "Always", "Never", "Cow", "Animal", "Dog", "Sheep", "Banana", "Rarely", "However", "Oil", 
"Defined", "Variable","Sky", "Mountain", "Wind", "Fiction", "Festival", "Whisper", "Invisible", "Reveal", "Vision", "Silence", "Embrace", "Quest", "Journey", "Dance", "Harmony",
"Sculpture", "Canvas", "Masterpiece", "Timeless", "Immortal","Doctor","Cat","Tardis","Chamber","Echo", "Bat","Night","Moonlight","Fireflies","Illuminate", "Leaves","Wisdom",
 "Shadow", "Enigma", "Mystery", "Ripple", "Serenity", "Astonish", "Puzzle", "Infinite","Photosynthesis","God","Plant","Bandit","Thug","Horse",
"Forgotten","Lonely", "Gentle", "Symphony", "Symmetry", "Assymetry",  "Celestial", "Wonder", "Eternal", "Once", "Flourish", "Degragation", "Divergent", "Astel", "Catalyst", 
"Surrender", "Capitulate", "Radiant", "Nebula", "Luminous", "Orbit", "Fusion", "Essence", "Majestic", "Resonate", "Traverse", "Crest", "Lunar", "Solar", "Galaxy", "Blossom", "Quench",
"Ambient",  "Velvet", "Exquisite", "Whirlwind", "Abyss", "Reverie", "Enchant", "Cascade", "Melody", "Ethereal", "Illuminate", "Whisper", "Spectacle",
"Unveil", "Infinity", "Catharsis", "Arthritis", "Bone", "Undead", "Lich", "Dragon", "Greater","Death", "Zombie","Apocalypse","Paradox",  "Labyrinth", 
"Phenomenon","Solitude", "Serene", "Tranquil", "King","Emperor","Ironic","Enigmatic", "Utopia", "Vivid", "Pandemonium", "Chaos", "Fragile",
"Arcane", "Divergence", "Eclipse", "Radiance", "Glimmer","Bow","Adore","Pink","Princess","Celestial",  "Lustrous", "Pantheon", "Vortex", "Juxtapose", "Epiphany", "Harbinger"]
var completed_Words = 0;
var timer_Interval;
var start_Time;
var interval;
let paragraph = document.createElement("p");

function displayExpectedInputs() // Displays expected inputs on website, removing previously correct input
{
	document.getElementById("inputBox").value = ""
	let arrayDisplayElement = document.getElementById("displayArray");
	arrayDisplayElement.style.fontWeight = "bold";
	for (var i = 0; i< expected_Inputs.length; i++)
	{
        paragraph.textContent += expected_Inputs[i] + " ";
	}
	arrayDisplayElement.appendChild(paragraph);
}

function randomiseArray(array) // Durstenfeld shuffle, psuedo-randomises the array
{
	for (var currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
        var randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        var temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
}
//Might change it so its sumbitted automatically if correct instead of requiring pressing enter.
function validateForm() //Checks if value within inputbox is correct value, this is called on sumbit currently. 
{
  event.preventDefault(); 
	if (document.getElementById("inputBox").value == expected_Inputs[0])
	{
		completed_Words++;
		expected_Inputs.shift();
		if (calculateHeight() <= 287 || completed_Words%2!=0) 
		// want to find a better solution to ensure clean UI is maintained + to ensure that the same words dont appear at the start every time
		{
		expected_Inputs.push(back_up[back_up.length - 1]);
		back_up.pop();
		}
		paragraph.innerHTML = "";
		displayExpectedInputs();
	}
  }
  
function calculateHeight()  //Used to get the height of the div in HTML to maintain a clean UI
{ 
  let arrayDisplayElement = document.getElementById("displayArray");
  let height = arrayDisplayElement.offsetHeight;
  return height;
}

function timer() //Checks the amount of time that has passed and formatts it to be displayed on the website
{
	let current_Time = new Date();
    let time_Passed = current_Time - start_Time;
	let timerHTML = document.getElementById("timer");

    if (time_Passed >= 10000) { // 60000 milliseconds = 60 seconds
	  clearInterval(timer_Interval);
      calculateWPM();
	  main();
    } 	
	let totalSeconds = Math.floor(time_Passed / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
	
    let formattedTime = " ‎ ‎ "+minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " ‎ ‎ ‎";
    timerHTML.textContent = formattedTime; // while this works, need to realign for cleaner UI
}
//Should I also display accuracy percentage?
function calculateWPM() //Calculates WPM, which is to be displayed to the user
{
	var WPM = completed_Words;
	console.log("You have a",WPM,"WPM") //changes this so it updates nicely on screen	
} // will also have to change calculation for different times!

function checkIfInputBoxEmpty() //Checks if inputbox is empty, if its not that means test has started and starts the timer.
{
	let inputBox = document.getElementById("inputBox").value;
	if (inputBox != "")
	{
	start_Time = new Date();
	clearInterval(interval);
	timer_Interval = setInterval(timer, 950);
	}
}


function main() // Start of typing test
{
randomiseArray(expected_Inputs);
randomiseArray(back_up);
paragraph.innerHTML = "";
displayExpectedInputs();
//Every 0.1 seconds, checks if inputbox is empty
interval = setInterval(checkIfInputBoxEmpty, 100);
}

main();

