import React from "react";
import facebook from '../Pictures/facebook.png'
import logo from '../Pictures/logonoback.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className='socialLinks'>

                <img className="logo" src={logo} style={{ width: '200px' }} alt="Norfolk Logo" />
                <a href="https://www.facebook.com/Norfolkinhomefootcare">
                <img className="facebook" src={facebook} style={{ width: '50px' }} alt='facebook'/>
                </a>
            </div>
        </div>
    )
}

export default Footer