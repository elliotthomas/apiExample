console.log("IN JS");

var searchResults = []

$( document ).ready(function(){
console.log("IN JQ");

//begin click function
$("#searchButton").on("click", function(){
console.log("on click for Search");
//get user input for a search
var movieName = $("#searchIn").val();
console.log(movieName);

var sanitizeMovieName = function (){
  if (movieName.length == 0){
    alert("Please enter a movie name!");
  } else {
    return movieName;
  }
};//end sanitizeMovieName function
//check input box
//get json from website URL
var movieSearch = 'http://www.omdbapi.com/?s=' + sanitizeMovieName();
console.log('movie search:', movieSearch);
//ajax call
  $.ajax({
    url: movieSearch,
    dataType:'JSON',
    success: function( data ){
      console.log('ajax success data:', data.Search);
      //store search results
      searchResults = data.Search
      console.log('search results:', searchResults);
    }//end success
  });//end ajax call
  var displayMovies = function (){
    console.log("in displayMovies!!");
    //loop through search results and display
    var outputText = ""
    $("#outputText").empty()
    for (var i = 0; i < searchResults.length; i++) {
      outputText += "<p><strong>" + searchResults[i].Title + "</strong>" + " " + searchResults[i].Year + "</p>";
      outputText += '<img src="' + searchResults[i].Poster + '" />';
    }//end for
    $("#output").html(outputText);
  };//end display movies function expression
  displayMovies();
});//end click function
});//end doc ready function
