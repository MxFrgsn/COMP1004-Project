import { validateInputBox, styleWordBank } from './user_Input.js';
import { displayArray, checkEndOfLine } from './display.js';
import {timer, updateTimerUI, calculateWPM, updateWpmUI } from './timer_and_wpm.js';
import { loadLoginForm, loadSignupForm, validateLogIn, validateSignUp, displayHTMLafterLogIn, hashedPassword, setLocalStorageJSON, getLocalStorageJSON, backButton } from './account.js';
import {validateTimerOptions} from './difficulty_options.js';

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

var paragraph_bank = ["When we hear outlaw we think of criminals. But outlaws aren't just any kind of criminal, they are considered type of criminal, they are considererd outside of the protection of the law. This means that they can be persecuted by anyone A man, who was falsely imprisoned for 10 years, spent most of his time studying law to prove his innocence. After he succeeded, he became a lawyer to help free those who were also falsely convicted.",
"It might come as no surprise that guitars are the most popular music instrument, followed closely by pianos. However, neither of them are the best-selling instrument. That title goes to the harmonica." ,
"You can divide a pie into 8 equal pieces using just 3 cuts! First, make a horizontal cut in the middle, then a vertical cut, and then you stack 4 slices and make a cut a in the middle of that.",
"In 1998, Sony had the chance to buy the rights to most of the Marvel characters. However, they only bought the rights for Spiderman, stating that no one cares about the other characters." ,
"Almost all 195 countries in the world have a real-life animal as their national animal, but 6 of them have mythical animals. Scotland, for example,appointed the unicorn as their national animal.",
"There is a single plant species that a wide variety of vegetable comes from. It produces kale, brussels sprouts cauliflower, cabbage and broccoli which are all varieties of the same plants. ",
"A parrot named Willie once saved a toddler's life. When this owner was in another room, the toddler, who was being babysat, began to choke. Willie quickly alerted his owner by screaming, 'mama, baby'.",
"Despite media portrayal after Steve Irwin died from one, stringray attacks are almost never fatal. In fact, it is quite rare. Every year, only one or two stingray attacks are reported worldwide.",
"The United States has won 246 gold medals in the entire Olympics history. Michael Phelps happened to have earned 23 of those gold medals. This is equal to about 10% of all the gold medals.",
"The movie Godfather was adapted from a book written by Mario Puzo. Mario was also happened to tbe the screenwriter for the movie adaptation, even though he has not screenwriting experience or knowledge"]
var written_characters = 0; 
var timer_started = false; 
var time = 60000; // 60000 milliseconds = 60 seconds
let time_passed = 0; 
var WPM = 0; 
const display_bank_p = document.querySelector("#displayWordBank p");
let chars_correct = 0; // number of characters correctly typed, used to check if we are at the end of the word
let words_correct = 0; // number of words correctly typed, used to check if we are at the end of the line
let authenication = false; // boolean to check if user is logged in
let json_data = []; // array to store json data

//Checks whether we are at the end of the first line, if so, removes the line and redisplays words, moving the words up

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

function beginTypingTest() {
  // Start of typing test
  document.getElementById('inputBox').value = "";
  timer_started = false;
  updateWpmUI();
  written_characters = 0;
  time_passed = 0;
  WPM = 0;
  words_correct = 0;
  chars_correct = 0;
  updateTimerUI();
  randomiseArray(paragraph_bank)
  randomiseArray(word_bank);
  displayArray(word_bank);
}

// Main function, calls all the other functions
async function init() {
await getUserInformation();
beginTypingTest();
}

init();