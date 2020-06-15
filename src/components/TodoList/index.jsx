import React, {useContext} from 'react'
import DBContext from './../../context/db';

export const TodoList = ({match}) => {
    console.log(match)

    const db = useContext(DBContext);
    return(
        <ul>
            { db.todos.map( todo =>  <li key={todo.id}>{todo.title}</li>) }
        </ul>
    )
}