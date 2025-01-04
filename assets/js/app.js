
function collectData() {
}

function generateHTML(data) {
}

// A function that adds a new HTML to the task container
function renderHTML(newHTML) {

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
function saveTaskToLocalStorage(taskObject) {
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
    const currentTaskJSON = localStorage.getItem(`tasks`)
    if (!currentTaskJSON) {
        localStorage.setItem(`tasks`, JSON.stringify([]))
    }
}


function loadProductFromLocalStorage() {
}



function deleteProduct() {
}


// A function that adds a new task and validates if the time&date are currect
function addProduct(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data, true)
    renderHTML(newHTML)
    saveProductToLocalStorage(data)
    clearForm()

}

initStorage()
loadProductFromLocalStorage()
