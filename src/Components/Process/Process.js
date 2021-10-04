import React from 'react'
import vid1 from '../../Assets/Youtube Vid 1.png';
import vid2 from '../../Assets/Youtube Vid 2.png';
import vid3 from '../../Assets/Place Holder 3.png';
import vid4 from '../../Assets/Place Holder 4.png';
import "./Process.scss";

const Process = () => {
    return (
        <div className="process" id="Process">
            <div className="live-video">
                <h1>Live Video</h1>
                <img src={vid1} alt="logo" />
            </div>
            <div className="more-workout">
                <h1>More Workouts</h1>
                <ul>
                    <li><img src={vid2} alt="logo" /></li>
                    <li><img src={vid2} alt="logo" /></li>
                    <li><img src={vid2} alt="logo" /></li>
                </ul>
            </div>
            <div className="why">
                <h1>Why Personal Training?</h1>
                <div className="training-images">
                    <div className="imageAndDescription">
                        <img src={vid3} alt="logo" />
                        <span>Benefit Description</span>
                    </div>
                    <div className="imageAndDescription">
                        <img src={vid3} alt="logo" />
                        <span>Benefit Description</span>
                    </div>
                    <div className="imageAndDescription">
                        <img src={vid3} alt="logo" />
                        <span>Benefit Description</span>
                    </div>
                    <div className="imageAndDescription">
                        <img src={vid3} alt="logo" />
                        <span>Benefit Description</span>
                    </div>
                </div>
            </div>
            <div className="promotion">
                <div className="promo-text">
                    <h1>Program Promotion</h1>
                    <p>text text text text text text text text text text text text text text text text text text text texttext texttext text text text text text text text</p>
                </div>
                <div className="promo-image">
                    <img src={vid4} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Process;
