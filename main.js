const todoList = JSON.parse(localStorage.getItem('list')) || [];

window.onload = () => {
   renderUList();
   const form = document.getElementById('todo-form')
   form.onsubmit = (event) => {
      const todoInput = document.getElementById('todo-input');
      const textInput = todoInput.value;
      todoInput.value = '';
      todoList.push(textInput);
      UpdateTodoList();
      renderUList();
      event.preventDefault();
   }
}

const renderUList = () => {
   const todoUList = document.getElementById('todo-ulist')
   const template = todoList.map(item => `<li>${item}</li>`)
   todoUList.innerHTML = template.join('');
   const elements = document.querySelectorAll('#todo-ulist li')
   elements.forEach( (item, index) => {
      item.addEventListener('click', () => {
         item.parentNode.removeChild(item)
         todoList.splice(index, 1)
         UpdateTodoList();
         renderUList();
      })
   })
}

const UpdateTodoList = () => {
   const tmp = JSON.stringify(todoList)
   localStorage.setItem('list', tmp)
}

