
// Array of sentences and words to be displayed to user to be written during the typing test
var word_bank = ["farm", "cheese", "apple", "character", "planet", "godfrey", "orange", "story", "animated", "user", "empty", "still", "grapes", "fill", 
"worry", "sad", "pensive", "because", "intuition", "pattern", "recognition","oval", "square", "paper", "developer", "controls", "button", "listener", "string", "data", "explained",
 "error", "means", "exist", "queue", "event", "object", "exuberant", "terrified", "grief", "morning", "sunny", "rain", "vigorously",
"rich", "abundant", "lush", "lubricant", "average", "mode", "mind", "direction", "rock", "cartoon", "stories", "protagonist", "anti-hero", "robot", "drone", "king", "history", 
"exiled", "death", "tortured", "soul", "religion","eagle", "black", "blue", "pigeon", "parrot", "extraordinary", "powerful", "earth", "air", "fire","water", "avatar","prophet","lazy",
 "brilliant", "genius", "gas", "parliament", "government", "decree", "judge", "jury", "execute", "program","algorithm", "strong", "timid", 
"assembly", "require", "spontaneous", "tore", "rip", "schedule", "often", "occasionally", "always", "never", "cow", "animal", "dog", "sheep", "banana", "rarely", "however", "oil", 
"defined", "variable","sky", "mountain", "wind", "festival", "whisper", "invisible", "reveal", "vision", "silence", "embrace", "quest", "journey", "harmony",
"sculpture", "canvas", "masterpiece", "timeless", "immortal","doctor","cat","tardis","chamber","echo", "bat","night","moonlight","fireflies","illuminate", "leaves","wisdom",
 "shadow", "enigma", "mystery", "ripple", "serenity", "astonish", "puzzle", "infinite","photosynthesis","god","plant","bandit","thug","horse",
"forgotten","lonely", "gentle", "symphony", "symmetry", "asymmetry",  "celestial", "wonder", "eternal", "once", "flourish", "degragation", "divergent", "astel", "catalyst", 
"surrender", "capitulate", "radiant", "nebula", "luminous", "orbit", "fusion", "essence", "majestic", "resonate", "traverse", "crest", "lunar", "solar", "galaxy", "blossom", "quench",
"ambient",  "velvet", "exquisite", "whirlwind", "abyss", "reverie", "enchant", "cascade", "melody", "ethereal", "spectacle",
"unveil", "infinity", "catharsis", "arthritis", "bone", "undead", "lich", "dragon", "greater", "zombie","apocalypse","paradox",  "labyrinth", 
"phenomenon","solitude", "serene", "tranquil","emperor","ironic","enigmatic", "utopia", "vivid", "pandemonium", "chaos", "fragile",
"arcane", "divergence", "eclipse", "radiance", "glimmer","bow","adore","pink","princess",  "lustrous", "pantheon", "vortex", "juxtapose", "epiphany", "harbinger", "is",
"the", "why", "you", "who", "what", "where", "when", "how", "then", "than", "depressed", "dinosaur", "common", "uncommon", "legendary", "rare", "exotic", "if",
 "are", "good", "bad", "that", "will", "be", "going", "now", "okay", "end", "beginning", "narrative", "games", "manga", "anime", "slime", "isekai", "books", "movies", "mouse", 
 "keyboard", "laptop", "cable", "wire", "vector", "parallel", "line", "drawing", "drew", "fan", "gone", "baked", "walked", "walking", "smiling", "likes", "hates",
 "too", "late", "to", "smitten", "her", "they", "them", "him", "she", "fiction", "non-fiction", "early", "let", "go","grimoire","elves","dwarves","humans","induction",
 "electrical","lighting","yard","couch","desk","baby","pen", "coffee", "smile", "traffic", "sleep", "friend", "book", "phone", "window", "meeting", "dinner", "laugh", "music", "news", "work", "key", "home", "idea",
 "bread", "clock", "chair", "cloud", "light", "garden", "bus", "pencil","map", "jacket", "flower", "market", "raincoat", "memory", "table", "door", "sun", "moon", "hand", "eye", "mouth", 
 "food", "clothes", "school", "family", "love", "hate", "happy", "angry", "tired", "hungry", "thirsty", "hot", "cold", "big", "small", "tall", "short","dark", "fast", "slow", 
 "new", "old", "in", "out", "up", "down", "left", "right", "on", "off", "open", "close", "yes", "no", "maybe", "stop", "look", "listen", "talk", "think", "read", "write", "sing", "dance", "play","cry", "walk", "run", 
 "jump", "eat", "drink","dream", "hope", "fear", "today", "tomorrow", "yesterday", "afternoon", "evening", "spring", "summer", "autumn", "winter", "one", "two", "three", "four", "five", "six", "seven", "eight", 
 "nine", "ten"]

var paragraph_bank = ["When we hear outlaw we think of criminals. But outlaws aren't just any kind of criminal, they are considered type of criminal, they are considererd outside of the protection of the law. This means that they can be persecuted by anyone.",
"A man, who was falsely imprisoned for 10 years, spent most of his time studying law to prove his innocence. After he succeeded, he became a lawyer to help free those who were also falsely convicted.",
"It might come as no surprise that guitars are the most popular music instrument, followed closely by pianos. However, neither of them are the best-selling instrument. That title goes to the harmonica." ,
"You can divide a pie into 8 equal pieces using just 3 cuts! First, make a horizontal cut in the middle, then a vertical cut, and then you stack 4 slices and make a cut a in the middle of that.",
"In 1998, Sony had the chance to buy the rights to most of the Marvel characters. However, they only bought the rights for Spiderman, stating that no one cares about the other characters." ,
"Almost all 195 countries in the world have a real-life animal as their national animal, but 6 of them have mythical animals. Scotland, for example, appointed the unicorn as their national animal.",
"There is a single plant species that a wide variety of vegetable comes from. It produces kale, brussels sprouts cauliflower, cabbage and broccoli which are all varieties of the same plants. ",
"A parrot named Willie once saved a toddler's life. When this owner was in another room, the toddler, who was being babysat, began to choke. Willie quickly alerted his owner by screaming, 'mama, baby'.",
"Despite media portrayal after Steve Irwin died from one, stringray attacks are almost never fatal. In fact, it is quite rare. Every year, only one or two stingray attacks are reported worldwide.",
"The United States has won 246 gold medals in the entire Olympics history. Michael Phelps happened to have earned 23 of those gold medals. This is equal to about 10% of all the gold medals.",
"The movie Godfather was adapted from a book written by Mario Puzo. Mario was also happened to tbe the screenwriter for the movie adaptation, even though he has not screenwriting experience or knowledge"]
var written_characters = 0; 
var timer_started = false; 
var time = 60000;// 60000 milliseconds = 60 seconds
let time_passed = 0; 
var WPM = 0; 
const display_bank_p = document.querySelector("#displayWordBank p");
let total_typed_words = 0; // total number of words typed by the user
let chars_correct = 0; // number of characters correctly typed, used to check if we are at the end of the word
let words_correct = 0; // number of words correctly typed, used to check if we are at the end of the line


function displayArray(array) {
  // Displays expected inputs on website
  display_bank_p.innerHTML = "";
  document.getElementById("inputBox").value = "";
  let max_height = 200; // max height of the word bank
  let current_height = 0; 
  var i = 0; 
  while (i < array.length && current_height < max_height)  
  {
    var string = array[i];
    for (var j = 0; j < string.length; j++)
	  {
    // Create a span element for each letter in the word, allowing for individual styling
      const span_word = document.createElement("span"); 
      span_word.textContent = string[j]; 
      display_bank_p.appendChild(span_word);
    }
    const span_space = document.createElement("span"); 
    span_space.textContent = " ";
    display_bank_p.appendChild(span_space);
    current_height = display_bank_p.offsetHeight;
    if (current_height >= max_height)  
	  { 
      for (var j = 0; j < string.length; j++)  
	    {
      // Remove the last word if it exceeds the max height as current height value is based on the height of the last word
        let last_word = display_bank_p.lastChild.previousSibling;
        last_word.remove();
      }
    }
    i++;
  }
}

function validateInputBox() {
  //Checks if input box has been written in, if so, starts time and checks if inputted value is correct
  var input_value = document.getElementById("inputBox").value;
  if (timer_started == false && input_value != "") 
  {
    timer_started = true;
    start_time = new Date();
    timer_interval = setInterval(timer, 100);
    document.getElementById('tips').classList.add('hidden');
  }
  // Checks if the last letter typed is a space, if so, checks if the word is correct and updates the word bank
  styleWordBank(input_value);
  const last_letter_typed = input_value[input_value.length - 1];
  if (last_letter_typed == " ")
  {
    const word = input_value.split(" ")[0];
    if (word == display_bank_p.textContent.split(" ")[words_correct]) 
  	{
      // If the word is correct, update the word bank and reset the input box
      chars_correct += input_value.length;
      words_correct++;
      total_typed_words++;
      checkEndOfLine(); 
      document.getElementById("inputBox").value = "";
      written_characters += word_bank[words_correct].length+1; // Add one to include spaces
    }
  }
}

function checkEndOfLine() {
  //Checks whether we are at the end of the first line, if so, removes the line and redisplays words, moving the words up
  /** @type {HTMLSpanElement} */
  const first_Span = document.querySelector(`#displayWordBank p span:nth-child(1)`);
	
  /** @type {HTMLSpanElement} */
  const next_Span = document.querySelector(`#displayWordBank p span:nth-child(${chars_correct + 1})`);
	
  if (next_Span.offsetTop > first_Span.offsetTop) 
  {
    if (document.getElementById("Paragraphs").checked) 
    {
      if (paragraph_bank[0].length == 0) 
      {
        paragraph_bank.shift();
      }
      else if (paragraph_bank[0].length > chars_correct)
      {
        paragraph_bank[0] = paragraph_bank[0].slice(chars_correct);
      }
      else if (paragraph_bank[0].length == chars_correct)
      {
        paragraph_bank.shift();
      }
      else if (paragraph_bank[0].length < chars_correct)
      {
        chars_correct = chars_correct - paragraph_bank[0].length-1;
        paragraph_bank[0] = paragraph_bank[0].slice(chars_correct);
        paragraph_bank.shift();
        paragraph_bank[0] = paragraph_bank[0].slice(chars_correct);
      }
    }
    else 
    {
      for (var i = 0; i < words_correct; i++)
      {
        word_bank.shift();
      }
    }
    if (document.getElementById("Paragraphs").checked) 
    {
      displayArray(paragraph_bank);
    }
    else 
    {
      displayArray(word_bank);
    }
    words_correct = 0;
    chars_correct = 0;
  }
}


function randomiseArray(array) {
  // Durstenfeld shuffle, psuedo-randomises the word_bank
  for (var current_index = 0;current_index < array.length;current_index++)
  {
    var random_index = Math.floor(Math.random() * (current_index + 1));
    var temp = array[current_index];
    array[current_index] = array[random_index];
	  array[random_index] = temp;
  }
}

function styleWordBank(input_value) {
  // Styles wordbank, comparing each letter to input box value, checking if its right or wrong and displays it apporiately. 
  styleWordNormal();
  for (var i = 0; i < input_value.length; i++) 
  {
    if (input_value[i] == display_bank_p.textContent[i + chars_correct])
	{
      var current_letter = document.querySelector(
      "#displayWordBank p span:nth-child(" + (i + 1 + chars_correct) + ")");
      current_letter.style.color = "green";
    } 
	else 
	{
      var current_letter = document.querySelector(
      "#displayWordBank p span:nth-child(" + (i + 1 + chars_correct) + ")" );
      current_letter.style.color = "red";
    }
  }
}


function timer() {
  // Checks the amount of time that has passed
  let current_Time = new Date();
  time_passed = current_Time - start_time;
  if (time_passed >= time) 
  {
    for (let i = 0; i < words_correct; i++)
    {
      word_bank.shift();
    }
    endTest();
  }
  else
  {
    updateTimerUI();
  }

}

function endTest() {
  // Ends typing test
  clearInterval(timer_interval);
  styleWordNormal();
  if (authenication && time_passed >= time)
  {
    calculateWPM();
    calculateStats();
  } 
  else if (time_passed >= time)
  {
    calculateWPM();
  }
  alert("Test finished");
  resetTypingTest();
}

function styleWordNormal() {
  // This ensures that the text colour changes back after styling it with green/red after word is completed successfully
  document.querySelectorAll("#displayWordBank p span").forEach((span, i) => 
  { 
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) 
	  {
		  span.style.color = "white";
	  }
	  else
	  {
		  span.style.color="black";
	  }
  });
}

function updateTimerUI() {
  // Formats amount of time passed onto website
  let timer_HTML = document.getElementById("timer");
  let total_seconds = Math.floor(time_passed / 1000);
  let minutes = Math.floor(total_seconds / 60);
  let seconds = total_seconds % 60;
  let formatted_time = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  timer_HTML.innerHTML = formatted_time;
}

function calculateWPM() {
// Calculates WPM, which is to be displayed to the user and alerts the user that the test is finished
  WPM = (written_characters / 5 / (time / 60000)).toFixed(2);
  updateWpmUI();
}

function updateWpmUI() {
 // Displays the WPM on the website
  let wpm_HTML = document.getElementById("WordsPerMinutes");
  let formatted_WPM = "WPM: " + WPM;
  wpm_HTML.innerHTML = formatted_WPM;
}

function resetTypingTest() {
  // Start of typing test
  document.getElementById('inputBox').value = "";
  timer_started = false;
  written_characters = 0;
  time_passed = 0;
  WPM = 0;
  words_correct = 0;
  chars_correct = 0;
  updateTimerUI();
  
}

async function init() {
  // Main function, ensures that the all users information is loaded and the typing test can begin
  document.getElementById('60').checked = true;
  document.getElementById('Capitalization').checked = false;
  document.getElementById('Punctuation').checked = false;
  document.getElementById('Paragraphs').checked = false;
  await getUserInformation();
  randomiseArray(paragraph_bank)
  randomiseArray(word_bank);
  displayArray(word_bank);
  updateWpmUI()
  resetTypingTest();
}

init();

/*
username: admin
password: unbreakable

username: user1
password: password1
*/

