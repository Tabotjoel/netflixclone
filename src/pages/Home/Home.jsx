import React from 'react'
import'./Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt="" className='banner-img'/>
            <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img' />
                <p>Discovering his ties to a secret ancient order, a young 
                    man living in modern Istanbul embarks on a quest to save the 
                    city from an immortal enemy.
                </p>
                
                <div className="hero-btns">
                    <button className='btn'><img src={play_icon} alt="" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
                </div>
                <TitleCards/>
            </div>
            
            </div>

            <div className="more-cards">
<TitleCards title="Action Movies" category="action" />
<TitleCards title="Comedy Movies" category="comedy" />
<TitleCards title="Drama Movies" category="drama" />
<TitleCards title="Horror Movies" category="horror" />
<TitleCards title="Romantic Movies" category="romance" />
<TitleCards title="Sci-Fi Movies" category="sci-fi" />
<TitleCards title="Thriller Movies" category="thriller" />
<TitleCards title="Adventure Movies" category="adventure" />
<TitleCards title="Fantasy Movies" category="fantasy" />
<TitleCards title="Animated Movies" category="animation" />
<TitleCards title="Crime Movies" category="crime" />
<TitleCards title="Documentaries" category="documentary" />
<TitleCards title="Family Movies" category="family" />
<TitleCards title="Musicals" category="musical" />
<TitleCards title="Mystery Movies" category="mystery" />

            </div>
            <Footer/>
      
    </div>
  )
}

export default Home
