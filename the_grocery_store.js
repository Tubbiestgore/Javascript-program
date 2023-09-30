// This simple program is meant to demonstate Recursion in the Javascript language. 
// The theme of this progarm is people waiting in line at the grocery store, to have
// their groceries processed.

// Defines an array of people waiting in line at the grocery store, with all of their grocieries.
// We'll work more with arrays in another file.
const line = [
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
    if (line.length === 0) 
    {
      console.log("No more customers in line. The line is empty.");
      return;
    }
  
    // Get the first person in line
    const person = line.shift();
    console.log(`Now serving ${person.name}`);
  
    // Calls the groceries function to processe this persons groceries.
    groceries(person);

    // Calls the funciton again to start serving the next person in line.
    serveNextPerson(line);
  }
  
  // Seperate function to process the groceries of a person
  function groceries(person) 
  {
    console.log(`Processing groceries for ${person.name}:`);
    for (const item of person.groceries) 
    {
      console.log(`- ${item}`);
    }
    console.log(`${person.name}'s groceries have been processed.`);
  }

  // Calls the recursive function in order to start serving more customers.
  serveNextPerson(line);


  // Output:
  // Now serving Hannah
  // Processing groceries for Hannah:
  // - Apples
  // - Bannanas
  // - Bread
  // Hannah's groceries have been processed.
  // Now serving Peter
  // Processing groceries for Peter:
  // - Milk
  // - Eggs
  // -Cheese
  // Peter's groceries have been processed.
  // Now serving Luke
  // Processing groceries for Luke:
  // - Cereal
  // - Juice
  // - Yogurt
  // Luke's groceries have been processed.
  // Now serving David
  // Pocessing groceries for David:
  // - Chips
  // - Soda
  // - Cookies
  // David's groceries have been processed.
  // Now serving Elizabeth
  // Processing groceries for Elizabeth
  // - Chicken
  // - Vegetables
  // - Rice
  // Elizabeth's groceries ahve been processed.
  // No more customers in line. The line is empty.