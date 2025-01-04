
function collectData() {
    const productName = document.getElementById(`productName`).value
    const productPrice = document.getElementById(`productPrice`).value
    const productType = document.getElementById(`productType`).value
    const productLink = document.getElementById(`productLink`).value

    return {
        id: Date.now(),
        name,
        price,
        type,
        link,
    }
}

function generateHTML(data) {
    const newHTML = `
    <tr>
                <td>${product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>${product.category}</td>
                <td><img src="${product.image}" alt="Product Image"></td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>`
    return newHTML
}

// A function that adds a new HTML to the task container
function renderHTML(newHTML) {
    const productsTable = document.getElementById(`productsTable`)
    productsTable.innerHTML += newHTML
}

// A function for clearing the form after we add a new task
function clearForm() {
    // Clears it
    const productForm = document.getElementById(`formContainer`)
    productForm.reset()

    //Set it on the textarea 
    const productNameInput = document.getElementById(`productName`)
    descriptionInput.focus()
}

// A function to save a task i gets(taskObject) to the local storage
function saveProductToLocalStorage(taskObject) {
    //Get JSON from local storage
    const currentTasksInStorageJSON = localStorage.getItem(`tasks`)

    //Converts JSON to JavaScript object
    const currentTasksInStorage = JSON.parse(currentTasksInStorageJSON)

    //The object we got is an array, push another item to the array
    currentTasksInStorage.push(taskObject)

    //Converts it back to JSON and saves it back to the local storage
    localStorage.setItem(`tasks`, JSON.stringify(currentTasksInStorage))
}

// A function for the first time we run the program that creates an empty array for us to add tasks into
function initStorage() {
    const currentProductJSON = localStorage.getItem(`products`)
    if (!currentProductJSON) {
        localStorage.setItem(`products`, JSON.stringify([]))
    }
}


function loadProductFromLocalStorage() {
    const ProductJSON = localStorage.getItem(`products`)
    if (ProductJSON) {

    }
}



function deleteProduct() {
}


// A function that adds a new task and validates if the time&date are currect
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
