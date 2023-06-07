import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

export default function Home() {

    const[trainings, setTrainings]=useState([]);

    const{id}=useParams();

    useEffect(()=>{
        loadTrainings();
    },[]);

    const loadTrainings=async()=>{
        const result=await axios.get("http://localhost:8080/api/trainings");
        setTrainings(result.data);
    }
    
    const deleteTraining=async (id)=>{
        await axios.delete(`http://localhost:8080/api/trainings/${id}`);
        loadTrainings();
    }

    return (
        <div className='container bg-warning rounded mt-5'>
            <div className='py-4 ps-5 pe-5'>
                <table className="table ps-3 pe-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            trainings.map((training,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{training.title}</td>
                                    <td>{training.description}</td>
                                    <td>
                                        <Link className='btn btn-warning mx-2'
                                        to={`/viewTraining/${training.id}`}>
                                            View
                                        </Link>
                                        <Link className='btn btn-outline-warning mx-2'
                                        to={`/editTraining/${training.id}`}>
                                            Edit
                                        </Link>
                                        <button className='btn btn-danger mx-2'
                                        onClick={()=>deleteTraining(training.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}