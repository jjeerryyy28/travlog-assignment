// Main.module.css
import React from "react";
import style from "./Main.module.css";
import Link from "next/link";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';

const MainContent = () => {
    return (
        <div>
            <div className={style.maincontent}>
                <div className={style.left}>
                    <button>
                        <span style={{ marginTop: "5px", 
                            width: "121px", 
                            height: "17px", 
                            fontWeight: "700", 
                            fontSize: "14px", 
                            lineHeight: "16.8px" }}>
                                Explore the world!
                        </span> 
                        <BusinessCenterIcon />
                    </button>
                    <div className={style.para}>
                        <p>
                            Travel <span style={{ color: "#f85e9f" }}>top <br />
                                destination </span><br />
                            of the world
                        </p>
                    </div>
                    <div className={style.bottompara}>
                        We always make our customer happy by providing <br />
                        as many choices as possible
                    </div>
                    <div className={style.bottombutton}>
                        <button>Get Started</button>
                        <button className={style.watch}><PlayCircleFilledIcon className={style.play}/>Watch Demo</button>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.rightimages}>
                        <div className={style.image1}>
                            <img src="/rectangle1.png" />
                            <img src="/send.png" />
                        </div>
                        <div className={style.image2}>
                            <img src="/rectangle2.png" />
                        </div>
                        <div className={style.image3}>
                            <img src="/rectangle3.png" />
                            <img src="/friendreq.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <img className={style.tripadvisor} src="/tripadvisor.png" alt="TripAdvisor" />
                <img className={style.expedia} src="/Expedia.png" alt="Expedia" />
                <img className={style.booking} src="/booking.png" alt="Booking.com" />
                <img className={style.airbnb} src="/airbnb.png" alt="Airbnb" />
                <img className={style.orbitz} src="/orbitz.png" alt="Orbitz" />
            </div>
            <div className={style.design}>
                <div className={style.column1}>
                    <ArrowDropUpSharpIcon />
                    <ArrowDropUpSharpIcon />
                    <ArrowDropUpSharpIcon />
                    <ArrowDropUpSharpIcon />
                    <ArrowDropUpSharpIcon />
                </div>
                <div className={style.column2}>
                    <ArrowDropUpSharpIcon />
                    <ArrowDropUpSharpIcon />
                    <ArrowDropUpSharpIcon />
                    <ArrowDropUpSharpIcon />
                    <ArrowDropUpSharpIcon />
                </div>
            </div>
        </div>
    )
}

export default MainContent;
