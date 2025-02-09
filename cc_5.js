//Task 1

//Declare the customer object
const customer = {
    name: "Markum Reed",
    age: 35,
    email: "markumreed@usf.edu"
};

//Log each property
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

//Task 2

const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder() {
      console.log("Order ID: " + this.orderId);
      console.log("Total Amount: " + this.totalAmount);
      console.log("Status: " + this.status);
    }
  };
  
  order.displayOrder();   //Call the method and log the details

  //Task 3

let cartItems = ["Call of Duty", "Rocket League", "Fortnite"];  //Step 1: Declare an array with three video games

cartItems.push("Rainbow Six Siege"); //Step 2: Add a new video game to the cart

cartItems.pop(3); //Step 3: Remove the last video game from the cart

cartItems.unshift("Overwatch"); //Step 4: Add a video game at the beginning of the cart

cartItems.shift(0); //Step 5: Remove the first video game from the cart

console.log(cartItems);