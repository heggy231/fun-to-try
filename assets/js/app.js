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
  var favoriteWebsiteRealLink = favoriteWebsiteInputStr.link("http://" + favoriteWebsiteInputStr);

  var yourWebsiteArea = document.getElementById("favorite-website");
  
  yourWebsiteArea.innerHTML = yourFavWebSite;

} // <-- code ABOVE this line for challenge #3 & bonus
