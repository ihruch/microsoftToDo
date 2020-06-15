import React, {useContext, useState, useEffect} from 'react'
import DBContext from './../../context/db';
import { getCollectionData } from './../../api';
import {
    Spinner,
    List, ListItem, ListItemGraphic, ListItemText,
    Typography
} from 'mdc-react';
import {TodoListItem} from './../TodoListItem';
import './style.scss';

export const TodoList = ({match}) => {
    const [todos, setTodos] = useState([]);
    const db = useContext(DBContext);

    useEffect( () => {
        getCollectionData('todos')(collection =>
            collection.where('listId', '==', match.params.listId)
        ).then(setTodos);
    }, [match.params.listId]);

    const list = db.lists.find( list => list.id === match.params.listId);

    if(!list) { return <Spinner /> }

    return(
        <div className="todo-list">
            <Typography className="todo-list__title" variant="headline4">  {list.title} </Typography>
            <List className="todo-list__items">
                { todos.map( todo =>
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                    />)
                }
            </List>
        </div>
    )
}