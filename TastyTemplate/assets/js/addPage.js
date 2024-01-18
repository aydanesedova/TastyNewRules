let nameinp = document.getElementById("nameinp")
let priceinp = document.getElementById("priceinp")
let titleinp = document.getElementById("titleinp")
let myForm = document.getElementById("myForm")
let addBtn = document.getElementById("addBtn")


myForm.addEventListener("submit", function (event) {
    event.preventDefault()
    axios.post("https://655c83b725b76d9884fd6e9b.mockapi.io/products", {
        name: nameinp.value,
        title: titleinp.value,
        price: priceinp.value,
    })
        .then((res) => {
            console.log(res.data);
            myForm.reset()
        })
})
addBtn.addEventListener("click", myForm)


const renderproducts = () => {
    console.log('basildi');
    addProducts.innerHTML = ``
    axios.get('https://655c83b725b76d9884fd6e9b.mockapi.io/products')
        .then((res) => {
            db = res.data
            db.map((item) => {
                let miniDiv = document.createElement("div")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
        <h2>Title:${item.title}</h2>
        <h2 class= "nameItem">Name:${item.name}</h2>


        <button onclick="deleteFromForm(${item.id})">Delete</button>

        `
                addProducts.appendChild(miniDiv)
            })

        })
}

function deleteFromForm(id) {
    axios
        .delete(`https://655c83b725b76d9884fd6e9b.mockapi.io/products/${id}`)
        .then((res) => {
            renderproducts()
            console.log(deleteFromForm);
        });
}

    renderproducts()



let sortBtnAZ = document.getElementById("sortBtnAZ")
function sortAZ() {
    console.log('az isledi');
    addProducts.innerHTML = ``
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            db = res.data
            let sortDataAZ = db.sort((a, b) => a.title.localeCompare(b.title))
            sortDataAZ.map(item => {
                let miniDiv = document.createElement("div")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
    <h2>Title:${item.title}</h2>
    <h2 class= "nameItem">Name:${item.name}</h2>
    <button onclick="deleteFromForm(${item.id})">Delete</button>

    `
                addProducts.appendChild(miniDiv)
                console.log(sortAZ);
            })
        })
}


sortBtnAZ.addEventListener("click", sortAZ)




let sortBtnZA = document.getElementById("sortBtnZA")
function sortZA() {
    addProducts.innerHTML = ``
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            db = res.data
            let sortDataZA = db.sort((a, b) => b.title.localeCompare(a.title))
            sortDataZA.map(item => {
                let miniDiv = document.createElement("div")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
    <h2>Title:${item.title}</h2>
    <h2 class= "nameItem">Name:${item.name}</h2>
    <button onclick="deleteFromForm(${item.id})">Delete</button>

    `
                addProducts.appendChild(miniDiv)

            })
        })
}


sortBtnZA.addEventListener("click", sortZA)

const sortDefaultbtn = document.getElementById("sortDefaultbtn")


sortDefaultbtn.addEventListener("click", renderproducts)





const searchBtn = document.getElementById("searchBtn")
const inpSearch = document.getElementById("inpSearch")



function findByName() {
    addProducts.innerHTML = ``
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            db = res.data
            let filteredData = db.filter(item => item.title.toLowerCase().startsWith(inpSearch.value.toLowerCase()))
            let sortData = [...filteredData].sort((a, b) => a.title.localeCompare(b.title))
            sortData.map(item => {
                let miniDiv = document.createElement("div")
                miniDiv.className = "miniDiv"
                miniDiv.innerHTML = `
<h2>Title:${item.title}</h2>
<h2 class= "nameItem">Name:${item.name}</h2>
<button onclick="deleteFromForm(${item.id})">Delete</button>

`
                addProducts.appendChild(miniDiv)
            })
        })
}

searchBtn.addEventListener("click",findByName)




