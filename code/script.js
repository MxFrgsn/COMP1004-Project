
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
var time = 60000; // 60000 milliseconds = 60 seconds
let time_passed = 0; 
var WPM = 0; 
const display_bank_p = document.querySelector("#displayWordBank p");
let total_typed_words = 0; // total number of words typed by the user
let chars_correct = 0; // number of characters correctly typed, used to check if we are at the end of the word
let words_correct = 0; // number of words correctly typed, used to check if we are at the end of the line
let authenication = false; // boolean to check if user is logged in
let JSON_data = []; // array to store json data
let current_user = {};// string to store current user
let user_stats = {}; // object to store user stats
let chart = []; // chart to display user stats


function displayArray(array) {
  // Displays expected inputs on website
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
    timer_interval = setInterval(timer, 950);
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
    display_bank_p.innerHTML = "";
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
  document.querySelectorAll("#displayWordBank p span").forEach((span, i) => 
  {
    if (i < chars_correct && window.matchMedia("(prefers-color-scheme: dark)").matches) 
	  {
		  span.style.color = "white";
	  }
	  else
	  {
		  span.style.color="black";
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
  // Checks the amount of time that has passed
  let current_Time = new Date();
  time_passed = current_Time - start_time;
  if (time_passed >= time) 
  {
    clearInterval(timer_interval);
    calculateWPM();
	for (let i = 0; i < words_correct; i++)
	{
      word_bank.shift();
    }
    beginTypingTest();
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
// Calculates WPM, which is to be displayed to the user and alerts the user that the test is finished
  WPM = written_characters / 5 / (time / 60000).toFixed(2);
  updateWpmUI();
  alert("Test finished");
  if (authenication)
  {
    calculateStats();
  } 
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
  if (!timer_started)
  // Removes punctuation from words if the option is unchecked, adds punctuation to words if the option is checked
  {
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
}
});

//Event listener for Capitalization difficulty option
document.getElementById('Capitalization').addEventListener('change', (event) => {
  if (!timer_started)
  // Changes the capitalization of the words in the word bank
  {
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
}
});

// Event listener for Paragraphs difficulty option
document.getElementById('Paragraphs').addEventListener('change', (event) => {
  // Checks if timer has started, ensuring that the difficulty options are not changed during the test
  if (!timer_started)
  {
    if (!event.currentTarget.checked) 
    {
      display_bank_p.innerHTML="";
      displayArray(word_bank);
    }	
    else
    {
      // Ensures that the other difficulty options are unchecked, as they are not compatible with the paragraph difficulty option
      document.getElementById('Capitalization').checked = false;
      document.getElementById('Punctuation').checked = false;
      display_bank_p.innerHTML="";
      displayArray(paragraph_bank);
    }
}
});

function loadLoginForm() { 
  // Changes class of the outside container to show the login form
  document.getElementById("usernameLogIn").value = "";
  document.getElementById("passwordLogIn").value = "";
	document.getElementById('outsideContainer').classList.remove('show');
	document.getElementById('outsideContainer').classList.add('hidden');
	document.getElementById('outsideContainerForLogIn').classList.remove('hidden');
}

function loadSignupForm() {
  // Changes class of the outside container to show the signup form
  document.getElementById("passwordSignUp").value = "";
  document.getElementById("usernameSignUp").value = "";
  document.getElementById('outsideContainer').classList.remove('show');
  document.getElementById('outsideContainer').classList.add('hidden');
  document.getElementById('outsideContainerForSignUp').classList.remove('hidden');
}

function loadStats() {
  // Changes class of the outside container to show the stats
  document.getElementById('outsideContainer').classList.remove('show');
  document.getElementById('outsideContainer').classList.add('hidden');
  document.getElementById('outsideContainerForStats').classList.remove('hidden');
  displayStats();
}

function backButton(backLocation) {
  // Changes class of the outside container to show the typing test
  document.getElementById('outsideContainer').classList.remove('hidden');
  document.getElementById('outsideContainer').classList.add('show');
  document.getElementById(backLocation).classList.add('hidden');
}

async function validateLogIn(e) {  
  // Ensures user information is correct when attempting to log in
  e.preventDefault();
	const inputted_username = document.getElementById('usernameLogIn').value;
	const inputted_password = await hashedPassword(document.getElementById('passwordLogIn').value);	
  const getLocalStorageJson = JSON.parse(localStorage.getItem("users"));
  try 
  {
    for (var i = 0; i < getLocalStorageJson.users.length; i++)
    {
      if (getLocalStorageJson.users[i].username == inputted_username && getLocalStorageJson.users[i].password == inputted_password) 
      {
        authenication = true;
        break;
      }
    }
    if (authenication)
    {
      current_user = 
      {
        "username": inputted_username,
        "password": inputted_password
      }
      user_stats = getLocalStorageJson.users[i];
      displayHTMLafterLogIn(inputted_username,'outsideContainerForLogIn');
    }
    else
    {
      e.preventDefault();
      alert("Incorrect username or password"); // keep idea but make it look better
    }
  }
  catch (error)
  {
    console.error('Error during SignUp, please try again.', error);
  }
}

async function validateSignUp(e) {  
  // Checks whether username already exists, if not, adds user to the json file
  e.preventDefault();
  var inputted_username = document.getElementById('usernameSignUp').value;
  var inputted_password = document.getElementById('passwordSignUp').value;
  const getLocalStorageJson = JSON.parse(localStorage.getItem("users"));
  let user_exists = false;
  // Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character
  // Uses regular expressions to check if password is valid
  const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",/?]).{8,}$/;
  try 
  {
    for (var i = 0; i <  getLocalStorageJson.users.length; i++)
    {
      if (getLocalStorageJson.users[i].username == inputted_username)
      {
        user_exists = true;
        break;
      }
    }
    if (user_exists)
    {
      alert("Username already exists"); // keep idea but make it look better
      user_exists = false;
    }
    else
    {
      let valid_password = password_regex.test(inputted_password);
      if (valid_password)
      {
        var inputted_password = await hashedPassword(inputted_password)
        current_user = 
        {
        "username": inputted_username,
        "password": inputted_password
        }
        
        setLocalStorageJSON(current_user);
        displayHTMLafterLogIn(inputted_username,'outsideContainerForSignUp');
        user_stats = getLocalStorageJson.users.find(user => user.password === inputted_password);
      }
      else
      {
        alert("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"); // change this to none alert
      } 
    }
  }
  catch (error)
  {
  console.error('Error during SignUp, please try again.', error);
  }
}

async function hashedPassword(password) {
  // Hashes the password using SHA-256, ensuring a degree of security
  password  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
  password  = Array.from(new Uint8Array(password)).map(b => b.toString(16).padStart(2, '0')).join('');
  return password;
}

function setLocalStorageJSON(input) {
  // Adds the user to the local storage
  JSON_data = JSON.parse(localStorage.getItem("users"));
  JSON_data.users.push(input);
  localStorage.setItem("users", JSON.stringify(JSON_data));
}

function getLocalStorageJSON() 
{  
  JSON_data = JSON.parse(localStorage.getItem("users"));
}

function displayHTMLafterLogIn(inputted_username,container) { 
  // Displays the username on the website after the user has logged in and goes back to typing test.
  const display_username = document.querySelector("#signedIn p");
  const span_word = document.createElement("span"); 
  span_word.textContent = inputted_username; 
  display_username.appendChild(span_word); 
  document.getElementById('outsideContainer').classList.remove('hidden'); 
  document.getElementById('outsideContainer').classList.add('show');
  document.getElementById(container).classList.remove('show'); 
  document.getElementById(container).classList.add('hidden');
  document.getElementById("logInAndSignUpButtons").classList.remove('show');  
  document.getElementById("logInAndSignUpButtons").classList.add('hidden');  
  document.getElementById('signedIn').classList.remove('hidden');
  document.getElementById('signedIn').classList.add('show');
}

async function getUserInformation() {  
  // Reads the json file and stores it in the JSON_data array
 let stored_data = localStorage.getItem('users'); // Checks if the json file is already stored in local storage
 if (stored_data) 
 { 
  try 
  {
    data = JSON.parse(stored_data); 
    // This is causing an unexpected error within vscode live preview but works within the browser environment
    // Thus try and catch is used to catch the error and fetch the json file if it is not found
  } 
  catch (error)
  {
   fetch('./data.json')
   .then(response => response.json())
   .then(data => 
   {
     JSON_data = data;
     localStorage.setItem('users', JSON.stringify(JSON_data));
   })
   .catch(error => console.error('Error, json file not found', error));
  }
}
 else 
 {
   fetch('./data.json')
   .then(response => response.json())
   .then(data => {
    JSON_data = data;
    localStorage.setItem('users', JSON.stringify(JSON_data));
  })
   .catch(error => console.error('Error, json file not found', error));
 }
}

function showPassword(containerID) {
  // Shows the password when the user is typing it in
  let container = document.getElementById(containerID);
  if (container.type === "password") 
  {
    container.type = "text";
  }
  else
  {
    container.type = "password";
  }
}

function logOut() {
  // Logs out the user, removing the username from the website and displaying the login/sign up buttons
  current_user = {};
  authenication = false;
  const display_username = document.querySelector("#signedIn p");
  display_username.lastChild.remove();
  document.getElementById("logInAndSignUpButtons").classList.remove('hidden'); 
  document.getElementById("logInAndSignUpButtons").classList.add('show');   
  document.getElementById('signedIn').classList.remove('show');
  document.getElementById('signedIn').classList.add('hidden');
}

function storeStats(new_stats) {
  // Stores the user's stats in the json file
  let current_user_data = JSON_data.users.find(user => user.username === current_user.username);
 if (current_user_data) {
    if (current_user_data.typingStats.WPMList) {
      current_user_data.typingStats.WPMList.push(new_stats.WPMList[0]); 
    }
    current_user_data.typingStats.totalPlayTimeInSeconds += new_stats.totalPlayTimeInSeconds;
    current_user_data.typingStats.totalTestsTaken += new_stats.totalTestsTaken;
    current_user_data.typingStats.totalWordsTyped += new_stats.totalWordsTyped;
    current_user_data.typingStats.totalCharactersTyped += new_stats.totalCharactersTyped;
 }
let averageWPM=0;
 for (let i = 0; i < current_user_data.typingStats.WPMList.length; i++)
 {
  averageWPM += current_user_data.typingStats.WPMList[i];
 }
 current_user_data.typingStats.averageWPM=averageWPM/current_user_data.typingStats.WPMList.length;
 // Store the updated JSON_data back into localStorage 
 localStorage.setItem('users', JSON.stringify(JSON_data));

}

function calculateStats() {
  // Calculates the user's stats //incomplete
  let new_stats = {
  averageWPM: 0,
  WPMList:[WPM],
  totalPlayTimeInSeconds: time_passed / 1000,
  totalTestsTaken: 1,
  totalWordsTyped: total_typed_words,
  totalCharactersTyped: written_characters
  };
  storeStats(new_stats);
}

function displayStats() {
  // Displays the user's stats on the website // Change this to the username of the user you want
  let user = JSON_data.users.find(user => user.username === current_user.username);
  let stats = user.typingStats;  
  // Display the chart on the website
  if (window.myChart) 
  {
   updateChart(stats);
  }
  else
  {
    displayChart(stats);
  }
  // Display the stats on the website
  let display_stats = document.querySelector("#stats p");
  if (stats != undefined) 
  {
    const span_word = document.createElement("span"); 
    span_word.style.whiteSpace = 'pre-line';
    span_word.textContent = `${stats.averageWPM} WPM \n  ${stats.totalWordsTyped} words typed \n ${stats.totalCharactersTyped} characters typed \n ${stats.totalTestsTaken} tests taken \n ${stats.totalPlayTimeInSeconds} seconds played`; 
    display_stats.appendChild(span_word);
  }  
}

function displayChart(stats) {
  // Displays the user's WPM over time on a chart using Chart.js
  let ctx = document.getElementById('chart').getContext('2d');
  let data_points = stats.WPMList;
  let labels = data_points.map((_, index) => `Session ${index + 1}`); 
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'WPM over time',
        data: data_points,
        borderColor: 'rgb(75, 192, 192)',
        fill: false
      }]
      },
      options: {
        scales: {
          y: {
              beginAtZero: true
            }
        }
      }
    });
}

function updateChart(stats) {
  // Updates chart with the new data
  let data_points = stats.WPMList;
  let labels = data_points.map((_, index) => `Session ${index + 1}`);
  window.myChart.data.labels = labels;
  window.myChart.data.datasets[0].data = data_points;
  window.myChart.update();
}

function exportStats() {
  // Exports the user's stats to a file
  let user = JSON_data.users.find(user => user.username === current_user.username);
  let stats = JSON.stringify(user.typingStats);
  let blob = new Blob([stats], {type: 'application/json'});
  let url = URL.createObjectURL(blob);
  let a = document.createElement('a');
  a.href = url;
  a.download = 'stats.json';
  a.click();
}

async function init() {
  // Main function, calls all the other functions
  await getUserInformation();
  beginTypingTest();
  getLocalStorageJSON();
}

init();

// should add a funciton to reset stats 
// should i add a function to delete account
// should i add a function to change password
// should i add a function to change username
// should i add a function to view average WPM list
// should i add a funciton to view total play time in seconds in the graph to see what days the user played the most
// should i add a function to view total tests taken in the graph to see how many tests the user took each day
// should i add a function to view total words typed in the graph to see how many words the user typed each day
// should i add a function to view total characters typed in the graph to see how many characters the user typed each day
// should i add a function to view the average WPM in the graph to see how the user's average WPM changed over time



// remove alerts and replace with better looking alerts with css
// do report/documentation for the project
