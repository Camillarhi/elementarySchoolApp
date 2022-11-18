import React from 'react'
import paul from '../images/paul.jpg';

export default function UserDetails({ user }) {
    return (
        <div className='d-flex justify-content-between mt-5 container'>
            <img src={paul} alt={paul} className="img-fluid w-25 rounded-circle me-5" />
            <div className='card card-body bg-info d-flex'>
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-dark mb-0">Name:</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-dark mb-0">{user?.name}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-dark mb-0">Gender:</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-dark mb-0">{user?.gender}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-dark mb-0">Age:</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-dark mb-0">{user?.age}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-dark mb-0">Grade:</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-dark mb-0">{user?.grade}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
