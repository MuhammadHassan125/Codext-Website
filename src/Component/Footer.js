import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='container'>

                    <div className='footer-inner'>
                   
                    <div className='footer-same'>
                        <img src='./Group 368.png' />
                        <p>Lorem ipsum dolor sit amet, consect
                            etur adipiscing elit. Ullamcorper purus eleifend purus faucibus faucibus.</p>

                        <div className='social-icons'>
                            <img src='./Group 360.png' />
                            <img src='./Group 351.png' />
                            <img src='./Group 352.png' />
                            <img src='./Group 353.png' />
                        </div>
                    </div>

                    <div className='footer-same-div'>
                        <h4>Resources</h4>
                            <p>services</p>
                            <p>Pricing</p>
                            <p>Testimonials</p>
                            <p>Blog</p>
                    </div>

                    <div className='footer-same-div'>
                        <h4>Usefull links</h4>
                            <p>Terms of Services</p>
                            <p>Privacy Policy</p>
                            <p>Cookie Policy</p>
                            <p>Contact us </p>
                    </div>

                    <div className='footer-same'>
                        <h2>Newsletter</h2>
                        <p>Sign up and receive the lastest news via email.</p>
                        <input placeholder='Enter Your Email' className='input-footer'></input>
                    </div>

                </div>

               
                </div>
            </footer>
        </>
    )
}

export default Footer
