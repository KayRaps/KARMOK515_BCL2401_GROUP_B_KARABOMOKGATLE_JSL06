// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu')
    
    // Get the menu container element from the HTML
    //const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
      const categoryElement = document.createElement('h3');
      categoryElement.textContent = category;
      menuContainer.appendChild(categoryElement);  
      const listElement = document.createElement('ul');


      //Looping throuhg items in the category
      items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;


        //Adding click event listener to each item to trigger addToOrder function
        listItem.addEventListener('click', () => addToOrder(item));
        listElement.appendChild(listItem);
      });
      menuContainer.appendChild(listElement);
    }

}

    //Function to add an item to the order list
    function addToOrder(itemName) {
        const orderItemList = document.getElementById('order-items');
        const orderTotalElem = document.createElement('li');
        orderItem.textContent = itemName;
        orderItemList.appendChild(orderItem);
        const currentTotal = parseFloat(orderTotalElem.textContent);
        const itemPrice = 90; //Cusomizing the item price (assumed R90 per item)
        const newTotal = (currentTotal + itemPrice).toFixed(2);
        orderTotalElem.textContent = newTotal;
    }

    //Function to initialise the menu system
    function initMenuSystem() {
        displayMenuItems(menu);
    }

    initMenuSystem();

        // Create an element to represent the category

        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items

        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items

            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order

            // Append the list item to the list of items

            


// Callback function for adding an item to the order
//function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
//}

// Function to initialize the menu system
//function initMenuSystem(menu) {
    // Call the function to display menu items
//}

// Start the menu system by calling the init function
//initMenuSystem(menu);
