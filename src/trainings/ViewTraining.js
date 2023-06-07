import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewTraining() {
    const [training, setTraining] = useState({
        title: "",
        description: ""
    });
    
    const { id } = useParams();

    useEffect(() => {
        loadTraining();
      }, []);

    const loadTraining = async () => {
        const result = await axios.get(`http://localhost:8080/api/trainings/${id}`);
        setTraining(result.data);
    };

    return(  
        <div className="container">
            <div className="row">
                <div className='col-md-6 offset-md-3 border bg-warning rounded p-4 mt-2 shadow'>
                    <h3 className='text center m-4 text-light'>Training Details</h3>
                    <div className="card">
                        <div className="card-header">
                            <b>ID: {training.id}</b>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Title:</b>
                                    {training.title}
                                </li>
                                <li className='list-group-item'>
                                    <b>Description:</b>
                                    {training.description}                            
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-dark my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
       </div>
    );
}  