import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Jobs = ({ deviceType }) => {
    const data = [
        {
            img: '/images/portfolio.png',
            text: 'Portfolio website'
        },
        {
            img: '/images/depathway.png',
            text: 'NGO website'
        },
        {
            img: '/images/lebole.png',
            text: 'Orphanage home website'
        },
        {
            img: '/images/okane.png',
            text: 'Investment website'
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,  // Enables auto-scrolling
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
   
 return (
    <div className='jobs'>
        <h2>Our recent Jobs</h2>
        <div className='jobs-card-outer'>
        <Slider {...settings}>
                {data.map((d, index) =>(
                    <div key={index} className='jobs-card'>
                        <div>
                            <img src={d.img} alt='' className='jobs-img' />
                        </div>
                        <div className='jobs-text'>
                            <p>{d.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  );
}

export default Jobs;