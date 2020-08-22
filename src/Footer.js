import React from 'react';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">


            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon className="footer_icon" fontSize="large" />
                <SkipNextIcon />
                <RepeatIcon />
                
            </div>
            <div className="footer_right">

                
            </div>
        </div>
    )
}

export default Footer;