# JavaScript: A Brief step into a Versatile Programming Language

JavaScript, often abbreviated as JS, is a versatile and widely-used programming language that has become a cornerstone of modern web development. Known for its unique characteristics and widespread adoption, JavaScript plays a pivotal role in creating interactive and dynamic web applications. Here I hope to clarify certain unique aspects of the language and how you can get started with your own projects! 

## Node.js

In essence, Node.js is a runtime environment for executing JavaScript outside of web browsers. Yes, Javascript can be executed directly in web browsers, however for this particular projecct, I decided to use Node.Js. However, the benefit to coding in Javascript outside of a web browser is that it extends Javascripts capabilities. It allows for file I/O, network communication, and much more. Below I will provide a link to the Node.js download as well as a video tutorial for how to install it on Visual Studio Code. For purposes of this project, I will only be going into detail about this style of Javascript.

* [Educative](https://www.educative.io/blog/what-is-nodejs)
* [VS Code JavaScript Setup](https://www.youtube.com/watch?v=uFB8eu972a4)

## Syntax

JavaScript's syntax is similar to many C-style languages, making it relatively easy to learn for those familiar with programming concepts. It uses semicolons to terminate statements, curly braces to define blocks of code, and is case-sensitive as examples of its similarities. Here is an example of code:

```JS
function computerGreet(userInput) 
{
    console.log("Hello", userInput);
}

const userInput = prompt("What is your name?");
console.log(computerGreet(userInput))
```

Above we have a simple funciton demonstrating a few things about this language. We have functions that take parameters, like other languages. In order to print to the console we use "console.log" in order to get an output to the terminal. We also notice that the variable is being declared as a constance "const", there are many different ways to declare variables. Hwoever, as stated above, this language is an awful lot like C. Below I have provided some useful links to the syntax of this language.

This is for general Syntax
* [W3 Schools Online](https://www.w3schools.com/js/js_syntax.asp)
This is for commenting, style etc...
* [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)

## Unique Features

Here are some of the Unique features of this langauge, in short: 

1. First-Class Functions: 

JavaScript treats functions as first-class citizens. This means you can assign functions to variables, pass them as arguments to other functions, and return them from functions. This feature enables powerful functional programming paradigms like callbacks and closures.

2. Dynamic Typing:

JavaScript uses dynamic typing, allowing variables to change their data type at runtime. This flexibility can be both an advantage and a source of potential bugs.

3. Prototypal Inheritance:

JavaScript uses prototypal inheritance rather than classical class-based inheritance. Objects inherit properties and methods directly from other objects, leading to more flexible and concise code.

4. Event Driven and Asynchronus

JavaScript excels at event-driven programming and handling asynchronous operations using callbacks amongst other methods This is crucial for building responsive web applications and is one of the reasons Javascript is used to widley in web development.

5. JSON (Javascript Object Notation):

JavaScript's native support for JSON makes it easy to work with data interchange formats, both for sending and receiving data in web applications. This one is particularly key.

There are many more such unique features, and in more details. I would suggest reading at these sites if you want to know more:

* [Inteviewbit](https://www.interviewbit.com/blog/javascript-features/)
* [Wikepedia](https://en.wikipedia.org/wiki/JavaScript)

## Native Array ES6 Functions

In JavaScript, native array functions are, in essence, a set of built-in methods that can be used to manipulate arrays. These functions provide a concise and efficient way to perform common operations on arrays, making array manipulation in JavaScript more convenient and readable. Below I will list a few, and in this particular repository, the file "" is an example of their use, set to a particular theme.

1. 'forEach()': Executes a provided function once for each array element.
2. 'map()': Creates a new array with the results of calling a provided function on every element in the array.
3. 'find()': Returns the first element in the array that satisfies a provided testing function.
4. 'includes()': Checks if an array contains a specific element and returns true or false.
5. 'findIndex()': Returns the index of the first element in the array that satisfies a provided testing function.

These native array functions in ES6 make it easier to work with arrays, simplify code, and improve code readability by providing more expressive ways to perform common operations on arrays.
Below is more reading on this particular subject:

*[Information on Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
*[Most common functions](https://everyday.codes/javascript/8-most-used-array-operations-in-javascript-es6/)

## The NPM

An npm package for JavaScript is a collection of JavaScript code and associated files bundled together to provide a specific set of functionality or features that can be easily reused in different JavaScript projects. Npm stands for "Node Package Manager," and through this, developers can easily distribute and manage packages of code.

