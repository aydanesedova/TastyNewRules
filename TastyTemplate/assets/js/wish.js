function getProducts() {
    wishProducts.innerHTML = ``
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.map((item, index) => {
        let wishBox = document.createElement("div")
        wishBox.className = "wishBox"
        wishBox.innerHTML = `
<img src="${item.image}" alt="">
<h2>${item.title}</h2>
<h2>${item.count} piece</h2>

<button onclick="removeItem(${index})">Remove from Wish</button>
`
wishProducts.appendChild(wishBox)
    })
}

function removeItem(index) {
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.splice(index, 1)
    localStorage.setItem("wish", JSON.stringify(wish))
    getProducts()

}


window.onload = () => {
    getProducts()
}