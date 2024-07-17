const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(inputBox.value=== '')
    {
        alert("you must write something");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // my value should be displayed as tasks, so im appending it to the list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    save();
}

// makes the tasks to be added when i click the button
listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        save();
    }
}, false);

// adds the task when i click enter
document.addEventListener("keydown", function (e) {
    if (e.target.id === "input-box" && e.key === "Enter") {
        e.preventDefault(); // Prevents the default function of Enter key
        addTask();
    }
});

// saving the tasks so that they wont be deleted while refreshing
function save()
{
    localStorage.setItem("Tasks", listContainer.innerHTML);
}

function display()
{
    listContainer.innerHTML = localStorage.getItem("Tasks");
}
display();