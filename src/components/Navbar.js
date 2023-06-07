import React from 'react'
import {Link} from 'react-router-dom';
import Fire from './fire.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiar navbar-dark bg-light bg-gradient">
                <div className="container-fluid">
                    <Link className="navbar-brand text-warning" to='/'>
                        <img src={Fire} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                            Training Application
                    </Link>

                    <Link className="btn btn-outline-secondary" to="addTraining">
                        Add Training
                    </Link>
                </div>
            </nav>
        </div>
    )
}