import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import Todo from "./components/Todo"
import EditTodo from "./components/EditTodo"

function App() {
  const [todo, setTodo] = useState([])

  // add task
  const handleSubmit = (listData) => {
    fetch('http://localhost:1234/lists', {
      method: 'POST',
      body: JSON.stringify(listData),
      headers: { 'Content-Type': 'application/json' }
    })
    setTodo((eTodo) => [...eTodo, listData])
  }

  // get task
  useEffect(() => {
    async function fetchTodo() {
      const res = await fetch('http://localhost:1234/lists');
      const data = await res.json();
      setTodo(data);
    }
    fetchTodo()
  }, [])

  // complete todo
  const handleComplete = (id) => {
    fetch(`http://localhost:1234/lists/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: !todo.completed }),
      headers: { 'Content-Type': 'application/json' }
    })
    setTodo(todo.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )))

  }

  // delete todo
  const handleDelete = (id) => {
    fetch(`http://localhost:1234/lists/${id}`, {
      method: 'DELETE',
    })
    setTodo(todo.filter((todo) => (
      todo.id !== id
    )))
  }

  // update todo
  const handleUpdate = (id) => {
    setTodo(todo.map((todo) => (
      todo.id === id ? { ...todo, isEditable: !todo.isEditable } : todo
    )))
  }

  const editTodo = (listData, id) => {
    fetch(`http://localhost:1234/lists/${id}`, {
      method: 'PUT',
      body: JSON.stringify(listData),
      headers: { 'Content-Type': 'application/json' }
    })
    setTodo(todo.map((todo) => (
      todo.id === id ? listData : todo
    )))
  }
  return (
    <div className="col-md-4 my-3 mx-auto">
      <div className="card">
        <div className="card-header display-6 text-center">
          Rect Todo With Api
        </div>
        <TodoForm onAddTodo={handleSubmit} />
        {
          todo.map((todo, index) => (

            todo.isEditable ? (
              <EditTodo onUpdateTodo={editTodo} task={todo} />
            ) :

              <Todo task={todo} key={index}
                onComplete={handleComplete}
                onDelete={handleDelete}
                onUpdate={handleUpdate} />
          ))
        }
      </div>
    </div>
  )
}

export default App
