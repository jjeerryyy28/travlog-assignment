import React from "react";
import style from "./Sub.module.css";
import MailSharpIcon from '@mui/icons-material/MailSharp';

const Subscribe = () => {
    return (
        <div className={style.newsletter}>
            <img src="/design2.png" alt="Newsletter" />
            <div className={style.para}>
                <p className={style.first}>SUBSCRIBE TO OUR NEWSLETTER</p>
                <p className={style.second}>
                    Prepare yourself & let's explore the<br />beauty of the world
                </p>
            </div>
            <div className={style.sub}>
                <div className={style.inputContainer}>
                    <MailSharpIcon className={style.emailIcon} />
                    <input type="text" placeholder="Your Email" />
                </div>
                <button>Subscribe</button>
            </div>
            <div className={style.vector}>
                <img src="/design3.png" />
            </div>
        </div>
    );
};

export default Subscribe;
