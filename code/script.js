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
let chars_correct = 0;
let words_correct = 0; 
let authenication = false; // boolean to check if user is logged in
let json_data = []; // array to store json data

function displayArray(array) {
  // Displays expected inputs on website
  document.getElementById("inputBox").value = "";
  let max_height = 200;
  let current_height = 0; 
  var i = 0; 
  while (i < array.length && current_height < max_height)  
  {
    var string = array[i];
    for (var j = 0; j < string.length; j++)
	{
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
    timer_interval = setInterval(timer, 950);
  }
  styleWordBank(input_value);
  const last_letter_typed = input_value[input_value.length - 1];
  if (last_letter_typed == " ")
  {
    const word = input_value.split(" ")[0];
    if (word == display_bank_p.textContent.split(" ")[words_correct]) 
	{
      chars_correct += input_value.length;
      words_correct++;
      checkEndOfLine();
      document.getElementById("inputBox").value = "";
      written_characters += word_bank[words_correct].length+1; // Add one to include spaces
    }
  }
}
//Checks whether we are at the end of the line, if so, removes the line and redisplays words
function checkEndOfLine() {
  /** @type {HTMLSpanElement} */
  const first_Span = document.querySelector(`#displayWordBank p span:nth-child(1)`);
	
  /** @type {HTMLSpanElement} */
  const next_Span = document.querySelector(`#displayWordBank p span:nth-child(${chars_correct + 1})`);
	
  if (next_Span.offsetTop > first_Span.offsetTop) 
  {
    for (var i = 0; i < words_correct; i++)
	{
		if(document.getElementById("Paragraphs").checked)
		{
			break;
		}	
		else
		{
			word_bank.shift();
		}	
  }
	display_bank_p.innerHTML = "";
	paragraph_bank[0]=paragraph_bank[0].slice(chars_correct);
	console.log(paragraph_bank[0]); // maybe works now????, might have to change [0] to something else, like paragraphs written count or smth
	if(document.getElementById("Paragraphs").checked)
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
  document.querySelectorAll("#displayWordBank p span").forEach((span, i) => 
  {
    if (i < chars_correct && window.matchMedia("(prefers-color-scheme: dark)").matches) 
	{
		span.style.color = "white";
	}
	else
	{
		span.style.color="black"
	}
  });
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
  //Checks the amount of time that has passed
  let current_Time = new Date();
  time_passed = current_Time - start_time;
  if (time_passed >= time) 
  {
    clearInterval(timer_interval);
    calculateWPM(); // create an alert when test is over!!!
	for (let i = 0; i < words_correct; i++)
	{
      word_bank.shift();
    }
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

function calculateWPM() {
  //Calculates WPM, which is to be displayed to the user
  WPM = written_characters / 5 / (time / 60000);
  updateWpmUI();
  alert("Test finished"); //change this, but keep idea
}

function updateWpmUI() {
 // Displays the WPM on the website
  let wpm_HTML = document.getElementById("WordsPerMinutes");
  let formatted_WPM = "WPM: " + WPM;
  wpm_HTML.innerHTML = formatted_WPM;
}

function validateTimerOptions() {
  // Enables changing of length of typing test (by default its 60s long)
  var timer_options = [30, 60, 90, 120];
  for (var i = 0; i < timer_options.length; i++) 
  {
    if (document.getElementById(timer_options[i]).checked)
	{
      time = timer_options[i] * 1000;
    }
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

//Event listener for Punctuation difficulty option
document.getElementById('Punctuation').addEventListener('change', (event) => {
  const possible_punctuation = "-,.;:'";
	if (!event.currentTarget.checked) 
	{
		for (var i = 0;i < word_bank.length;i++)
		{
			var word = word_bank[i];
			var removed_punct_word = "";
			for (var j = 0; j < word.length; j++)
			{
				if (possible_punctuation.indexOf(word[j])===-1)
				{
					removed_punct_word+=word[j];
				}
			}	
			word_bank[i] = removed_punct_word;
		}	
	}
	else
	{
		document.getElementById('Paragraphs').checked = false;
		for (var i = 0;i < word_bank.length;i++)
		{
			if (Math.random()<0.5)
			{
				word_bank[i]=word_bank[i]+(possible_punctuation[Math.floor(Math.random() * possible_punctuation.length)]);
			}
		}
	}
	display_bank_p.innerHTML="";
	displayArray(word_bank);
});

//Event listener for Capitalization difficulty option
document.getElementById('Capitalization').addEventListener('change', (event) => {
	if (!event.currentTarget.checked) 
	{
		for (var i = 0; i < word_bank.length; i++)
		{
			if (word_bank[i].length > 1) 
			{
				word_bank[i] =word_bank[i].charAt(0).toLowerCase() + word_bank[i].slice(1);
			}
			else 
			{
				word_bank[i] = word_bank[i].charAt(0).toLowerCase();
			}
		}
	}
	else
	{
		document.getElementById('Paragraphs').checked = false;
		for (var i = 0; i < word_bank.length; i++)
		{
			if (word_bank[i].length > 1) 
			{
				word_bank[i] =word_bank[i].charAt(0).toUpperCase() + word_bank[i].slice(1);
			}
			else 
			{
				word_bank[i] = word_bank[i].charAt(0).toUpperCase();
			}
		}
	}	
	display_bank_p.innerHTML="";
	displayArray(word_bank);
});
// event listener for Paragraphs difficulty option
document.getElementById('Paragraphs').addEventListener('change', (event) => {
	if (!event.currentTarget.checked) 
	{
		display_bank_p.innerHTML="";
		displayArray(word_bank);
	}	
	else
	{
		document.getElementById('Capitalization').checked = false;
		document.getElementById('Punctuation').checked = false;
		display_bank_p.innerHTML="";
		displayArray(paragraph_bank);
	}
});

function loadLoginForm() { // not styled properly 
	document.getElementById('outsideContainer').classList.remove('show');
	document.getElementById('outsideContainer').classList.add('hidden');
	document.getElementById('outsideContainerforLogIn').classList.remove('hidden');
}
function loadSignupForm() {
  document.getElementById('outsideContainer').classList.remove('show');
  document.getElementById('outsideContainer').classList.add('hidden');
  document.getElementById('outsideContainerforSignUp').classList.remove('hidden');
}

function backButton(backLocation) {
  document.getElementById('outsideContainer').classList.remove('hidden');
  document.getElementById('outsideContainer').classList.add('show');
  document.getElementById(backLocation).classList.add('hidden');
}

function validateLogIn() {  
	const inputted_username = document.getElementById('usernameLogIn').value;
	const inputted_password = document.getElementById('passwordLogIn').value;	
  for (var i = 0; i < json_data.users.length; i++)
  {
    if (json_data.users[i].username == inputted_username && json_data.users[i].password == inputted_password)
    {
      authenication = true;
      break;
    }
  }
  if (authenication)
  {
    displayHTMLafterLogIn(inputted_username,'outsideContainerforLogIn','logInSquare');
  }
  else
  {
    alert("Incorrect username or password"); // keep idea but make it look better
  }
}
async function validateSignUp() {  
  var inputted_username = document.getElementById('usernameSignUp').value;
  var inputted_password = document.getElementById('passwordSignUp').value;
  let user_exists = false;
  for (var i = 0; i < json_data.users.length; i++)
  {
    if (json_data.users[i].username == inputted_username)
    {
      user_exists = true;
      break;
    }
  }
  if (user_exists)
  {
    alert("Username already exists");
    user_exists = false;
  }
  else
  {
    var hashed_password = hashPassword()
    console.log("password",inputted_password);
    inputted_password = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(inputted_password));
    inputted_password = Array.from(new Uint8Array(inputted_password)).map(b => b.toString(16).padStart(2, '0')).join('');
    const new_user = 
    {
      "username": inputted_username,
      "password": inputted_password
    }
    json_data.users.push(new_user); 
    //console.log(json_data);//store to a json file 
    var json_object = JSON.stringify(json_data.users);
    const blob = new Blob([json_object], {type: 'application/json'});
    //contine here
    var anchor = document.createElement('a');
    anchor.download = "data.json";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.innerHTML = "download"
    anchor.click();
    console.log(anchor);
    // <<>>>
    displayHTMLafterLogIn(inputted_username,'outsideContainerforSignUp','signUpSquare');
  }
}

async function hashedPassword(password) {
    password  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password ));
    password  = Array.from(new Uint8Array(password )).map(b => b.toString(16).padStart(2, '0')).join('');
}

function displayHTMLafterLogIn(inputted_username,container,square) {
  const display_username = document.querySelector("#signedIn p");
  const span_word = document.createElement("span"); 
  span_word.textContent = inputted_username; 
  display_username.appendChild(span_word); 
  document.getElementById('outsideContainer').classList.remove('hidden'); // it is now working, but need to change styling and ensure actually signed in.
  document.getElementById('outsideContainer').classList.add('show');
  document.getElementById(container).classList.remove('show');
  document.getElementById(container).classList.add('hidden');
  document.getElementById(square).classList.add('hidden');
  document.getElementById('signedIn').classList.remove('hidden');
  document.getElementById('signedIn').classList.add('show');
}

async function getUserInformation() {  
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      json_data = data;
      // console.log(json_data,"json data");
    })
    .catch(error => console.error('Error, json file not found', error));
}

async function init() {
await getUserInformation();
beginTypingTest();
console.log(json_data);
}

init();