function addTodo(){
    var todoItems = document.getElementById("todo-item")

    // creating list tag and text
    var list = document.getElementById("list")
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItems.value)

    li.appendChild(liText)  
    todoItems.value = ""

    // Creating Edit Button
    var edtbtn = document.createElement('button')
    var edtbtnText = document.createTextNode("EDIT")
    edtbtn.appendChild(edtbtnText)

    // Creating Blank space between buttons
    var spc = document.createElement('br')
    li.appendChild(spc)

    edtbtn.setAttribute('class','btn btn-light')
    edtbtn.setAttribute('onclick','editItem(this)')

    li.appendChild(edtbtn)

    // Creating Delete Button
    var delbtn = document.createElement('button')
    var delbtnText = document.createTextNode("DELETE")
    delbtn.appendChild(delbtnText)

    delbtn.setAttribute('onclick','deleteItem(this)')
    delbtn.setAttribute('class','btn btn-danger')

    li.appendChild(delbtn)

console.log(li)
    list.appendChild(li)
}

function deleteItem(e){
    e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML = ""
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter edit value", val)
    e.parentNode.firstChild.nodeValue = editValue
}