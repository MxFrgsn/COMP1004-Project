var word_bank= ["farm", "cheese", "apple", "character", "planet", "godfrey", "orange", "story", "animated", "user", "empty", "still", "grapes", "fill", 
"worry", "sad", "pensive", "because", "intuition", "pattern", "recognition","oval", "square", "paper", "developer", "controls", "button", "listener", "string", "data", "explained",
 "error", "means", "exist", "queue", "Event", "Object", "Exuberant", "Terrified", "Grief", "Morning", "Sunny", "Rain", "Vigorously",
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
"The", "Why", "You", "Who", "What", "Where", "When", "How", "Then", "Than", "Happy", "Depressed", "Dinosaur", "Common", "Uncommon", "Legendary", "Rare", "Exotic", "If",
 "Are", "Good", "Bad", "That", "Will", "Be", "Going", "Now", "Okay", "End", "Beginning", "Narrative", "Games", "Manga", "Anime", "Slime", "Isekai", "Books", "Movies", "Mouse", 
 "Keyboard", "Laptop", "Cable", "Wire", "Vector", "Parallel", "Line", "Drawing", "Drew", "Fan", "Gone", "Baked", "Walked", "Walking", "Music", "Smiling", "Likes", "Hates",
 "love", "too", "late", "to", "Smitten", "Her", "They", "Them", "Him", "She", "Her", "Fiction", "Non-fiction", "Early", "Let", "Go","Grimoire","Elves","Dwarves","Humans","Induction",
 "electrical","lighting","yard","couch","desk","chair","baby","arent"]
 //Ensures it's all lowercase
 for(var i = 0; i < word_bank.length; i++)
			{
			word_bank[i] = word_bank[i].toLowerCase();
			} 
var written_characters = 0;
var timer_started = false;
var time = 60000; // 60000 milliseconds = 60 seconds
let time_Passed = 0
var WPM = 0; 
let word_bank_span = document.querySelector("#displayWordBank p");

function displayWords() // Displays expected inputs on website, removing previously correct input
{
	document.getElementById("inputBox").value = ""
	let max_Height = 300;
    let current_Height = 0;
	var i = 0;
	while (current_Height < max_Height && i < word_bank.length)
	{
		var string = word_bank[i]
		for (var j = 0; j<string.length;j++)
		{
			var span_word = document.createElement("span");
			span_word.textContent = string[j];
			word_bank_span.appendChild(span_word);
		}
		var span_space = document.createElement("span")
		span_space.textContent = " ";
		word_bank_span.appendChild(span_space);
		current_Height = word_bank_span	.offsetHeight;
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
	var input_value = document.getElementById("inputBox").value;
	document.querySelectorAll("#displayWordBank p span").forEach(span => {span.style.color="white";});
	for (var i = 0; i< input_value.length;i++)
	{
		if(input_value[i] == word_bank_span.textContent[i])
		{
			var temp = document.querySelector("#displayWordBank p span:nth-child("+(i+1)+")");
			temp.style.color = "green";
		}
		else
		{
			var temp = document.querySelector("#displayWordBank p span:nth-child("+(i+1)+")");
			temp.style.color = "red";
		}
			
	}
	const last_letter_typed = input_value[input_value.length - 1];
	if (last_letter_typed == " ")
	{
		const first_word = input_value.split(" ")[0];
		if (first_word == word_bank_span.textContent.split(" ")[0])
		{
			document.getElementById("inputBox").value = "";
			written_characters += word_bank[0].length;
			word_bank.shift();
			word_bank_span.innerHTML = "";
			displayWords();
		}
    }
 }
 
function timer() //Checks the amount of time that has passed
{
	let current_Time = new Date();
    time_Passed = current_Time - start_Time;
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
	WPM = (written_characters/5)/(time/60000);
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
	var timerOptions = [30,60,90,120]
	for(var i= 0; i < timerOptions.length; i++)
	{
		if (document.getElementById(timerOptions[i]).checked)
		{
			time = timerOptions[i] * 1000
		}
	}
}

function validateDifficultyOptions()
{
	var difficultyOptions = ["Punctuation" ,"Capitalization","Paragraphs"]
	for(var i= 0; i < difficultyOptions.length; i++)
	{
		if (document.getElementById(difficultyOptions[i]).checked)
		{  
			console.log(difficultyOptions[i]);
			GenerateDifficultyOptions(difficultyOptions[i]);
		}
	}
	//continue here, do new flowchart and ulm diagram, show red if incorrect show green if correct in display words bank
}

function GenerateDifficultyOptions(difficultyOptions) //using checkboxes, lets say i picked Punctuation, and afterwards i picked capitalisation, would it see punctuation is ticked and attempt to reapply it?
{
		if(difficultyOptions == "Punctuation")
		{
			const possiblePunctuation ="-,.;:'";
			for(var i = 0; i < word_bank.length; i++) //not working
			{
			word_bank[i].concat(Math.floor(Math.random()*possiblePunctuation.length));
			} 
		}
		else if (difficultyOptions == "Capitalization") //not working
		{
			for(var i = 0; i < word_bank.length; i++)
			{
				if (word_bank[i].length>1)
				{
					word_bank[i] = word_bank[i].charAt(0).toUpperCase()+word_bank.slice(1);
				}
				else
				{
					word_bank[i] = word_bank[i].charAt(0).toUpperCase();
				}
			console.log(word_bank[i]);
			}
		}
		else if (difficultyOptions == "Paragraphs")
		{
			console.log("not finished");
		}
	//use this to generate a list of words/capitalised words or paragraphs dependind on difficulty options
	displayWords();
}
//use this to generate words and edit it???
function makeWord(wordMax) {
let text = '';
const possibleLetters='bcdfghjklmnpqrstvwxyz';
const possibleVowels='aeiou';

  for(let i=0; i<wordMax; i=i+3)
  {
    text += possibleLetters[Math.floor(Math.random()*possible.length)];
    text += possibleVowels[Math.floor(Math.random()*possibleVowels.length)];
    text += possibleLetters[Math.floor(Math.random()*possible.length)];
  }
console.log(text);
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
displayWords();
}

main();

