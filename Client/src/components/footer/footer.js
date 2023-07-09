import React from "react";
import './footer.css'
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>Developers</h4>
                        <p>Aryan Solanki</p>
                        <p>Ashutosh Mishra</p>
                        <p>Priyansh</p>
                        <p>Abhishek Gupta</p>
                    </div>
                    <div className="sb_footer-links_div linkedin_div">
                        <h4>Connect</h4>
                        <a href="/linkedin">
                            <BsLinkedin />
                        </a>
                        <a href="/github">
                            <BsLinkedin />
                        </a>
                        <a href="/instagram">
                            <BsLinkedin />
                        </a>
                        <a href="/instagram">
                            <BsLinkedin />
                        </a>
                    </div>
                    {/* <div className="sb_footer-links_div">
                        <h4>View Website in</h4>
                        <p>English</p>
                    </div> */}
                    <div className="sb_footer-links_div">
                        <h4>Need Help?</h4>
                        <a href="/helpcentre">
                            <p>Visit Help Centre</p>
                        </a>
                        <a href="/feedback">
                            <p>Share Feedback</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Connect with Us</h4>
                        <a href="/linkedin">
                            <p>LinkedIn</p>
                        </a>
                        <a href="/github">
                            <p>GitHub</p>
                        </a>
                        <a href="/instagram">
                            <p>Instagram</p>
                        </a>
                    </div>
                </div>
                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} STAR. All Rights Reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms of use</p></div></a>
                        <a href="/policy"><div><p>Privacy Policy</p></div></a>
                        <a href="/faq"><div><p>FAQ</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Footer;