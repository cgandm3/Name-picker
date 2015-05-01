var favTvShows = ["The Young and the Restless", "The Big Bang Theory", 
	"Grey\'s Anatomy", "Scandal", "Scorpion", "Impractical Jokers", 
	"Mike and Molly", "Last Week Tonight", "Silicon Valley", "Seinfeld"];

/*console.log(favTvShows); //returns the whole object

var i;
for (i = 0; i < favTvShows.length; i++) { 
    console.log(favTvShows[i]);
}*/

/* var i = 0;
    function eachName(){
      console.log(favTvShows[i]);
      i ++; 
    }
    eachName();*/

/*var pick = Math.floor(Math.random() * favTvShows.length)
var tvPicker = favTvShows[pick];
console.log(tvPicker);*/

var tvPicker = favTvShows[Math.floor(Math.random() * favTvShows.length)];
console.log(tvPicker);