## Typing Test - COMP1004-Project
__Description:__

This project is a typing test web application developed as a project for the COMP1004 module.
It is built using HTML, CSS, and JavaScript. 
The purpose of this application is to measure typing abilities and offer repeatable exercises to improve typing speed and give data to view progress.

__Features:__

    Typing Test: 
    Users can take a timed typing test and have a result returned.
    The average difficulty is higher due to the complexity of the words in the tests. 
    This is important to be effective practise, helping with spelling and musucle memory 
    with less familiar words.

    Timer:
    Users can decide the length of their typing test in segements of 30s, up to 120s. 

    Difficulty Options:
    Users can customize the typing test by selecting difficulty options such as punctuation, 
    capitalization, and paragraphs. 
    Important to note paragraphs contain capitalization and puncutation, 
    however they are in a more natural placement, making paragraphs an exclusive option.
    
    User Authentication:  
    Users can log in or sign up to access the typing test.

    Responsive Design:
    Your inputted words are shown to be corrected/incorrect live on the words you're 
    expected to input, shown by css styling.
    
    Dark Mode & Light Mode:
    The application supports both based on the user's system settings.
    Note: May not work in all browsers. 
    (Works on chrome but not firefox etc)

    Viewable Performance Metrics:
    Your WPM is stored, shown as a graph/stats screen or to be exported and downloaded as a json file.
    Other stats such as number of tests taken and number of correct words is also shown. 

__Prerequistes__

    - Latest version of Python OR Visual Studio Code
    - Python used to allow the bat file to function
    - Visual Studio Code to run the task ">Live Prievew: Start Server" 
    - Visual Studio Code would require Live Preview/Live Server or a similar extension for this to work. 

    This is needed to allow the function 'getUserInformation()' to fetch data from the JSON file.
    Without this setup, server-side scripting through Node.js would be required to fetch the data, 
    which as far as I'm aware, we're not supposed to use.

__Getting Started__

To run this project locally, follow these steps:

    1. Clone this repository to your local machine.
    2. Ensure python is installed on your device. 
    -   Visual Studio Code is an alternative.
    3. Run the bat file to start a local web server, allowing the JSON file to be accessed. 
    -   Alternatively, Run the task '> Live Preview: Start Server' within Visual Studio Code.
    4. Open the index.html file in your web browser.
    5. Log in with existing credentials from the json file or sign up for a new account.
    6. Customize the test options and start the typing test by typing in the input field. 

__Credits__

    Author: Max Ferguson
