### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

## Ans :

\*getElementById("id") : Single element by id. one id access the one element.

\*getElementsByClassName("class") : Multiple element by class. It can access many things at once.

\*qureySelector("selector") : First match css selector.

\*quereySelectorAll("selector") : Static NodeList all matches access.

### 2. How do you **create and insert a new element into the DOM**

Ans :
const myDiv = document.createElement("div");
myDiv.innerText = "create a div";
document.body.appendChild(myDiv);

### 3. What is **Event Bubbling** and how does it work?

Ans : Event Bubbling : Event goes from target element - parent - document (bottom to top).

### 4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans :
Event Delegation : One parent listener handles events of child elements.Save memory,works on dynamic elements.

### 5.What is the difference between **preventDefault() and stopPropagation()** methods?

Ans :
preventDefault() : Stops default action link open.

stopPropagation() : Stops event bubbling.
