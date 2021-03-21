import React from 'react';
import { useHistory } from 'react-router';
import './Ride.css';
const Ride = (props) => {
    const { image, title } = props.ride;
    const history = useHistory()
    const handleBook = (title) => {
        history.push(`/destination/${title}`);}
    return (
        <div onClick={() => handleBook(title)} className="col-md-3">
            <div className="p-3">
            <div className="card cartVehicle">
                <div className="d-flex justify-content-center">
                    <img src={image} className="" alt="" />
                </div>
                <div className="card-body text-dark text-center">
                    <p className="card-text text-center"><strong>{title}</strong></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Ride;

