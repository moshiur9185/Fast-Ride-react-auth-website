import React from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import fakedata from "../../FakeData/fakedata"
import fakePlace from '../../FakePlace/FakePlace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Destination = () => {
    const {veh, placeFrom, placeTo} = useParams();
    const {details, image, title} = fakedata.find(vehicle => vehicle.title === veh);
    const {gMap} = fakePlace.find(place => place.name === placeFrom);

    return (
        <div className="row pt-5">
            <div className="col-md-4 card pt-3 cardStyle">
                <ul className="place rounded">
                    <li className="mb-0 mt-3">{placeFrom}</li>
                    <li className="mb-0 mt-3">{placeTo}</li>
                </ul>                
                {
                    details.map(transportName => 
                    <div >
                        <img style={{width:"4rem", borderRadius:"5rem"}} src={image}  alt=""/>
                        {title}
                        <span style={{marginLeft:"3rem"}}><FontAwesomeIcon icon={faUserFriends} />{transportName.space} </span>
                        <span style={{marginLeft:"5rem"}}>{transportName.price}</span>
                    </div>)
                }
            </div>
            <div className="col-md-8 g-map">
                <iframe src={gMap} width="400px" height="500px" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>   
        </div>
    );
};

export default Destination;