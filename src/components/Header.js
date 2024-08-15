import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnNameReact, setBtnNameReact]= useState("login")
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart</li>
                <button className="login" onClick={()=>
                    {
                        btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login")
                    }
                }>{btnNameReact}</button>
            </ul>
        </div>
    </div>)
}

export default Header;