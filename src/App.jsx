import { useState } from 'react'
import './styles.css'
import Todo from './Todo'

export default function App() {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([
        {
            id: crypto.randomUUID(),
            content: 'Sample todo data',
            checked: false
        },
        {
            id: crypto.randomUUID(),
            content: 'Some more sample todo data',
            checked: true
        }
    ])

    const handleChange = (text) => {
        setInput(text)
    }

    const handleSubmit = () => {
        setTodos([
            ...todos,
            {
                id: crypto.randomUUID(),
                content: input,
                checked: false
            }
        ])
        setInput('')
    }

    const check = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    checked: !todo.checked
                }
            } else {
                return todo
            }
        }))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return <div className='app'>
        <h1>React Todo App</h1>
        <div className='input-bar'>
            <input
                type='text'
                className='input-field'
                onChange={e => handleChange(e.target.value)}
                onKeyUp={e => e.key === 'Enter' && handleSubmit()}
                value={input}
            />
            <button
                onClick={handleSubmit}
                className='submit-button'
            >
                Add
            </button>
        </div>
        {todos.map(todo => <Todo todo={todo} onClick={id => check(id)} onDelete={id => deleteTodo(id)} />)}
    </div>
}