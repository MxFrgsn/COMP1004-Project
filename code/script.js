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
 "electrical","lighting","yard","couch","desk","chair","baby"]
 //Ensures it's all lowercase, if can make it all lowercase using chatgpt, this wont be needed
for (var i = 0; i < word_bank.length; i++) {
  word_bank[i] = word_bank[i].toLowerCase();
}
var written_characters = 0;
var timer_started = false;
var time = 60000; // 60000 milliseconds = 60 seconds
let time_passed = 0;
var WPM = 0;
let word_bank_span = document.querySelector("#displayWordBank p");
let chars_Correct = 0;
let words_Correct = 0;


function displayWords() {
  // Displays expected inputs on website, removing previously correct input
  document.getElementById("inputBox").value = "";
  let max_height = 200;
  let current_height = 0;
  var i = 0;
  while (i < word_bank.length && current_height < max_height) {
    var string = word_bank[i];
    for (var j = 0; j < string.length; j++) {
      var span_word = document.createElement("span");
      span_word.textContent = string[j];
      word_bank_span.appendChild(span_word);
    }
    var span_space = document.createElement("span");
    span_space.textContent = " ";
    word_bank_span.appendChild(span_space);
    current_height = word_bank_span.offsetHeight;
    if (current_height >= max_height) {
      for (var j = 0; j < string.length; j++) {
        let last_word = word_bank_span.lastChild.previousSibling;
        last_word.remove();
      }
    }
    i++;
  }
}

function validateInputBox() {
  //Checks if input box has been written in, if so, starts time and checks if inputted value is correct
  var input_value = document.getElementById("inputBox").value;
  if (timer_started == false && input_value != "") {
    timer_started = true;
    start_time = new Date();
    timer_interval = setInterval(timer, 950);
  }
  styleWordBank(input_value);
  const last_letter_typed = input_value[input_value.length - 1];
  if (last_letter_typed == " ") {
    const word = input_value.split(" ")[0];
    if (word == word_bank_span.textContent.split(" ")[words_Correct]) {
      chars_Correct += input_value.length;
      words_Correct++;
      checkEndOfLine();
      document.getElementById("inputBox").value = "";
      written_characters += word_bank[words_Correct].length+1; // Add one to include spaces
    }
  }
}
//Checks whether we are at the end of the line, if so, removes the line and redisplays words
function checkEndOfLine() {
  /** @type {HTMLSpanElement} */
  const first_Span = document.querySelector(
    "#displayWordBank p span:nth-child(1)");
	
  /** @type {HTMLSpanElement} */
  const next_Span = document.querySelector(
    `#displayWordBank p span:nth-child(${chars_Correct + 1})`);
	
  if (next_Span.offsetTop > first_Span.offsetTop) 
  {
    for (let i = 0; i < words_Correct; i++)
	{
      word_bank.shift();
    }
    word_bank_span.innerHTML = "";
    words_Correct = 0;
    chars_Correct = 0;
    displayWords();
  }
}
function randomiseArray() {
  // Durstenfeld shuffle, psuedo-randomises the array
  for (var current_index = 0;current_index < word_bank.length;current_index++)
{
    var random_index = Math.floor(Math.random() * (current_index + 1));
    var temp = word_bank[current_index];
    word_bank[current_index] = word_bank[random_index];
    word_bank[random_index] = temp;
  }
}
function styleWordBank(input_value) {
  // Styles wordbank, comparing each letter to input box value, checking if its right or wrong and displays it apporiately.
  document.querySelectorAll("#displayWordBank p span").forEach((span, i) => 
  {
    if (i < chars_Correct) return;
    span.style.color = "white";
  });
  for (var i = 0; i < input_value.length; i++) 
  {
    if (input_value[i] == word_bank_span.textContent[i + chars_Correct])
	{
      var current_letter = document.querySelector(
      "#displayWordBank p span:nth-child(" + (i + 1 + chars_Correct) + ")");
      current_letter.style.color = "green";
    } 
	else 
	{
      var current_letter = document.querySelector(
      "#displayWordBank p span:nth-child(" + (i + 1 + chars_Correct) + ")" );
      current_letter.style.color = "red";
    }
  }
}

function timer() {
  //Checks the amount of time that has passed
  let current_Time = new Date();
  time_passed = current_Time - start_time;
  if (time_passed >= time) 
  {
    clearInterval(timer_interval);
    calculateWPM(); // create an alert when test is over!!!
    main();
  }
  updateTimerUI();
}

function updateTimerUI() {
  // Formats amount of time passed onto website
  let timer_HTML = document.getElementById("timer");
  let total_seconds = Math.floor(time_passed / 1000);
  let minutes = Math.floor(total_seconds / 60);
  let seconds = total_seconds % 60;
  let formatted_time =
    " ‎ ‎ " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " ‎ ‎ ‎";
  timer_HTML.innerHTML = formatted_time;
}
//Should I also display accuracy percentage?
function calculateWPM() {
  //Calculates WPM, which is to be displayed to the user
  console.log(written_characters);
  WPM = written_characters / 5 / (time / 60000);
  updateWpmUI();
  alert("Test finished"); //change this, but keep idea
}

function updateWpmUI() {
  let wpm_HTML = document.getElementById("WordsPerMinutes");
  let formatted_WPM = "WPM: " + WPM;
  wpm_HTML.innerHTML = formatted_WPM;
}

function validateTimerOptions() {
  // Enables changing of length of typing test (by default its 60s long)
  var timer_options = [30, 60, 90, 120];
  for (var i = 0; i < timerOptions.length; i++) 
  {
    if (document.getElementById(timer_options[i]).checked)
	{
      time = timer_options[i] * 1000;
    }
  }
}

function validateDifficultyOptions() {
  var difficulty_options = ["Punctuation", "Capitalization", "Paragraphs"];
  for (var i = 0; i < difficultyOptions.length; i++) 
  {
    if (document.getElementById(difficulty_options[i]).checked) 
	{
      console.log(difficulty_options[i]);
      generateDifficultyOptions(difficulty_options[i]);
    }
  }
}

function generateDifficultyOptions(difficulty_options) {
  //using checkboxes, lets say i picked Punctuation, and afterwards i picked capitalisation, would it see punctuation is ticked and attempt to reapply it?
  // DIFFICULTY OPTIONS NOT YET FINISHED
  if (difficulty_options == "Punctuation")
	  {
    const possible_punctuation = "-,.;:'";
    for (var i = 0;i < word_bank.length;i++) //not working) 
	{
      word_bank[i].concat(Math.floor(Math.random() * possible_punctuation.length));
    }
  } 
  else if (difficulty_options == "Capitalization")
	  {
    //not working
    for (var i = 0; i < word_bank.length; i++) 
	{
      if (word_bank[i].length > 1) 
	  {
        word_bank[i] =word_bank[i].charAt(0).toUpperCase() + word_bank.slice(1);
      }
	  else 
	  {
        word_bank[i] = word_bank[i].charAt(0).toUpperCase();
      }
      console.log(word_bank[i]);
    }
  } 
  else if (difficulty_options == "Paragraphs") 
  {
    console.log("not finished");
  }
  //use this to generate a list of words/capitalised words or paragraphs dependind on difficulty options
  displayWords();
}
//use this to generate words and edit it??? simply an idea with the addition of difficulties, may not use.
function makeWord(wordMax) {
  let string = "";
  const possible_consonants = "bcdfghjklmnpqrstvwxyz";
  const possibleVowels = "aeiou";
  for (let i = 0; i < wordMax; i = i + 3) 
  {
    string +=
      possibleLetters[Math.floor(Math.random() * possible_consonants.length)];
    string +=
      possibleVowels[Math.floor(Math.random() * possible_vowels.length)];
    string +=
      possibleLetters[Math.floor(Math.random() * possible_consonants.length)];
  }
  console.log(string);
}

function main() {
  // Start of typing test
  document.getElementById("inputBox").value = "";
  timer_started = false;
  var start_time = 0;
  var timer_interval;
  updateTimerUI();
  updateWpmUI();
  randomiseArray();
  displayWords();
}

main();