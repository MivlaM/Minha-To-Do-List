const toDoList = document.querySelector('.form-add-todo')
const formInputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const addNewToDo = event => {
  event.preventDefault()
  
  const toDoText = event.target.add.value.trim()
  
  if (toDoText.length){
    
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${toDoText}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>`
  
    event.target.reset()
  }
}

toDoList.addEventListener('submit', addNewToDo)

const toDoDeleteItem = event => {
  const clickedElement = event.target
  const isDeleteIncluded = Array.from((clickedElement.classList)).includes('delete')

  if (isDeleteIncluded) {
    clickedElement.parentElement.remove()
  }
}

todosContainer.addEventListener('click', toDoDeleteItem)
  
const toDoSearchItem = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const containerArray = Array.from(todosContainer.children)
  
  containerArray
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
  })
  
  containerArray
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('hidden')
      todo.classList.add('d-flex')
  })
}

formInputSearchTodo.addEventListener('input', toDoSearchItem)