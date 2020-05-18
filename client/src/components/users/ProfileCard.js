import React from 'react';
import { Link } from 'react-router-dom';

import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';


const ProfileCard = (props) => {
    
    return (
        <div className="cardP gray mx-auto mt-5 animated flipInY">
            <div className="additional">
                <div className="user-cardP">
                    <div className="level center">
                        Level 0
                    </div>
                    <div className="points center">
                        0 Points
                    </div>
                     <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y&d=mp" className="rounded-circle center" alt="avatar"></img>
                </div>
                <div className="more-info">
                    <Link to="/form" className="link m-3">
                        <h6 style={{textAlign: "center"}}><EditTwoToneIcon/></h6>
                    </Link>
                    <h1 className="">{props.currentUser.username}</h1>
                    <div className="coords">
                        <span>Joined {props.currentUser.date}</span>
                    </div>
                    <div className="stats">
                        <div>
                            <div className="title">Vistas</div>
                            <i className="fa fa-trophy"></i>
                            <div className="value">{props.vistas}</div>
                        </div>
                        <div>
                            <div className="title">Pendientes</div>
                            <i className="fa fa-gamepad"></i>
                            <div className="value">{props.pendientes}</div>
                        </div>
                        <div>
                            <div className="title">Favoritas</div>
                            <i className="fa fa-group"></i>
                            <div className="value">{props.favoritas}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="general">
                <h1 className="m-3">{props.currentUser.username}</h1>                
                <p style={{textAlign: "center"}}>{props.description}</p>
                <span className="more">Mouse over for more info</span>
            </div>
        </div>
    )

}

export default ProfileCard;