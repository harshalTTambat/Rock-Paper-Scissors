
const todoList = [];

//renderTodoList();

function renderTodoList()
{
    let todoListHTML = '';

    for (let i=0; i<todoList.length; i++)
    {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
        document.querySelector('.js-todoList')
            .innerHTML = todoListHTML;
    
    }
}

function addToDo()
{
    const inputEle = document.querySelector('.js-name-input');
    const name = inputEle.value;

    todoList.push(name);

    inputEle.value = '';
    renderTodoList();
}