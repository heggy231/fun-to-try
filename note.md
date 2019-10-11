## Practice: I choose you, Pikachu!
* Edit the code below to catch Pikachu next! It will be helpful to understand that anything written after // in JavaScript is comment. Write code below the corresponding comment. Select Pikachu based on his id, "pikachu", and change his class to "caught".

* We targeted the Charmander img element and added the class, caught. This class has the CSS rule `opacity: 0` applied to it, making the element transparent.

```js
// select the element with the `id` Pikachu and save it to a variable
var pikachu = document.getElementById("pikachu");
// change the element's class to "caught"
pikachu.className = "caught";
```

## breakfast prompt
```js
var food = prompt("What did you eat for breakfast this morning?");
console.log("You ate", food, "for breakfast");

// or 

console.log(`You ate ${food} for breakfast`);
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

## User Ouput 
### innerHTML
var newKnowledge = document.getElementById("new-knowledge");
newKnowledge.innerHTML = "how to select and manipulate DOM elements!"

## Practice together