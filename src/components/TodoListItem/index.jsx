import React from 'react'
import {
    Checkbox,
    ListItem, ListItemGraphic, ListItemText,
} from 'mdc-react'


export const TodoListItem = ({todo, onCompleteChange}) => {

    return(
        <ListItem>
            <ListItemGraphic>
                <Checkbox
                    checked={todo.completed}
                     onChange={onCompleteChange}
                />
            </ListItemGraphic>
            <ListItemText>
                {todo.title}
            </ListItemText>
        </ListItem>
    )
}