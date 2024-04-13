
    let authenication = false; // boolean to check if user is logged in
    let JSON_data = []; // array to store json data
    let current_user = {};// string to store current user's username and password.

    function loadLoginForm() { 
    // Changes class of the outside container to show the login form
    if(timer_started)
    {
    endTest();
    }
    document.getElementById("usernameLogIn").value = "";
    document.getElementById("passwordLogIn").value = "";
        document.getElementById('outsideContainer').classList.remove('show');
        document.getElementById('outsideContainer').classList.add('hidden');
        document.getElementById('outsideContainerForLogIn').classList.remove('hidden');
    }

    function loadSignupForm() {
    // Changes class of the outside container to show the signup form
    if(timer_started)
    {
        endTest();
    }
    document.getElementById("passwordSignUp").value = "";
    document.getElementById("usernameSignUp").value = "";
    document.getElementById('outsideContainer').classList.remove('show');
    document.getElementById('outsideContainer').classList.add('hidden');
    document.getElementById('outsideContainerForSignUp').classList.remove('hidden');
    }

    function backButton(backLocation) {
    // Changes class of the outside container to show the typing test
    document.getElementById('outsideContainer').classList.remove('hidden');
    document.getElementById('outsideContainer').classList.add('show');
    document.getElementById(backLocation).classList.add('hidden');
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

    async function validateLogIn(e) {  
    // Ensures user information is correct when attempting to log in
    e.preventDefault();
        const inputted_username = document.getElementById('usernameLogIn').value;
        const inputted_password = await hashedPassword(document.getElementById('passwordLogIn').value);	
    try 
    {
        for (var i = 0; i < JSON_data.users.length; i++)
        {
        if (JSON_data.users[i].username == inputted_username && JSON_data.users[i].password == inputted_password) 
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
        user_stats = JSON_data.users[i];
        displayHTMLafterLogIn(inputted_username,'outsideContainerForLogIn');
        }
        else
        {
        e.preventDefault();
        alert("Incorrect username or password");
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
    let user_exists = false;
    // Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character
    // Uses regular expressions to check if password is valid
    const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",/?]).{8,}$/;
    try 
    {
        for (var i = 0; i <  JSON_data.users.length; i++)
        {
        if (JSON_data.users[i].username == inputted_username)
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
        let valid_password = password_regex.test(inputted_password);
        if (valid_password)
        {
            var inputted_password = await hashedPassword(inputted_password)
            current_user = 
            {
            "username": inputted_username,
            "password": inputted_password,
            "typingStats": 
            {
                "averageWPM": 0,
                "WPMList": [],
                "totalPlayTimeInSeconds":0,
                "totalTestsTaken": 0,
                "totalWordsTyped": 0,
                "totalCharactersTyped": 0,
            }
            }
            addUserToLocalStorage(current_user);
            displayHTMLafterLogIn(inputted_username,'outsideContainerForSignUp');
            user_stats = JSON_data.users.find(user => user.password === inputted_password);
        }
        else
        {
            alert("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"); 
        } 
        }
    }
    catch (error)
    {
    alert('Error during SignUp, please try again.',error);
    }
    }

    async function hashedPassword(password) {
    // Hashes the password using SHA-256, ensuring a degree of security
    password  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
    password  = Array.from(new Uint8Array(password)).map(b => b.toString(16).padStart(2, '0')).join('');
    return password;
    }

    function addUserToLocalStorage(input) {  
    // Adds the user to the local storage
    JSON_data = JSON.parse(localStorage.getItem("users"));
    JSON_data.users.push(input);
    localStorage.setItem("users", JSON.stringify(JSON_data));
    }

    async function getUserInformation() {  
    // Reads the json file and stores it in the JSON_data array
    let stored_data = localStorage.getItem('users'); // Checks if the json file is already stored in local storage
    if (stored_data!=null || stored_data!=undefined) 
    { 
        JSON_data = JSON.parse(stored_data); 
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

    function deleteAccount() {
    // Deletes Users account after confirming they
    if(confirm("Are you sure you wanna delete this account?") == true)
    {
        const index = JSON_data.users.findIndex(user => user.username === current_user.username);
        JSON_data.users.splice(index, 1); 
        localStorage.setItem('users', JSON.stringify(JSON_data));
        backButton("outsideContainerForStats");
        logOut();
    }
    }