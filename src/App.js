import React, { useState } from 'react'
import Todos from './components/Todos'

const App = () => {

  const [txt, setTxt] = useState('')
  const [todoList, setTodoList] = useState([])

  const add = () => {
    if (!txt) {
      alert("Enter Your Todo")
    } else {
      setTodoList(prev => [...prev, txt])
      setTxt("");
    }
  }
  console.log(todoList)

  const deleteAll = () => {
    setTodoList("");
  }

  return (
    <>
      <input type="text" value={txt} onChange={e => setTxt(e.target.value)} />
      <button onClick={add}>Add</button>
      <button onClick={deleteAll}>Delete All</button>

      {todoList.length > 0 ?
        todoList.map((e, i) => <Todos index={i} todoTxt={e} todoList={todoList} setTodoList={setTodoList} />)
        : <h1>NO TODOS BUDDY</h1>}

      <p style={{ position: 'fixed', bottom: 0, right: 0, marginRight: 10 }}>Developed  By <a href="https://www.facebook.com/zunair.uddin.3" target='_blank'> Zunairuddin</a></p>
    </>
  )
}

export default App;