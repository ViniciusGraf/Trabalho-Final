const OpenShopping = document.querySelector(".shopping");
const CloseShopping = document.querySelector(".CloseShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector(".body");
const quantity = document.querySelector(".quantity");

OpenShopping.addEventListener("click", () => {
    body.classList.add("active");
});

CloseShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

let products = [
    {
        id: 1,
        name: "PRODUCT 1",
        images: "1.PNG",
        price: 2000
    },
    {
        id: 2,
        name: "PRODUCT 2",
        images: "2.PNG",
        price: 2000
    },
    {
        id: 3,
        name: "PRODUCT 3",
        images: "3.PNG",
        price: 2000
    },
    {
        id: 4,
        name: "PRODUCT 4",
        images: "4.PNG",
        price: 2000
    },
    {
        id: 5,
        name: "PRODUCT 5",
        images: "5.PNG",
        price: 2000
    },
    {
        id: 6,
        name: "PRODUCT 6",
        images: "6.PNG",
        price: 2000
    },
];
