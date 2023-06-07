import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditTraining() {

    let navigate=useNavigate();

    const{id}=useParams();

    const[training, setTraining]=useState({
        title:"",
        description:""
    })

    const{title,description}=training;

    const onInputChange=(e)=>{
        setTraining({...training,[e.target.title]:e.target.value});
    }

    useEffect(()=>{
        loadTraining();
    },[])

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/trainings/${id}`, training);
        navigate("/");
    };

    const loadTraining =async()=>{
        const result=await axios.get(`http://localhost:8080/api/trainings/${id}`);
        setTraining(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className='col-md-6 offset-md-3 border bg-warning rounded p-4 mt-2 shadow'>
                    <h3 className='text center m-4 text-light'>Update Training</h3>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor="Title" className="form-label text-light">
                                Title
                            </label>
                            <input type={"text"}
                            className='form-control'
                            placeholder='Enter your training here'
                            title="title"
                            value={title}
                            onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Description" className="form-label text-light">
                                Description
                            </label>
                            <input type={"text"}
                            className='form-control'
                            placeholder='Enter description here'
                            title="description"
                            value={description}
                            onChange={(e)=>onInputChange(e)}/>    
                        </div>
                        <button type="submit" className="btn btn-light text-dark">Submit</button>
                        <Link className="btn btn-danger text-light mx-2" to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}