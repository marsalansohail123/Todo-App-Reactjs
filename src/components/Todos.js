import React, { useState } from 'react'

const Todos = ({ todoTxt, todoList, setTodoList, index }) => {
    const [editMode, setEditMode] = useState(false)
    const [txt, setTxt] = useState('')

    const editHandler = () => {
        setTxt(todoTxt)
        setEditMode(!editMode)
    }
    const updateHandler = () => {
        const newArray = [...todoList]
        newArray[index] = txt
        setTodoList(newArray)
        console.log('asd')
        setEditMode(!editMode)
    }
    const deleteHandler = () => {
        const newArray = todoList.filter((e, i) => i !== index)
        setTodoList(newArray)
    }


    return (
        <div>
            <ul>
                <li>
                    {!editMode ? todoTxt : <input value={txt} onChange={e => setTxt(e.target.value)} />}
                    <button onClick={editMode ? updateHandler : editHandler}>
                        {editMode ? 'Update' : 'Edit'}
                    </button>
                    <button onClick={deleteHandler}>
                        Delete
                    </button>
                </li>
            </ul>
        </div>

    )
}

export default Todos