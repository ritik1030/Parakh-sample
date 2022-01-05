let jsonData= {
    "data": [
        {
            "name": "Cosmetics",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }
            ]
        },
        {
            "name": "Household",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }
            ]
        }
    ]
}

let content= document.getElementById("content");

console.log("welcome to the page");
loadData(jsonData);
let itemContainer= document.getElementById("itemContainer");


function loadData(data) {
   
    for (let i = 0; i < data.data.length; i++) {
        let dataContent= `<div class="itemContainer">
        <div class="itemHeading">
            <h2 class="headingName">${data.data[i].name}</h2>
        </div>
    `;

        console.log("datacontent is logged");
        content.innerHTML+= dataContent;
       

        for (let j = 0; j < data.data[i].productList.length; j++) {
            
            
            let innerContainerData = `
            <div class="itemsDetails">
                <div class="individualContainer">
                    <div class="itemData">
                        <span class="itemName">
                            <blockquote>Name: ${data.data[i].productList[j].name}</blockquote>
                        </span>
                        <span class="itemPrice">
                            <blockquote>Price: ${data.data[i].productList[j].price}</blockquote>
                        </span>
                    </div>
                    <button type="submit" id="addToCart">Add to Cart</button>
                    <button type="submit" id="removeFromCart">Remove from Cart</button>
                </div>
            </div>
            </div>`;
            
            console.log("items are logged");
          content.innerHTML+= innerContainerData;

        }     
    }
  
   
}

// Adding jsonData to localStorage




// event listeners

let addToCart = document.getElementById("addToCart");
let removeFromCart = document.getElementById("removeFromCart");

addToCart.addEventListener("click", ()=>{
    console.log("added to the cart");
    
});



