import React, { useEffect, useState } from 'react';

const useTask = () => {
    const [tasks, setTasks]= useState([])
    useEffect(() => {
        const url =`https://obscure-river-42440.herokuapp.com/tasks`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTasks(data)

            })
           
    }, [tasks])

    return [tasks, setTasks]
};

export default useTask;