import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import imageMap from '../../images/Map.png';
import fakePlace from '../../FakePlace/FakePlace'
import './SelectDivision.css'
import DatePickers from '../DatePicker/DatePicker';

const SelectDivision = () => {

    const { veh } = useParams();
    const [placeFrom, setPlaceFrom] = useState("");
    const [placeTo, setPlaceTo] = useState("");
    const handlePlaceFrom = (e) => {
        const placeValue = e.target.value
        setPlaceFrom(placeValue)
    }
    const handlePlaceTo = (e) => {
        const placeValue = e.target.value
        setPlaceTo(placeValue)
    }
  
    return (
        <div className="row pt-5">
            <div className="col-md-4 card">
                <h3 className="mb-0 mt-3">Pick from :</h3>
                <select onChange={handlePlaceFrom} value={placeFrom} name="category" id="">
                    <option value="">Select Place </option>
                    {
                        fakePlace.map(place => (
                            <option value={place.name}>{place.name}</option>
                        ))
                    }
                </select>
                <h3 className="mb-0 mt-3">Pick to :</h3>
                <select onChange={handlePlaceTo} value={placeTo} name="category" id="">
                    <option value="">Select place</option>
                    {
                        fakePlace.map(place => (
                            <option value={place.name}>{place.name}</option>
                        ))
                    }
                </select>
                <br/>

                {/* Date start input */}
                    <DatePickers></DatePickers>

                <br />
                {
                    (placeFrom === placeTo) && <p class="text-danger">Please select different place..</p>
                }
                <br />
                {
                    (placeFrom !== placeTo) && <Link to={`/destination/${veh}/${placeFrom}/${placeTo}`}><button style={{ width: '100%', color: "white"}} className="btn text-center bg-success mb-5">Search</button></Link>
                }
            </div>
            

            <div className="col-md-7">
                <div>
                    <img className="img" style={{width:"100%", maxHeight:"80vh"}}  src={imageMap} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectDivision;