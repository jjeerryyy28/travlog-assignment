import React from "react";
import style from './Travel.module.css';

const TravelPoint = () => {
    return (
        <div className={style.main}>
            <div className={style.left}>
                <div className={style.semicircular}>
                    <img src="/red-ellipse.png" />
                </div>
                <div className={style.red}>
                    <img src="/red-ellipse.png" />
                </div>
                <div className={style.image}>
                    <img src="/travel.png" alt="travel" />
                </div>
                <div className={style['circular-element']}>
                    <img src="/ellipse.png" />
                </div>
                <div className={style['circular-element1']}>
                    <img src="/ellipse.png" />
                </div>
                <div className={style.gold}>
                    <img src="/gold-elipse.png" />
                </div>
                <div className={style.btn}>
                    <button>
                        <img src="/discount.png" />
                        Discounted Price</button>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.travel}>
                    <p>TRAVEL POINT</p>
                    <p>We helping you find<br />your dream location</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not<br />simply random text. It has roots in a piece of<br />classical Latin literature from 45 BC.</p>
                </div>
                <div className={style.details}>
                    <div className={style.row}>
                        <div className={style.package}>
                            <p>500+</p>
                            <p>Holiday Package</p>
                        </div>
                        <div className={style.package}>
                            <p>7</p>
                            <p>Premium Airlines</p>
                        </div>                        
                    </div>
                    <div className={style.row}>
                    <div className={style.package}>
                            <p>100</p>
                            <p>Luxury Hotel</p>
                        </div>
                        <div className={style.package}>
                            <p>2k+</p>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <img src="/details.png" />
            </div>
        </div>
    )
}

export default TravelPoint;