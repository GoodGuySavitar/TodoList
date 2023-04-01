let count = 0;
const taskName = document.querySelector("#name")
const desc = document.querySelector("#desc")
const dateInput = document.querySelector("#date")
const assignInput = document.querySelector("#assign")
document.querySelector("#add-task").addEventListener("click", (e) => {
    e.preventDefault();

    if(!taskName.value){
        taskName.style.backgroundColor = "#FADBD8"
        return 
    }
    if(!desc.value){
        desc.style.backgroundColor = "#FADBD8"
        return 
    }
    if(!dateInput.value){
        dateInput.style.backgroundColor = "#FADBD8"
        return 
    }
    
    const output = `<div class="checkbox-container">
    <div class="checkbox" onclick = "done(event)">
    
    </div>
    </div> 
    <div class="todo-content">
        <h4 class="todo-title">
            ${taskName.value}
        </h4>
        <div class="todo-desc"> 
            ${desc.value}
        </div> 
        <div class="todo-info">
            <div class="todo-date"><i class="fa-regular fa-calendar"></i> ${dateInput.value}</div> 
            <div class="todo-assign"> <i class="fa-regular fa-user"></i> ${assignInput.value}</div>
        </div>       
    </div>
    <div class="todo-delete"><i class="fa-regular fa-trash-can delete" onclick ="del(event)"></i></div>
    `

    const li = document.createElement("li")
    li.classList.add("todo")
    li.innerHTML = output
    document.querySelector(".new-todos").appendChild(li)
    document.querySelector(".add-task").reset()
    count++
    document.querySelector(".todoCount").textContent = count
    taskName.style.backgroundColor = "#fff"
    desc.style.backgroundColor = "#fff"
    dateInput.style.backgroundColor = "#fff"
})

document.querySelector("#add-new-task").addEventListener("click", function(e) {
    document.querySelector(".add-task").style.display = "block";
    this.style.display = "none";
})

document.querySelector("#cancel").addEventListener("click", function(e) {
    e.preventDefault()
    document.querySelector("#add-new-task").style.display = "block";
    this.parentElement.parentElement.parentElement.style.display = "none";
    document.querySelector(".add-task").reset()
    taskName.style.backgroundColor = "#fff"
    desc.style.backgroundColor = "#fff"
    dateInput.style.backgroundColor = "#fff"
})

function done(e){
    e.target.classList.toggle("background-gray")
    e.target.parentElement.parentElement.classList.toggle("background-green")
    e.target.parentElement.parentElement.querySelector(".todo-title").classList.toggle("line-through")
}

function del(e){
    e.target.parentElement.parentElement.remove()
    count--;
    document.querySelector(".todoCount").textContent = count
}
