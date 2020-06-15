import React, {useState, useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import { getCollectionData }  from './api';
import AppDrawer from './components/AppDrawer';
import AppContent from "./components/AppContent";
import {TodoList} from "./components/TodoList";
import DBContext from './context/db';
import './App.scss';



export default function App() {
    const  [lists, setLists] = useState([]);
    const  [todos, setTodos] = useState([]);

    useEffect( () => {
        getCollectionData('lists').then(setLists);
        getCollectionData('todos').then(setTodos);
    }, []);

    return (
        <DBContext.Provider value={{lists, todos}} >
            <div className="app">
                <AppDrawer lists={lists} />
                <AppContent>
                    <Switch>
                        <Route path="/:listId" component={TodoList}/>
                    </Switch>

                    <ul>
                        { todos.map( todo =>  <li key={todo.id}>{todo.title}</li>) }
                    </ul>
                </AppContent>

            </div>
        </DBContext.Provider>
    );
}


