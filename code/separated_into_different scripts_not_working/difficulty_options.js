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
  // Event listener for Paragraphs difficulty option
  document.getElementById('Paragraphs').addEventListener('change', (event) => {
      if (!event.currentTarget.checked) 
      {
          display_bank_p.innerHTML="";
          displayArray(word_bank);
      }	
      else
      {
      //Ensures that the other difficulty options are unchecked, as they are not compatible with the paragraph difficulty option
          document.getElementById('Capitalization').checked = false;
          document.getElementById('Punctuation').checked = false;
          display_bank_p.innerHTML="";
          displayArray(paragraph_bank);
      }
  });

  export { validateTimerOptions };