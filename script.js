const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert('You must type anyting!')
    } else {
        //first one - create the element
        const li = document.createElement('li');
        
        //second - type the input value
        li.innerHTML = inputBox.value;

        //three - append the value to listcontainer
        listContainer.appendChild(li);
        
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}


listContainer.addEventListener('click', (e) =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()