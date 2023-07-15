const menu_cards = document.getElementById("menu-cards");

function appendOnUI(food_item) {
    menu_cards.innerHTML += `
    <div id="food-item-card">
        <div id="food-item-img">
            <img src=${food_item.imgSrc} alt="">
        </div>
        <div id="food-item-details">
            <div id="food-item-title-price">
                <p>${food_item.name}</p>
                <p>$ ${food_item.price} /-</p>
            </div>
            <button type="submit" id="add-button">+</button>
        </div>
    </div>`
}

/* 
    On the load of the screen run this function and 
    In this function you'll make an call using fetch 
    to get the food items from the JSON and show them to a user;
*/
/* TECHNIQUE 1 */
/* window.onload = async function getMenu() {
    const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        if (i < 5) {
            appendOnUI(data[i]);
        }
    }
} */
/* TECHNIQUE 2 */
(function getMenu() {
    return fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                if (i < 5) {
                    appendOnUI(data[i]);
                }
            }
        })
        .catch((error) => {
            console.log("Error encountered while fetching the menu", error);
        });
}());



