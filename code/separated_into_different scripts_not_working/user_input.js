
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
        checkEndOfLine(); 
        document.getElementById("inputBox").value = "";
        written_characters += word_bank[words_correct].length+1; // Add one to include spaces
      }
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

export { validateInputBox, styleWordBank };
