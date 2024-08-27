import React from 'react'
import Head from './Head'
import Offers from './Offers'
import Jobs from './Jobs'
import WhyChooseUs from './WhyChooseUs'
import Reviews from './Reviews'
const Home = () => {

    
  return (
    <div className='Home'>
        <Head/>
        <Offers/>
        <Jobs/>
        <WhyChooseUs/>
        <Reviews/>
        <div className='contact-container'>
          <p className='what-are-you'>What are you waiting for?</p>
          <div className='contact-us'>
            <a target='_blank' 
              rel="noreferrer"
              href='https://api.whatsapp.com/send/?phone=%2B2349137926797&text&type=phone_number&app_absent=0'
              className='contact-link'>
              <p>Contact Us <img src="/images/whatsapp.png" alt="WhatsApp icon"></img></p>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Home