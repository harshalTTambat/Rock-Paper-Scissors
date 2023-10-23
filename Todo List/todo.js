
const todoList = [{
    name:"fuck",
    dueDate: "2023-13-10"
},
{
    name:"fuck again",
    dueDate: "2023-13-11"
}];

renderTodoList();

// this technic  use to generate html code without manually type it 
function renderTodoList()
{
    let todoListHTML = ''; 
    for (let i=0; i<todoList.length; i++)
    {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;
        const html = `
                    <div>${name}</div>
                    <div>${dueDate}</div>
                    <button
                        onclick = "
                            todoList.splice(${i}, 1);
                            renderTodoList();
                        " class="delete-todo-button">Delete
                    </button>  
                `;
        // .splice is used to delete on specified index and specified number of values
        todoListHTML += html;
        document.querySelector('.js-todoList')
            .innerHTML = todoListHTML;
    
    }
}

function addToDo()
{
    const inputEle = document.querySelector('.js-name-input');
    const name = inputEle.value;

    const inputDate = document.querySelector('.js-todo-date');
    const dueDate = inputDate.value;

    todoList.push({
        //name: name, 
        //dueDate: dueDate
        // when property and value names are same 
        //  then we can write it onece
        name,
        dueDate

    });

    inputEle.value = '';
    
    renderTodoList();
}