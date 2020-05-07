import React from 'react';

const ProfileCard = (props) => {
    
    return (
        <div className="cardP gray mx-auto mt-5 animated flipInY">
            <div className="additional">
                <div className="user-cardP">
                    <div className="level center">
                        Level 13
                    </div>
                    <div className="points center">
                        5,312 Points
                    </div>
                </div>
                <div className="more-info">
                    <h1>Jane Doe</h1>
                    <div className="coords">
                        <span>Group Name</span>
                        <span>Joined January 2019</span>
                    </div>
                    <div className="coords">
                        <span>Position/Role</span>
                        <span>City, Country</span>
                    </div>
                    <div className="stats">
                        <div>
                            <div className="title">Awards</div>
                            <i className="fa fa-trophy"></i>
                            <div className="value">2</div>
                        </div>
                        <div>
                            <div className="title">Matches</div>
                            <i className="fa fa-gamepad"></i>
                            <div className="value">27</div>
                        </div>
                        <div>
                            <div className="title">Pals</div>
                            <i className="fa fa-group"></i>
                            <div className="value">123</div>
                        </div>
                        <div>
                            <div className="title">Coffee</div>
                            <i className="fa fa-coffee"></i>
                            <div className="value infinity">∞</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="general">
                <h1>Jane Doe</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
                <span className="more">Mouse over the cardP for more info</span>
            </div>
        </div>
    )

}

export default ProfileCard;