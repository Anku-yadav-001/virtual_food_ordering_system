console.log("<--------INFORMATION FOR WAITERS--------->")
console.log("");
let processing_order = document.getElementById('processing')
processing_order.style.display = 'none';
function orderfood() {
    let lengthOfSelectedFood = check_selected_food()
    console.log("Selected food :" + lengthOfSelectedFood);
    if (lengthOfSelectedFood.length === 0) {
        alert("Please select atleast one item in given list.")
        return;
    }
    else {
        processing()
    }

    let order_promise = new Promise(function (resolve, reject) {
        let order_placing_time = Math.floor(Math.random() * 5)
        console.log("order_palcing_time :" + order_placing_time);
        setTimeout(() => {
            resolve()

        }, order_placing_time * 1500);
    })
    order_promise.then(() => {
        processing_order.style.display = 'none'
        show_order_confirmation(lengthOfSelectedFood)
    })
}

function check_selected_food() {
    let selectedFood = document.querySelectorAll('#rest_items input[type="checkbox"]:checked')
    return Array.from(selectedFood).map((item) => item.value)
}

function processing() {
    processing_order.style.display = 'block';
}

function show_order_confirmation(lengthOfSelectedFood) {
    let order_id = orderID()
    console.log("Order_id :" + order_id)
    let food_image = food_images_container(lengthOfSelectedFood)

    document.getElementById('showFoodImage').src = food_image;
    document.getElementById('orderID').innerText = `Order-ID:- ${order_id}`
}
function orderID() {
    return Math.floor(Math.random() * 10000000)
}

function food_images_container(lengthOfSelectedFood) {
    food_images_list = {
        Pizza: "https://th.bing.com/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?w=302&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Burger: "https://prairiemeats.ca/wp-content/uploads/2019/12/Burger-Stock.jpg",
        ColdDrink: "https://th.bing.com/th/id/OIP.iGwIldjKja5_xH99Z0qp0wHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Noodels: "https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-2.jpg",
        Dosa: "https://th.bing.com/th?id=OIP.Lh8HbXKOty5KkPZ31P6dxQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        Sambhar: "https://th.bing.com/th/id/OIP.oh6kGtPutHB3vLDUlGfE2AHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Tandoori: "https://th.bing.com/th?id=OIP.-Un_Q6HAzOFEv7XKdle2iAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        Cheese: "https://www.contracttesting.com/wp-content/uploads/2018/11/shutterstock_419194129.jpg"
    }

    let default_selected_image = ''

    lengthOfSelectedFood.forEach((item) => {
        if (food_images_list[item]) {
            default_selected_image = food_images_list[item]
        }

    })
    return default_selected_image
}

