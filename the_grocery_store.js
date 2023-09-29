// This simple program is meant to demonstate Recursion in the Javascript language. 
// The theme of this progarm is people waiting in line at the grocery store, to have
// their groceries processed.

// Define an array of people waiting in line at the grocery store, with all of their grocieries.
const groceryStoreLine = [
    { name: "Hannah", groceries: ["Apples", "Bananas", "Bread"] },
    { name: "Peter", groceries: ["Milk", "Eggs", "Cheese"] },
    { name: "Luke", groceries: ["Cereal", "Juice", "Yogurt"] },
    { name: "David", groceries: ["Chips", "Soda", "Cookies"] },
    { name: "Elizabeth", groceries: ["Chicken", "Vegetables", "Rice"] }
  ];
  
  // Recursive function to serve people in the grocery store line
  function serveNextPerson(line) 
  {
    // Base case: If the line is empty, we're done
    if (line.length === 0) {
      console.log("No more customers in line. The grocery store is empty.");
      return;
    }
  
    // Get the first person in line
    const person = line.shift();
    console.log(`Now serving ${person.name}`);
  
    // Process the groceries for the current person
    processGroceries(person);
  
    // Recursive call to serve the next person in line
    serveNextPerson(line);
  }
  
  // Function to process the groceries of a person
  function processGroceries(person) 
  {
    console.log(`Processing groceries for ${person.name}:`);
    for (const item of person.groceries) {
      console.log(`- ${item}`);
    }
    console.log(`${person.name}'s groceries have been processed.`);
  }
  
  // Call the recursive function to start serving customers
  serveNextPerson(groceryStoreLine);