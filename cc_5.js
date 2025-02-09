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