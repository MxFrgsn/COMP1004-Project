
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
          last_word.remove();   // maybe use a do-while loop instead of this at the end?
        }
      }
      i++;
    }
  }
  
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
      console.log(paragraph_bank[0]); // retest this.
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
  

export { displayArray, checkEndOfLine };