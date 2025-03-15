const BASE_URL = "https://fakestoreapi.com";

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const price = document.getElementById("price").value.trim();
    const rating = document.getElementById("rating").value.trim();
    const category = document.getElementById("category").value.trim();

    if (!title || !description || !price || !rating || !category) {
        alert("Fill all inputs!");
        return;
    }

    const newProduct = {
        title: title,
        price: parseFloat(price),
        description: description,
        category: category,
        rating: { rate: parseFloat(rating), count: 1 }
    };

    addNewData("products", newProduct);
});

function addNewData(endpoint, payload) {
    fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("Success:", data);
        alert("Product added successfully!");

     
        document.querySelector("form").reset();
    })
    .catch((err) => console.error("Error:", err));
}


