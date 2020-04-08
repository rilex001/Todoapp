import React from 'react'
import FlipMove from 'react-flip-move';


const Todos = ({todos, deleteTodo, updateTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item' key={todo.id}>
                    <span>{todo.content}
                    <i className="material-icons right" onClick={() => {deleteTodo(todo.id)}}>delete</i>
                    </span>

                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left!</p>
    )

    return(
    <div className="todos collection">
    <FlipMove duration={600} easing="ease-in-out">
        {todoList}
    </FlipMove>

    </div>
    )
}

export default Todos