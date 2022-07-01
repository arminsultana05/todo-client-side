
import React, { useEffect, useState } from 'react';
import Todos from './Todos';

const UserItems = () => {
    const [allTask , setAllTask] =useState([]) 
    useEffect(()=>{
      fetch('https://obscure-river-42440.herokuapp.com/tasks')
      .then(res=>res.json())
      .then(data=>setAllTask(data))
    },[])
    console.log(allTask)

    const handleRemove = (id) =>{
        const proceed = window.confirm("Are you sure you want to delete?");
        if(proceed){
          const url = `https://obscure-river-42440.herokuapp.com/tasks/${id}`;
          fetch(url, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then( data =>{
            const remaining = allTask.filter(task => task._id !== id);
            setAllTask(remaining)
            console.log('deletd data', data);
          })
        }
      }
    return (
        <section className="mt-24">
        <div class="overflow-x-auto">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th>cheek status</th> 
        <th>Name</th> 
        <th>Task description</th> 
        <th>edit</th> 
        <th>delete</th> 
      </tr>
    </thead> 
    <tbody>
       {
       allTask.map(task=><Todos
       key={task._id}
       task={task}
       handleRemove ={handleRemove}
       ></Todos>)
       }
    </tbody> 
 
  </table>
</div>

       </section>
    );
};

export default UserItems;