import React from 'react'
import '../../App.css'
import Logo from './logo-white.png'

function Footer() {
    return (
        <div className='App-footer'>
            <div className="container">
                <div className="row">
                    <div style={footerStyle} className="col-sm">
                        <img
                            src={Logo}
                            alt='zeal indonesia'
                            width='50px'
                            style={{
                            marginBottom: '40px'
                        }}/>
                        <h6>We belive in nurturing talents, the importance of personal growth and
                            highlighting youths strengths and skills</h6>
                    </div>
                    <div style={footerStyle} className="col-sm">
                        <h6>About us</h6>
                        <h6>Term and Conditions</h6>
                        <h6>Privacy Policy</h6>
                        <h6>FAQ</h6>
                        <h6>Contact Us</h6>
                    </div>
                    <div style={footerStyle} className="col-sm">
                        <h6>Subscribe</h6>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email Address"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-light" type="button" id="button-addon2">
                                    Subscribe
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer

const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom: '30px'
}