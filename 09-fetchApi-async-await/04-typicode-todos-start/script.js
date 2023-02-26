const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=10')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((todo) => addTodotoDOm(todo)

            );
        });
};

const addTodotoDOm = (todo) => {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id', todo.id)
    if (todo.completed) {
        div.classList.add('done');
    }
    document.getElementById('todo-list').appendChild(div);
};

const createTodos = (e) => {
    e.preventDefault();
    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    }
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => addTodotoDOm(data))
};

const toggleComplete = (e) => {
    if (e.target.classList.contains('todo')) {

        e.target.classList.toggle('done');

        updateTodo(e.target.dataset.id, e.target.classList.contains('done'));


    }
};


function updateTodo(id, completed) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ completed }),
        headers: {
            'Content-Type': 'application/json',
        },

    }
    );
}

function deleteTodo(e) {
    if (e.target.classList.contains('todo')) {

        const id = e.target.dataset.id;
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                res.json()
            })
            .then(() => e.target.remove())


    }
}

const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.querySelector('#todo-form').addEventListener('submit', createTodos);
    document.querySelector('#todo-list').addEventListener('click', toggleComplete);
    document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);

}

init()
