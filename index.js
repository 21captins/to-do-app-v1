const taskButton =  document.querySelector("#add-btn")
const taskInput  = document.querySelector("#input-field")

const controlList = document.querySelector("#tasks-list")
controlList.style.listStyleType = "none"



taskButton.addEventListener("click", function(){

    const taskText = taskInput.value.trim();
    if (taskText === ""){
        alert("Please enter a task!");
        return;
    }

    const listItem = document.createElement("li")
    const task = taskInput.value
    listItem.textContent = task
    listItem.style.fontSize = "1rem"
    listItem.style.fontFamily = "'Inter', Arial, sans-serif";

    const deleteItem = document.createElement("button")
    const clearItem = document.createElement("button")
    deleteItem.addEventListener("click", function(){
        listItem.remove()
        const deleteItem = new Audio("sound/delete.mp3")
        deleteItem.play()
    })
    clearItem.addEventListener("click", function(){
        listItem.style.color = "gray"
        listItem.style.textDecoration = "line-through";
        const complete = new Audio("sound/chime1-trimmed.mp3")
        complete.play()
    })

    deleteItem.textContent = "🗑️";
    clearItem.textContent = "✅";

    deleteItem.setAttribute("id","delete-button")
    clearItem.setAttribute("id","clear-button")
    deleteItem.classList.add("delete-button")
    clearItem.classList.add("clear-button")

    listItem.append(deleteItem)
    listItem.append(clearItem)
    controlList.append(listItem)

    taskInput.value = "";
})
