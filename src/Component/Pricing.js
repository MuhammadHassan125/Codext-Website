import React from 'react'

const Pricing = () => {
  return (
    <section className='section-pricing'>
        <div className='container'>

                 <div className='features-heading'>
                    <h1>Choose your best pricing plan...</h1>
                </div>

                <div className='packages'>
                        <div><h3>Added for Monthly</h3></div>
                        <div><img src='./Component 1.png'/></div>
                        <div><h3>Yearly</h3></div>
                </div>



                <div className='pricing-contents'>
                    <div className='same-inner-divs'>
                        <h3>Start-up</h3>
                        <img src='./Line 2.png'/>
                        <h1>$10/mo</h1>
                        <p>Easy Customizable</p>
                        <p>Easy Customizable</p>
                        <p>Easy Customizable</p>
                        <p>Easy Customizable</p>

                        <button className='btn-two'>TRY THIS PACKAGE</button>
                     </div>

                     <div className='same-two-divs'>
                        <div>
                            <h3>Classic</h3>
                            <img src='./Line 3.png'/>
                            <h1>$30/mo</h1>
                        </div>
                        <p>Easy Customizable</p>
                        <p>Easy Customizable</p>
                        <p>Easy Customizable</p>
                        <p>Easy Customizable</p>

                        <button className='btn-three'>TRY THIS PACKAGE</button>
                     </div>


                     <div className='same-inner-divs'>
                            <h3>Premium</h3>
                            <img src='./Line 2.png'/>
                            <h1>$40/mo</h1>
                        <p>Easy Customizable</p>
                        <p>Easy Customizable</p>
                        <p>Easy Customizable</p>
                        <p>Easy Customizable</p>

                        <button className='btn-two'>TRY THIS PACKAGE</button>
                     </div>


                </div>

        </div>
    </section>
  )
}

export default Pricing
