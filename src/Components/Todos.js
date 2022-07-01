import React from 'react';

const Todos = ({task,  handleRemove}) => {
    const {name, description,_id}=task;

    return (
        <tr>
        <td><input type="checkbox" checked="checked" class="checkbox" /></td> 
        <td>{name}</td> 
        <td>{description}</td> 
        <td><button class="btn btn-xs">edit</button></td> 
        <td><button onClick={() => handleRemove(_id)} class="btn btn-xs">delete</button></td> 
      </tr>


    );
};

export default Todos;