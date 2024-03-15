function timer() {
    //Checks the amount of time that has passed
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
    //Calculates WPM, which is to be displayed to the user and alerts the user that the test is finished
    WPM = written_characters / 5 / (time / 60000);
    updateWpmUI();
    alert("Test finished"); //keep idea but change this
  }
  
function updateWpmUI() {
   // Displays the WPM on the website
    let wpm_HTML = document.getElementById("WordsPerMinutes");
    let formatted_WPM = "WPM: " + WPM;
    wpm_HTML.innerHTML = formatted_WPM;
  }
export { timer, updateTimerUI, calculateWPM, updateWpmUI};