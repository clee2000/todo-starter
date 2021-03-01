function addNewList() {
    alert('hello world!');
}

function addListItem() {
    let list = document.getElementById("grocery-list");
    let itemInput = document.getElementById("new-list-item");
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
    console.log("hello world!")
}

function deleteListItem(item) {
    item.parentNode.removeChild(item);
}

function completeListItem(item) {
    if (item.checked) {
        item.parentNode.style.textDecoration = "line-through";
    } else {
        item.parentNode.style.textDecoration = "none";
    }
}