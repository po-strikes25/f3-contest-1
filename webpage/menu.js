const menu_cards = document.getElementById("menu-cards-container");

function appendOnUI(food_item) {
    menu_cards.innerHTML += `
    <div id="food-card">
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
function getMenu() {
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
}

/* 
    This function should return a promise and 
    shoud take 2500 milliseconds to resolve the order. 
    in the resolve choose any 3 burgers randomly and 
    add them in the object;
*/
function TakeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const burgers = [
                {
                    "id": 1,
                    "name": "Cheeseburger",
                    "price": 5.99,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
                },
                {
                    "id": 2,
                    "name": "Pizza",
                    "price": 8.99,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
                },
                {
                    "id": 3,
                    "name": "Tacos",
                    "price": 3.99,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
                },
                {
                    "id": 4,
                    "name": "Sushi",
                    "price": 11.99,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
                },
                {
                    "id": 5,
                    "name": "Pasta",
                    "price": 9.99,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
                },
                {
                    "id": 6,
                    "name": "Fried Chicken",
                    "price": 7.99,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
                },
                {
                    "id": 7,
                    "name": "Grilled Cheese Sandwich",
                    "price": 4.99,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
                },
                {
                    "id": 8,
                    "name": "Steak",
                    "price": 15.99,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
                },
                {
                    "id": 9,
                    "name": "Caesar Salad",
                    "price": 6.99,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
                },
                {
                    "id": 10,
                    "name": "Fish and Chips",
                    "price": 8.49,
                    "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
                }
            ];
            const randomBurgers = [];
            const selectedBurgers = [];
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * burgers.length);
                selectedBurgers.push(burgers[randomIndex]);
            }
            const order = {
                burgers: randomBurgers
            };
            resolve(order);
        }, 2500);
    });
}

/* 
    This function also returns a promise and 
    takes 1500 milliseconds to resolve and 
    the resolve should return {order_status:true; paid:false};
*/
function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

/* 
    This function also returns a promise and 
    takes 1000 milliseconds to reolve and 
    the resolve returns the object {order_status:true; paid:true};
*/
function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000)
    });
}

/* 
    Once {paid:true} is received, 
    give an alert on the screen saying thankyou 
    for eating with us today!
*/
function thankyouFnc() {
    alert("Thank you for eating with us today !");
}

/*  
    You need to handle 4 promises back to back 
    and run the last thankyou function one after the other. 
    Use either promise chaining or async await or 
    promise methods to do the following;
*/
getMenu()
    .then(() => TakeOrder())
    .then((order) => {
        console.log("Order", order);
        return orderPrep();
    })
    .then((orderResult) => {
        console.log("Order result:", orderResult);
        return payOrder();
    })
    .then((paymentResult) => {
        console.log("Payment result:", paymentResult);
        thankyouFnc();
    })
    .catch((error) => {
        console.log("Error", error);
    });

