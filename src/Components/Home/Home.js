import React from 'react';
import Ride from '../Ride/Ride'
import './Home.css';
import rides from '../../FakeData/fakedata';

const Home = () => {

    return (
        <div className="row d-flex justify-content-center">
           <div className="container mt-5 ">
           <div className="row">
            {
                rides.map(ride => <Ride className="" key={ride.title} ride={ride}></Ride>)
            }
        </div>
           </div>
        </div>
    );
};

export default Home;