import React, { useEffect } from 'react'
import { fetchTodos } from '../redux/TodoReducer'
import { useSelector, useDispatch } from 'react-redux'

function TodoList() {

    const { todos, loading, error } = useSelector((state) => state.TodoReducer)
    const dispatch = useDispatch()
    console.log(todos)
    useEffect(() => {
        dispatch(fetchTodos());
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>There is an error</p>

    return (
        <div>
            <h4>CreatePost</h4>
            <ul>
                {
                    todos && todos.map(item => {
                        return (
                            <li key={item.id}>{item.title}</li>
                        )
                    })
                }
            </ul >
        </div>
    )
}

export default TodoList