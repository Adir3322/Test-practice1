
function collectData() {
    const productName = document.getElementById(`productName`).value
    const productPrice = document.getElementById(`productPrice`).value
    const productType = document.getElementById(`productType`).value
    const productLink = document.getElementById(`productLink`).value

    return {
        id: Date.now(),
        productName,
        productPrice,
        productType,
        productLink,
    }
}

function generateHTML(data) {
    const newHTML = `
    <tr class="data-id="${data.id}">
                <td>${data.productName}</td>
                <td>${data.productPrice}</td>
                <td>${data.productType}</td>
                <td><img src="${data.productLink}" alt="Product Image"></td>
                <td><button class="deleteButton" onclick="deleteProduct(${data.id})">Delete</button></td>
            </tr>`
    return newHTML
}

// A function that adds a new HTML to the 
function renderHTML(newHTML) {
    const productsTable = document.getElementById(`productsTable`)
    productsTable.innerHTML += newHTML
}

// A function for clearing the form after we add a new task
function clearForm() {
    // Clears it
    const productForm = document.getElementById(`productForm`)
    productForm.reset()

    //Set it on the textarea 
    const productNameInput = document.getElementById(`productName`)
    productNameInput.focus()
}

// A function to save a task i gets(taskObject) to the local storage
function saveProductToLocalStorage(productObject) {
    //Get JSON from local storage

    const currentProductsInStorageJSON = localStorage.getItem(`products`)

    //Converts JSON to JavaScript object

    const currentProductsInStorage = JSON.parse(currentProductsInStorageJSON)
    // Pushes into the arrat
    currentProductsInStorage.push(productObject)
    // converts and sets it in the local storage
    localStorage.setItem(`products`, JSON.stringify(currentProductsInStorage))
}


function initStorage() {
    const currentProductsJSON = localStorage.getItem(`products`)
    if (!currentProductsJSON) {
        localStorage.setItem(`products`, JSON.stringify([]))
    }
}


function loadProductFromLocalStorage() {
    const ProductJSON = localStorage.getItem(`products`)
    if (ProductJSON) {
        const products = JSON.parse(ProductJSON)
        for (const product of products) {
            const newHTML = generateHTML(product)
            renderHTML(newHTML)
        }
    }
}



function deleteProduct(id) {
    // removes product form data base
    let products = JSON.parse(localStorage.getItem(`products`))
    const newProducts = products.filter((product) => product.id !== id)
    localStorage.setItem(`products`, JSON.stringify(newProducts))

}


// A function that adds a new product
function addProduct(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    saveProductToLocalStorage(data)
    clearForm()
}

initStorage()
loadProductFromLocalStorage()
