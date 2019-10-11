## Practice: I choose you, Pikachu!
* Edit the code below to catch Pikachu next! It will be helpful to understand that anything written after // in JavaScript is comment. Write code below the corresponding comment. Select Pikachu based on his id, "pikachu", and change his class to "caught".

* We targeted the Charmander img element and added the class, caught. This class has the CSS rule `opacity: 0` applied to it, making the element transparent.

```js
// select the element with the `id` Pikachu and save it to a variable
var pikachu = document.getElementById("pikachu");
// change the element's class to "caught"
pikachu.className = "caught";
```