import React from 'react';
// import "./footer.css";
import "../styles/footer/footer.css";
import footerLogo from "../assets/footer_logo.png";

function Footer(props) {
    return (
        <div>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='footer-col'>
                                <h2>South Carolina <br/> Revenue and Fiscal Affairs Office</h2>
                                <img src={footerLogo} alt="Footer Logo" />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='footer-col'>
                                <ul>
                                    <li><a href='#'>Privacy Statement</a></li>
                                    <li><a href='#'>FOIA</a></li>
                                    <li><a href='#'>Disclosures and Reporting</a></li>
                                    <li><a href='#'>Report Fraud</a></li>
                                    <li><a href='#'>Accessibility</a></li>
                                    <li><a href='#'>Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='footer-col'>
                                <ul>
                                    <li>
                                        <strong>Main Office</strong>
                                        <p>1000 Assembly St, Rembert Dennis Building, Suite 421 Columbia, SC 29201</p>
                                    </li>
                                    <li>
                                        <strong>Geodetic survey section</strong>
                                        <p>5 Geology Rd Columbia, SC 29212</p>
                                    </li>
                                    <li>
                                        <strong>Health and demographics division</strong>
                                        <p>1000 Assembly St, Rembert Dennis Building, Suite 240 Columbia, SC 29201</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;