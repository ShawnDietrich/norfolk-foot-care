import React from "react";
import facebook from '../Pictures/facebook.png'
import instagram from '../Pictures/instagram.png'
import logo from '../Pictures/logonoback.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className='socialLinks'>
                <img src={facebook} style={{ width: '50px' }} alt='facebook ' />
                <img src={logo} style={{ width: '200px' }} alt="Norfolk Logo" />
                <img src={instagram} style={{ width: '50px' }} alt='instagram ' />
            </div>
        </div>
    )
}

export default Footer