const taskinput = document.getElementById('taskinput');
const addbtn = document.getElementById('addbtn');
const todolist = document.getElementById('todolist');
addbtn.addEventListener('click', addtodo);
function addtodo()
{
    const todotext = taskinput.value;
    const listitem = document.createElement('li');
    listitem.innerHTML = todotext;
    todolist.appendChild(listitem);
    taskinput.value = '';
}
