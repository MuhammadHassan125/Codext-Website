import React from 'react'

const Navbar = () => {

  const Dropdown = ["Home", "Services", "Pricing", "Testimonials", "Blog"]

  return (
    <section className='section'>
          <div className='container'>  
              
              <div className='main_div'>

              <div className='logo'>
              <img src='./Group 368.png' />
              </div>

              <div className='navbar'>
                <ul>
                  {
                    Dropdown.map((Dropdown)=>(
                      <li key={Dropdown}>{Dropdown}</li>
                    ))
                  }
                </ul>
              </div>

              <div className='button'>
                    <button>FREE TRIALS</button>
              </div>
              
</div>

          </div>
          

    </section>
    
  )
}

export default Navbar
