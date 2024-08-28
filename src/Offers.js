import React from 'react'

const Offers = () => {
  return (
    <div className='what-we-offer'>
        <h2>What We Offer</h2>
        <div className='offers-website'>
            <img src='/images/webdev.png' alt='webdev'></img>
            <div>
            <h4>Website Building & Management:</h4>
            <p>At Fortune Code, we specialize in creating stunning, functional websites that not only capture your brand's essence but also deliver a seamless user experience. Whether you're starting from scratch or looking to enhance an existing site, our team is dedicated to building a digital presence that drives growth and engages your audience.</p>
            </div>
        </div>
        <div className='offers-seo'>
            <div className='seo-text'>
                <h4>SEO Implementation:</h4>
                <p>Our SEO implementation services at Fortune Code are designed to increase your website's visibility and rank higher in search engine results. From keyword research to on-page optimization and performance tracking, we ensure that your website not only reaches its target audience but also stays ahead of the competition.</p>
            </div>
            <img src='/images/seo.png' alt='seo'></img>
        </div>
    </div>
  )
}

export default Offers