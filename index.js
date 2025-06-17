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


    const dih = document.createElement("div")
    

    const listItem = document.createElement("li")
    const task = taskInput.value
    const deleteItem = document.createElement("button")
    const clearItem = document.createElement("button")

    listItem.textContent = task
    listItem.style.fontSize = "1rem"
    listItem.style.fontFamily = "'Inter', Arial, sans-serif";
    deleteItem.textContent = "🗑️";
    clearItem.textContent = "✅";

    deleteItem.setAttribute("id","delete-button")
    clearItem.setAttribute("id","clear-button")
    deleteItem.classList.add("delete-button")
    clearItem.classList.add("clear-button")
    dih.setAttribute("id", "dih-box")

    listItem.append(deleteItem)
    listItem.append(clearItem)
    dih.append(listItem)
    controlList.append(dih)

    deleteItem.addEventListener("click", function(){
        setTimeout(function(){dih.remove()},100)
        const deleteItem = new Audio("sound/delete.mp3")
        deleteItem.play()
    })
    clearItem.addEventListener("click", function(){
        setTimeout(function(){listItem.style.color = "gray"
        listItem.style.textDecoration = "line-through";
        const complete = new Audio("sound/chime1-trimmed.mp3")
        complete.play()}, 50)
    })

    taskInput.value = "";

    const wordCount = task.trim().split(/\s+/).length;
    if(wordCount >= 20){
        listItem.style.fontSize = "0.7rem"
    }
})
