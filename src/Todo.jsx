import './styles.css'

export default function Todo({ todo, onClick, onDelete }) {
    return <div className='todo' key={todo.id}>

        <div className='content' onClick={() => onClick(todo.id)}>{todo.content}</div>
        <div className='checked-and-delete'>
            <input
                type='checkbox'
                checked={todo.checked}
                className='checkbox'
                onClick={() => onClick(todo.id)}
                readOnly
            />
            <div className='delete-button' onClick={() => onDelete(todo.id)}>x</div>
        </div>
    </div>
}