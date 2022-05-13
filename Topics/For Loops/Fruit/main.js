let product = {
    name: "Microwave",
    description: "With oven mode",
    price: 398
};

product.giveDiscount = function() {
    console.log("You have a 10% discount!");
};

product.giveDiscount(); // You have a 10% discount!
console.log(product);