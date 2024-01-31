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
var time = 5000; // 60000 milliseconds = 60 seconds

function displayWords() // Displays expected inputs on website, removing previously correct input
{
	document.getElementById("inputBox").value = ""
	let word_bank_html = document.getElementById("displayWordBank");
	word_bank_html.style.fontWeight = "bold";
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
function submitForm() //Sumbits inputted word automatically
{
	if (validateForm()) 
	{
     document.getElementById('submit').submit();
    }
}
function validateForm() //Checks if input box has been written in, if so, starts time and checks if inputted value is correct
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
    let time_Passed = current_Time - start_Time;
	let timer_HTML = document.getElementById("timer");
    if (time_Passed >= time)
	{ 
	  clearInterval(timer_Interval);
      calculateWPM();
	  main();
    } 	
	updateTimerUI(time_Passed,timer_HTML);
}

function updateTimerUI(time_Passed,timer_HTML) // Formats amount of time passed onto website
{
	let totalSeconds = Math.floor(time_Passed / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let formattedTime = " ‎ ‎ "+ minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " ‎ ‎ ‎";
    timer_HTML.innerHTML = formattedTime; // while this works, need to realign for cleaner UI, same with WPM
}

//Should I also display accuracy percentage?
function calculateWPM() //Calculates WPM, which is to be displayed to the user
{	
	var WPM = (written_characteres/5)/(time/60000);
	let wpm_HTML = document.getElementById("WordsPerMinute");
	updateWpmUI(WPM,wpm_HTML); 
}

function updateWpmUI(WPM,wpm_HTML)
{
	let formattedWPM = "WPM: " + WPM 
 	wpm_HTML.innerHTML = formattedWPM;
}

function main() // Start of typing test
{
document.getElementById("inputBox").value="";
timer_started = false;
var timer_Interval;
var start_Time;
randomiseArray();
paragraph.innerHTML = "";
displayWords();
}

main();
document.getElementById('submit').addEventListener('submit', submitForm())
