import React from "react";
import './footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer" id="5">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h2>Admin</h2>
                        <a href="/linkedin">
                            <BsLinkedin /> LinkedIn
                        </a>
                        <a href="/github">
                            <BsGithub /> GitHub
                        </a>
                        <a href="/instagram">
                            <BsInstagram /> Instagram
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h2>Quick Links</h2>
                        <a href="/">
                            <p style={{"marginTop":"15px"}}>Home</p>
                        </a>
                        <a href="/team">
                            <p style={{"marginTop":"15px"}}>Team</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div linkedin_div">
                        <h2>Hostel</h2>
                        <p><BsFillTelephoneFill /> +91-1234567890</p>
                        <a href="/gmail">
                            <BiLogoGmail /> Mail Id
                        </a>
                        <a href="/instagram">
                            <BsInstagram /> Instagram
                        </a>
                    </div>
                    {/* <div className="sb_footer-links_div">
                        <h4>View Website in</h4>
                        <p>English</p>
                    </div> */}
                    {/* <div className="sb_footer-links_div">
                        <h4>Need Help?</h4>
                        <a href="/helpcentre">
                            <p>Visit Help Centre</p>
                        </a>
                        <a href="/feedback">
                            <p>Share Feedback</p>
                        </a>
                    </div> */}
                    
                </div>
                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} STAR. All Rights Reserved.
                        </p>
                    </div>
                    {/* <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms of use</p></div></a>
                        <a href="/policy"><div><p>Privacy Policy</p></div></a>
                        <a href="/faq"><div><p>FAQ</p></div></a>
                    </div> */}
                </div>

            </div>
        </div>
    );
}
 
export default Footer;