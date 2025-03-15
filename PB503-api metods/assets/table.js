const BASE_URL ="https://fakestoreapi.com"

function getAllData(endpoint) {
    fetch(`${BASE_URL}/${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            
            drawTables(data);
            
        })
        .catch((err) => console.log(err));
    }
    
    getAllData("products");
    
    
    function drawTables(datas) {
        const tbody = document.querySelector("tbody")
        tbody.innerHTML = ""
        
        datas.forEach(data => {
            const trElements = document.createElement("tr")
            
            trElements.innerHTML = `
                     <td>${data.id}</td>
                     <td>${data.title}</td>
                     <td class="tdStyle">${data.description}</td>
                     <td>${data.price}</td>
                     <td>${data.category}</td>
                     <td>${data.rating.rate}</td>
                     <td>
                        <a  class="linkStyle" href="details.html?id=${data.id}">Link to product</a>
                     </td>
                     <td>
                       <button data-id=${data.id} class="btn delete-btn deleteStyle">Delete</button>
                     </td>

            `
            tbody.appendChild(trElements);
        });

    


    const allDeleteBtns = document.querySelectorAll(".delete-btn")

    allDeleteBtns.forEach((btn)=>{
        btn.addEventListener("click" , (e)=>{
            const id = e.target.getAttribute("data-id")
            deleteData("products",id, btn)
        })
    })

}




function deleteData(endpoint,id,deleteBtn){
    fetch(`${BASE_URL}/${endpoint}/${id}` , {
        method: "DELETE"
    }).then((res)=>{
        console.log(res)
        deleteBtn.closest("tr").remove()
    }).catch((err)=>{
        console.log(err)
    })
}