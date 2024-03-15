// Changes class of the outside container to show the login form
function loadLoginForm() { // not styled properly (almost done)
	document.getElementById('outsideContainer').classList.remove('show');
	document.getElementById('outsideContainer').classList.add('hidden');
	document.getElementById('outsideContainerforLogIn').classList.remove('hidden');
}

 // Changes class of the outside container to show the signup form
function loadSignupForm() {
  document.getElementById('outsideContainer').classList.remove('show');
  document.getElementById('outsideContainer').classList.add('hidden');
  document.getElementById('outsideContainerforSignUp').classList.remove('hidden');
}

// Changes class of the outside container to show the typing test
function backButton(backLocation) {
  document.getElementById('outsideContainer').classList.remove('hidden');
  document.getElementById('outsideContainer').classList.add('show');
  document.getElementById(backLocation).classList.add('hidden');
}

 // Ensures user information is correct when attempting to log in
function validateLogIn() {  
	const inputted_username = document.getElementById('usernameLogIn').value;
	const inputted_password = document.getElementById('passwordLogIn').value;	
  for (var i = 0; i < json_data.users.length; i++)
  {
    if (json_data.users[i].username == inputted_username && hashedPassword(json_data.users[i].password) == hashedPassword(inputted_password)) 
    // change to hashed password and get from local storage instead of json-> but then whats the point of json as i only need to get the 
  // information from the json file once, and its stored forever on local storage until the user clears it
  // also i need to check if user has cleared cache if possible????????????????
    {
      authenication = true;
      break;
    }
  }
  if (authenication)
  {
    displayHTMLafterLogIn(inputted_username,'outsideContainerforLogIn','logInSquare'); // should i set authenication to false here?
  }
  else
  {
    alert("Incorrect username or password"); // keep idea but make it look better
  }
}

// Checks whether username already exists, if not, adds user to the json file
function validateSignUp() {  
  var inputted_username = document.getElementById('usernameSignUp').value;
  var inputted_password = document.getElementById('passwordSignUp').value;
  let user_exists = false;
  for (var i = 0; i <  json_data.users.length; i++) // change this and similar things to getlocalstoragejson.length????????
  {
    if (json_data.users[i].username == inputted_username)
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
    var inputted_password = hashPassword(inputted_password) // use regular expressions to make sure it matches good practice for high security
    const new_user = 
    {
      "username": inputted_username,
      "password": inputted_password
    }
    //json_data.users.push(new_user); 
    local_storage_data.push(new_user);
    setLocalStorageJSON(temp);
    displayHTMLafterLogIn(inputted_username,'outsideContainerforSignUp','signUpSquare');
  }
}

// Hashes the password using SHA-256, ensuring a degree of security
async function hashedPassword(password) {
    password  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
    password  = Array.from(new Uint8Array(password )).map(b => b.toString(16).padStart(2, '0')).join('');
    return password;
}

// Setting user data in local storage so it can be saved without using node.js
function setLocalStorageJSON(input) {
  localStorage.setItem("users", JSON.stringify(input));
}
// Accessing the information stored in local storage
function getLocalStorageJSON(output) {
return JSON.parse(localStorage.getItem(output));
}

// Displays the username on the website after the user has logged in and goes back to typing test.
function displayHTMLafterLogIn(inputted_username,container,square) { // need to do styling for login/signin/logout buttons
  const display_username = document.querySelector("#signedIn p");
  const span_word = document.createElement("span"); 
  span_word.textContent = inputted_username; 
  display_username.appendChild(span_word); 
  document.getElementById('outsideContainer').classList.remove('hidden'); 
  document.getElementById('outsideContainer').classList.add('show');
  document.getElementById(container).classList.remove('show');
  document.getElementById(container).classList.add('hidden');
  document.getElementById(square).classList.add('hidden');
  document.getElementById('signedIn').classList.remove('hidden');
  document.getElementById('signedIn').classList.add('show');
}
export { loadLoginForm, loadSignupForm, validateLogIn, validateSignUp, displayHTMLafterLogIn, hashedPassword, setLocalStorageJSON, getLocalStorageJSON, backButton};

