// message in the console
console.log("Hi there, welcome to the JavaScript console!");

// initialize the application
var app = new Object();

app.shakePokeball = function shakePokeball() {
  // code BELOW this line for challenge #1 -->
  var pokeball = document.getElementById("pokeball");
  pokeball.className = "shake";
} // <-- code ABOVE this line for challenge #1

app.setName = function setName() {
  // code BELOW this line for challenge #2 -->
  // prompt the user by asking what is your name? and save it
  var userPromptName = prompt("What is your name?");
  // grab the area where name will go
  var yourNameArea = document.getElementById("first-name");
  // write on name area with the earlier user prompt
  yourNameArea.innerHTML = userPromptName;

} // <-- code ABOVE this line for challenge #2

app.setWebsite = function setWebsite() {
  // code BELOW this line for challenge #3 & bonus -->
  var yourFavWebSite = prompt("What is your favorite website?");

  // display a string as a hyperlink "<a href="http://www.google.com">www.google.com</a>"
  // var favoriteWebsiteRealLink = favoriteWebsiteInputStr.link("http://" + favoriteWebsiteInputStr);

  var yourWebsiteArea = document.getElementById("favorite-website");
  
  yourWebsiteArea.innerHTML = '<a href=http://' + yourFavWebSite + '>find out here!</a>';

} // <-- code ABOVE this line for challenge #3 & bonus


/*
Refactor the setWebsite function in order for it to not just render the website as text, but to render it as a clickable anchor element with the href set to the URL of the user's favorite website they're prompted for and the display text of the anchor element set to "find out here!".

Hint: Don't forget to add http:// to the beginning of the site URL if you want the link to work!

var promptVariable = www.google.com
https:// + promptVariable 

End goal: <a href="https://www.google.com">find out here!</a>
*/