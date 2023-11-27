import React from "react";
import style from "./Services.module.css";

const Services = () => {
    return (
        <div className={style.main}>
            <div className={style['inner-div']}>
                <div className={style.left}>
                    <p>SERVICES</p>
                    <p>Our top value <br /> categories for you</p>
                </div>
            </div>
            <div className={style['right-cards']}>
                <div className={style.card}>
                    <div className={style.image}>
                        <img src="/card1-image.png" />
                    </div>
                    <div className={style.para}>
                        <p className={style.heading}>Best Tour Guide</p>
                        <p className={style.content}>What looked like a small <br /> patch of purple grass, <br /> above five feet.</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.image}>
                        <img src="/card2-image.png" />
                    </div>
                    <div className={style.para}>
                        <p className={style.heading}>Easy Booking</p>
                        <p className={style.content}>Square was moving<br/>accross the sand in their<br/>direction.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;