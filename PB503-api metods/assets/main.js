const BASE_URL ="https://fakestoreapi.com"

function getAllData(endpoint) {
    fetch(`${BASE_URL}/${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            
            drawCards(data);
            drawTables(data)
            
        })
        .catch((err) => console.log(err));
    }
    
    getAllData("products");
    
    
    function drawCards(datas) {
        
        const cardsContainer = document.querySelector(".cards");
        cardsContainer.innerHTML = ""; 
        
        datas.forEach((data) => {
       
        const wrapper = document.createElement("div");
        wrapper.className = "col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-4";

        wrapper.innerHTML = `
   
        <div class="card mb-5" style="width: 18rem; cursor: pointer;">
            <div class="img-wrapper">
                <img src="${data.image}" class="card-img-top" alt="${data.title}">
            </div>
            <div class="card-body">
                <h5 class="card-title"><strong>${data.title}</strong></h5>
                <p class="card-text">Price: ${data.price}</p>
                <p class="card-text">Rating: ${data.rating.rate} &#9733;</p>
                <p class="card-text">Category: ${data.category}</p>
                <a href="details.html?id=${data.id}" class="btn btn-primary" style="text-decoration:none;">View Details</a>
            </div>
        </div>
       `;
       
               cardsContainer.appendChild(wrapper);
    
    });
    





    }
