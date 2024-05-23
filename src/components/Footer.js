import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='info'>
                <div className="inner">
                    <div>
                        <h2>무통장입금계좌</h2>
                        <div>
                            <p>BANK ACCOUNT</p>
                            <p>301-1234-4567-12</p>
                            <p>예금주 - 염민규</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;