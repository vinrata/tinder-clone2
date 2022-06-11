import React from "react"
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import "./Header.css";
import { IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"

function Header( { backButton }) {

    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
            <IconButton onClick={() => history.replace(backButton)} >
                <ArrowBackIosIcon fontSize="large" className="header__icon" ></ArrowBackIosIcon>
            </IconButton>
        ) : (
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large" ></PersonIcon>
            </IconButton>
            )}


            <Link to="/">
            <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png" alt="tinder logo"></img>
            </Link>
                <h2>

                </h2>
                <Link to="/chat"> 
                <IconButton>
                <ForumIcon className="header__icon" fontSize="large" ></ForumIcon>
                </IconButton>
                </Link>
        </div>
    )

}

export default Header