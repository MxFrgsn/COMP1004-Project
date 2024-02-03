var word_bank= ["Farm", "Cheese", "Apple", "Character", "Planet", "Godfrey", "Orange", "Story", "Animated", "User", "Empty", "Still", "Grapes", "Fill", 
"Worry", "Sad", "Pensive", "Because", "Intuition", "Pattern", "Recognition","Oval", "Square", "Paper", "Developer", "Controls", "Button", "Listener", "String", "Data", "Explained",
 "Error", "Means", "Exist", "Queue", "Event", "Object", "Exuberant", "Terrified", "Grief", "Morning", "Sunny", "Rain", "Vigorously",
"Rich", "Abundant", "Lush", "Lubricant", "Average", "Mode", "Mind", "Direction", "Rock", "Cartoon", "Stories", "Protagonist", "Anti-Hero", "Robot", "Drone", "King", "History", 
"Exiled", "Death", "Tortured", "Soul", "Religion","Eagle", "Black", "Blue", "Pigeon", "Parrot", "Extraordinary", "Powerful", "Earth", "Air", "Fire","Water", "Avatar","Prophet","Lazy",
 "Brilliant", "Genius", "Gas", "Parliament", "Government", "Decree", "Judge", "Jury", "Execute", "Program","Algorithm", "Strong", "Timid", 
"Assembly", "Require", "Spontaneous", "Tore", "Rip", "Schedule", "Often", "Occasionally", "Always", "Never", "Cow", "Animal", "Dog", "Sheep", "Banana", "Rarely", "However", "Oil", 
"Defined", "Variable","Sky", "Mountain", "Wind", "Festival", "Whisper", "Invisible", "Reveal", "Vision", "Silence", "Embrace", "Quest", "Journey", "Dance", "Harmony",
"Sculpture", "Canvas", "Masterpiece", "Timeless", "Immortal","Doctor","Cat","Tardis","Chamber","Echo", "Bat","Night","Moonlight","Fireflies","Illuminate", "Leaves","Wisdom",
 "Shadow", "Enigma", "Mystery", "Ripple", "Serenity", "Astonish", "Puzzle", "Infinite","Photosynthesis","God","Plant","Bandit","Thug","Horse",
"Forgotten","Lonely", "Gentle", "Symphony", "Symmetry", "Asymmetry",  "Celestial", "Wonder", "Eternal", "Once", "Flourish", "Degragation", "Divergent", "Astel", "Catalyst", 
"Surrender", "Capitulate", "Radiant", "Nebula", "Luminous", "Orbit", "Fusion", "Essence", "Majestic", "Resonate", "Traverse", "Crest", "Lunar", "Solar", "Galaxy", "Blossom", "Quench",
"Ambient",  "Velvet", "Exquisite", "Whirlwind", "Abyss", "Reverie", "Enchant", "Cascade", "Melody", "Ethereal", "Spectacle",
"Unveil", "Infinity", "Catharsis", "Arthritis", "Bone", "Undead", "Lich", "Dragon", "Greater", "Zombie","Apocalypse","Paradox",  "Labyrinth", 
"Phenomenon","Solitude", "Serene", "Tranquil","Emperor","Ironic","Enigmatic", "Utopia", "Vivid", "Pandemonium", "Chaos", "Fragile",
"Arcane", "Divergence", "Eclipse", "Radiance", "Glimmer","Bow","Adore","Pink","Princess",  "Lustrous", "Pantheon", "Vortex", "Juxtapose", "Epiphany", "Harbinger", "Is",
"The", "Why", "You", "Who", "What", "Where", "When", "How", "Then", "Than", "Happy", "Depressed", "Dinosaur", "Common", "Uncommon", "Legendary", "Rare", "Exotic", "If", "I",
 "Are", "I'm", "Good", "Bad", "That", "Will", "Be", "Going", "Now", "Okay", "End", "Beginning", "Narrative", "Games", "Manga", "Anime", "Slime", "Isekai", "Books", "Movies", "Mouse", 
 "Keyboard", "Laptop", "Cable", "Wire", "Vector", "Parallel", "Line", "Drawing", "Drew", "Fan", "Gone", "Baked", "Walked", "Walking", "Music", "Smiling", "Likes", "Hates",
 "Love", "Too", "Late", "To", "Smitten", "Her", "They", "Them", "Him", "She", "Her", "Fiction", "Non-fiction", "Early", "Let", "Go","Grimoire","Elves","Dwarves","Humans","Induction",
 "Electrical","Lighting","Yard","Couch","Desk","Chair","Baby","Parent"]
 
var written_characteres = 0;
let paragraph = document.createElement("p");
var timer_started = false;
var time = 60000; // 60000 milliseconds = 60 seconds
let time_Passed = 0
var WPM = 0; 

function displayWords() // Displays expected inputs on website, removing previously correct input
{
	document.getElementById("inputBox").value = ""
	let word_bank_html = document.getElementById("displayWordBank");
	let max_Height = 300;
    let current_Height = 0;
	var i = 0;
	while (current_Height < max_Height && i < word_bank.length)
	{
		paragraph.textContent += word_bank[i] + " ";
		word_bank_html.innerHTML = paragraph.textContent;
		current_Height = word_bank_html.offsetHeight;
		i++;
	}
}

function randomiseArray() // Durstenfeld shuffle, psuedo-randomises the array
{
	for (var currentIndex = 0; currentIndex < word_bank.length; currentIndex++) 
	{
        var randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        var temp = word_bank[currentIndex];
        word_bank[currentIndex] = word_bank[randomIndex];
        word_bank[randomIndex] = temp;
    }
}

function validateInputBox() //Checks if input box has been written in, if so, starts time and checks if inputted value is correct
{
	if (timer_started == false && document.getElementById("inputBox").value !="")
	{
		timer_started = true;
		start_Time = new Date();
		timer_Interval = setInterval(timer, 950);
	}
	if (document.getElementById("inputBox").value == word_bank[0])
	{
		written_characteres+=word_bank[0].length;
		word_bank.shift();
		paragraph.innerHTML = "";
		displayWords();
	}
 }
 
function timer() //Checks the amount of time that has passed
{
	let current_Time = new Date();
    time_Passed = current_Time - start_Time;
	console.log(time_Passed);
    if (time_Passed >= time)
	{ 
	  clearInterval(timer_Interval);
      calculateWPM();
	  main();
    } 	
	updateTimerUI(time_Passed);
}

function updateTimerUI(time_Passed) // Formats amount of time passed onto website
{
	let timer_HTML = document.getElementById("timer");
	let totalSeconds = Math.floor(time_Passed / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let formattedTime = " ‎ ‎ "+ minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " ‎ ‎ ‎";
    timer_HTML.innerHTML = formattedTime; 
}

//Should I also display accuracy percentage?
function calculateWPM() //Calculates WPM, which is to be displayed to the user
{	
	WPM = (written_characteres/5)/(time/60000);
	updateWpmUI(WPM); 
}

function updateWpmUI(WPM)
{
	let wpm_HTML = document.getElementById("WordsPerMinutes");
	let formattedWPM = "WPM: " + WPM;
 	wpm_HTML.innerHTML = formattedWPM;
}

function validateTimerOptions() // Enables changing of length of typing test (by default its 60s long)
{
	var timerOptions = [30,60,90]
	for(var i= 0; i < timerOptions.length; i++)
	{
		if (document.getElementById(timerOptions[i]).checked)
		{
			time = timerOptions[i] * 1000
		}
	}
}

function main() // Start of typing test
{
document.getElementById("inputBox").value="";
timer_started = false;
var start_Time = 0;
var timer_Interval;
updateTimerUI(time_Passed);
updateWpmUI(WPM);
randomiseArray();
paragraph.innerHTML = "";
displayWords();
}

main();

