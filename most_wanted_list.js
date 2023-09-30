// This program is meant to demonstrate the use of various ES6 Native Array functions, with an imagined wild west wanted list.
// Relations to persons living or dead is complelty coincidental.
// Below is a list of names, height measured in cm, weight in pounds, haircolor, and eyecolor of the 20 most wanted criminals in the wild west.

var wantedList = [
    { name: "One Eyed Willy", height: 170, weight: 180, haircolor: "Black", eyeColor: "Brown" }, 
    { name: "Kissing Kate", height: 155, weight: 130, haircolor: "Blonde", eyeColor: "Blue" },
    { name: "Noping Nate", height: 175, weight: 160, haircolor: "Brown", eyeColor: "Green" },
    { name: "Justie Justin", height: 160, weight: 150, haircolor: "Red", eyeColor: "Hazel" },
    { name: "Thousand Yard Theodore", height: 180, weight: 190, haircolor: "Black", eyeColor: "Brown" },
    { name: "Big Pete", height: 190, weight: 220, haircolor: "Brown", eyeColor: "Blue" },
    { name: "Deadeye Dave", height: 175, weight: 170, haircolor: "Brown", eyeColor: "Brown" },
    { name: "Rich Rick", height: 170, weight: 160, haircolor: "Blonde", eyeColor: "Green" },
    { name: "Dusty Dimples", height: 160, weight: 140, haircolor: "Red", eyeColor: "Blue" },
    { name: "Twinkle Toes Tex", height: 155, weight: 120, haircolor: "Blonde", eyeColor: "Green" },
    { name: "Hiccup Hank", height: 165, weight: 155, haircolor: "Black", eyeColor: "Brown" },
    { name: "Rodeo Romeo", height: 180, weight: 200, haircolor: "Brown", eyeColor: "Hazel" },
    { name: "Bumblebee Bill", height: 142, weight: 100, haircolor: "Blonde", eyeColor: "Blue" },
    { name: "Hangem Henry", height: 175, weight: 180, haircolor: "Black", eyeColor: "Brown" },
    { name: "Rifleman Ralph", height: 170, weight: 160, haircolor: "Brown", eyeColor: "Brown" },
    { name: "Mr. Jones", height: 165, weight: 150, haircolor: "Brown", eyeColor: "Blue" },
    { name: "Six foot Sally", height: 180, weight: 160, haircolor: "Blonde", eyeColor: "Green" },
    { name: "Senor Sanchez", height: 170, weight: 160, haircolor: "Black", eyeColor: "Brown" },
    { name: "Running Bear", height: 175, weight: 180, haircolor: "Black", eyeColor: "Brown" },
    { name: "Zak the Zephyr", height: 150, weight: 130, haircolor: "Red", eyeColor: "Green" }
];

// Instead of prompting the user for input, we will simply take in the variables for this example
// We will take in all the information that we can in order to determine who the criminal in this case is.

const userInput = {
    height: 170,
    weight: 180,
    hairColor: "Black",
    eyeColor: "Brown"
};

// Function to determine the criminal based on user input. The easiest ES6 function to use in this situation is to use the find() function beacuse we can take in all
// variables at once, and then search the whole list in order to determine who the criminal is.

const findCriminal = (userInput) => {
    const criminal = wantedList.find((suspect) => {
        // Check if all properties match
        return (
            suspect.height === userInput.height &&
            suspect.weight === userInput.weight &&
            suspect.haircolor === userInput.hairColor &&
            suspect.eyeColor === userInput.eyeColor
        );
    });

    return criminal ? criminal.name : "No match found. This person is not on the wanted list.";
};

// Call the function to find the criminal based on user input
const criminalMatch = findCriminal(userInput);

console.log(`The criminal is: ${criminalMatch}`);