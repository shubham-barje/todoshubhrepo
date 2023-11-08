let inputbox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask(){
    if (inputbox.value === '') {
        alert("You must have to write someting");
    } else {
        //To add task 
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        //to cut the task (the cross sign)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // inputbox.value = "";
    savedata()//to save data in localstorage
}

//to checked and unchecked
listContainer.addEventListener("click",function(ef){
    if (ef.target.tagName === "LI") {
        ef.target.classList.toggle("checked");
        savedata()
        
    } else if(ef.target.tagName === "SPAN") {
        ef.target.parentElement.remove();
        savedata()
    }
},false)


//to save data in localstorage
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showlisttask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showlisttask()