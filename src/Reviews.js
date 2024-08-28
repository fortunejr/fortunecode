import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,  // Enables auto-scrolling
    autoplaySpeed: 2000,  // Sets the delay between each auto-scroll in milliseconds (e.g., 2000ms = 2 seconds)
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,  // Shows 2 slides on screens smaller than 1024px
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,  // Shows 1 slide on screens smaller than 600px
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
};
const Reviews = () => {
  return (
    <div className='reviews'>
        <h2>What do people say?</h2>
        <Slider {...settings} style={{ display: 'flex', gap: '20px' }}>
            <div className='inner-review'>
                <p className='name'>Maureen Dikeh</p>
                <p className='review-text review-text1'>I had no idea a website could have such a profound impact on my business until I met Fortune Code. Their expertise and creativity exceeded all my expectations. They didn't just build a website for my company; they created a powerful tool that added immense value to my business. The attention to detail, functionality, and stunning design have truly transformed my online presence.</p>
            </div>
            <div className='inner-review'>
                <p className='name'>Caroline Akano</p>
                <p className='review-text'>Fortune Code helped me build my NGO website, and the results have been nothing short of transformative. The website they created has significantly improved my work rate and productivity, allowing me to focus more on our mission rather than technical hurdles.</p>
            </div>
        </Slider>
    </div>
  )
}

export default Reviews