function myFunction() {

    let li = document.createElement("li");
    
    // Create a text node:
    const textnode = document.createTextNode("Water");
    
    // Append the text node to the "li" node:
    li.appendChild(textnode);
    
    // Append the "li" node to the list:
    document.getElementById("myList").appendChild(li);
    }