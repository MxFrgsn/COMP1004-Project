let user_stats = {}; // object to store user stats

function loadStats() {
  // Changes class of the outside container to show the stats
  document.getElementById('outsideContainer').classList.remove('show');
  document.getElementById('outsideContainer').classList.add('hidden');
  document.getElementById('outsideContainerForStats').classList.remove('hidden');
  displayStats();
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
  // Calculates the user's stats 
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
  // Displays the user's stats on the website 
  let user = JSON_data.users.find(user => user.username === current_user.username);
  let stats = user.typingStats;  
  // Display the chart on the website
  deleteChart();
  displayChart(stats);
  // Display the stats on the website
  let display_stats = document.querySelector("#stats p");
  if (stats != undefined) 
  {
    display_stats.innerHTML = "";
    const span_word = document.createElement("span"); 
    span_word.style.whiteSpace = 'pre-line';
    span_word.textContent = `${stats.averageWPM} average WPM \n  ${stats.totalWordsTyped} words typed \n ${stats.totalCharactersTyped} characters typed \n ${stats.totalTestsTaken} tests taken \n ${stats.totalPlayTimeInSeconds} seconds played`; 
    display_stats.appendChild(span_word);
  }  
}

function displayChart(stats) {
  // Displays the user's WPM over time on a chart using Chart.js
  let ctx = document.getElementById('chart').getContext('2d');
  let data_points = stats.WPMList;
  let labels = data_points.map((_, index) => `Session ${index + 1}`); 
  window.myChart = new Chart(ctx, {
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

function deleteChart()
{
  // Deletes the chart from the website, allowing new data to be added to the chart
  // Also allows other users chart to be shown
  if (window.myChart)
{
    window.myChart.destroy();
    window.myChart = null;
 }
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
