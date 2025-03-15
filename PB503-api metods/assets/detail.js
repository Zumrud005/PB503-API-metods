const BASE_URL = "https://fakestoreapi.com";


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");


function getDataById(endpoint,id){
     fetch(`${BASE_URL}/${endpoint}/${id}`).then((res)=>{
       return res.json()
       .then((data)=>{
       displayDetails(data)
       }).catch((err)=>{
        console.log(err)
    })
})
}


getDataById("products", productId);




function displayDetails(product){
    const title = document.querySelector("#product-title")
    const desc = document.querySelector("#description")
    const price = document.querySelector("#product-price")
    const rating = document.querySelector("#product-rating")
    const category = document.querySelector("#product-category")


    title.textContent = product.title
    desc.textContent = product.description
    price.textContent = product.price
    rating.textContent = product.rating.rate
    category.textContent = product.category
}

function goBack() {
    window.history.back();
}
