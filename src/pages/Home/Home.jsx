import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_image from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <div className="hero">
        <img src={hero_image} alt="Hero Banner" className='hero-image' />
        <div className="hero-text">
          <img src={hero_title} alt="Hero Title" className='hero-title'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae aspernatur accusantium vel assumenda aperiam iste dicta. Totam expedita aspernatur omnis odio deleniti autem alias.</p>
          <div className="hero-btn">
            <button className='btn'>
              <img src={play_icon} alt="Play Icon" className='icon' />
              Watch Now
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt="Info Icon" className='icon' />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home