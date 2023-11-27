import React from "react";
import style from "./Foot.module.css";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter'; import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className={style.main}>
            <div className={style.left}>
                <div className={style.logo}>
                    <img src="/vector.png" />Travlog
                </div>
                <div className={style.aboutUs}>
                    <p>Contrary to popular<br />belief, Lorem Ipsum is<br />not simply random text.<br /> It has roots<br />
                        in a piece of classical<br /> Latin literature from 45<br />BC.</p>
                </div>
                <div className={style.icons}>
                    <FacebookSharpIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </div>
            </div>
            <div className={style.right}>
                <div className={style.columns}>
                    <p>Company</p>
                    <ul>
                        <li>About</li>
                        <li>Career</li>
                        <li>Mobile</li>
                    </ul>
                </div>
                <div className={style.columns}>
                    <p>Contact</p>
                    <ul>
                        <li>Why travlog?</li>
                        <li>Partner with us</li>
                        <li>FAQ's</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className={style.columns}>
                    <p>Meet Us</p>
                    <ul>
                        <li>+00 92 1234 56789</li>
                        <li>info@travlog.com</li>
                        <li>205, R Street, New York<br /> BD23200</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer;