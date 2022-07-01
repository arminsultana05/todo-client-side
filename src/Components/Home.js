import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTask from './Hooks/useTask';
import UserItems from './UserItems';
import swal from 'sweetalert';

const Home = () => {
    const navigate = useNavigate()



    const handleForm = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const user = { name, description };
        console.log(user);
        const url = `https://obscure-river-42440.herokuapp.com/add-task/`
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                swal("Successfully Added!", "You clicked the button!", "success");
                e.target.reset();




                // toast.success("Added Successfully", {toastId : "SUCCESS"})
            });






    };

    return (
        <div className="mt-24">
            <div class="card w-96 bg-base-100 shadow-xl flex mx-auto mt-12">
                <div class="card-body">
                    <h2 class="card-title mx-auto">To-DO APP</h2>
                    <form onSubmit={handleForm}  >
                        <input className=' w-full border  border-purple-400 mt-3 p-1' type="text" name="name" placeholder='Task-Name' />
                        <br />

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>

                            </label>
                            <textarea class="textarea textarea-bordered h-24" name="description" placeholder="Discription" ></textarea>

                        </div>

                        <div  >

                            <input className='btn w-full mt-5' type="submit" value="Add Task" />
                        </div>
                    </form>


                </div>


            </div>

        </div>
    );
};

export default Home;