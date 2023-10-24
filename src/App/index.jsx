'client'
import { useEffect, useState } from 'react'
import './App.css'
import { useLocalStorage } from './services/useLocalStorage'
import { AppUI } from './AppUI'



function App() {
  const [searchValue, setSearchValue] = useState('')
  const {
    items: tasks,
    saveItems: setTasks,
    error,
    loading
  } = useLocalStorage('TASK_V1', [])

  const taskCompleted = tasks.filter(task => task.completed).length
  const taskTotal = tasks.length


  const setCompleted = (e) => {
    const newTasks = [...tasks]
    const taskIndex = newTasks.findIndex(
      (task) => task.id === e.target.getAttribute('id')
    )
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed
    setTasks(newTasks)
  }

  const searchTask = tasks.filter((task) => (
    task
      .text.toLowerCase()
      .replace(/\s/g, "")
      .includes(searchValue.toLowerCase().replace(/\s/g, ""))
  ))

  const deleteTask = (e) => {
    const newTasks = [...tasks]
    const taskIndex = newTasks.findIndex(
      (task) => task.id === e.target.parentNode.getAttribute('id')
    )
    newTasks.splice(taskIndex, 1)
    setTasks(newTasks)
  }
  const addTask = (e) => {
    console.log('New task');
    const newTasks = [...tasks]
    const input = e.target.parentNode.querySelector('input')
    const task = {
      id: input.value,
      text: input.value,
      completed: false
    }
    newTasks.push(task)
    setTasks(newTasks)

    input.value = ''
  }


  return (
    <AppUI
      loading={loading}
      error={error}
      addTask={addTask}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTask={searchTask}
      setCompleted={setCompleted}
      deleteTask={deleteTask}
      taskCompleted={taskCompleted}
      taskTotal={taskTotal}
    />
  )
}

export default App