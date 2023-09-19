
const submitButton = document.getElementById("btnSubmit")
const tasks = document.getElementById("tasks")
const messageElement = document.getElementById("message")
const clearButton = document.getElementById("btnClear")
const messageGreetings = "Good, you have no tasks today! :)"

submitButton.addEventListener('click', addTask)
tasks.addEventListener('click', handleTaskClick)
clearButton.addEventListener('click', clearList)


displayMessage(messageGreetings)

function clearList() {
    const taskList = tasks.getElementsByClassName("list-group-item")
    while (taskList.length > 0) {
        taskList[0].parentNode.removeChild(taskList[0])
    }
    displayMessage(messageGreetings)

}

function handleTaskClick(event) {
    const style = event.target.style
    if (!style.textDecoration) {
        style.textDecoration = 'line-through'
    } else {
        style.textDecoration = '';
    }

}

function addTask() {
    const newTask = document.getElementById("newTask")
    if (inputIsValid(newTask.value)) {
        //tasks.innerHTML += '<li class = "list-group-item">' + newTask.value + '</li>' sau
        tasks.innerHTML += `<li class = "list-group-item">${newTask.value}</li>` //string literal
        newTask.value = ''
        messageElement.style.visibility = 'hidden'
    } else {
        displayMessage("Cannot submit empty string!")
    }

}

function inputIsValid(input) {
    if (input) {
        return true
    }
    return false
}

function displayMessage(message) {
    messageElement.innerText = message
    messageElement.style.visibility = 'visible'
}

