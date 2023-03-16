import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import React from 'react';
import './Home.css'  
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';


import image1 from '../ImageCarrosel/2.jpg';
import image2 from '../ImageCarrosel/1.jpg';
import image3 from '../ImageCarrosel/3.jpg';
const images = [image1, image2, image3]

function Home() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
   
    setWidth(carousel.current?.scrollwidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className="App">
      
      <Header />
      
    <div className="AppCarousel">
         
    <div className="carousel-title">
    <h1>Bem-vindo ao seu ChatBot Inteligente!</h1>
    <p>Converse agora com um assistente virtual 
      inteligente através da API do ChatGPT
       ! Segue o link abaixo e experimente.</p>
    
      <Link to="/Chat" className='button-link'>Ir para o chat!
    
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
          </svg>
          
    </Link>
    </div>
  
    <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div 
        className="inner"
        drag="x"
        dragConstraints={{right: 0, left: -2400}}
        initial={{x: 1000}}
        animate={{x: 0}}
        transition={{duration: 2 }}
        >

          {images.map(image => (
            <motion.div className="item" key={image}>
              <div className='image-wrapper'>
                <img src={image} alt="Texto alt" />
              </div>
            </motion.div>
          ))}
          
          </motion.div>
      </motion.div>
    </div>
  <Footer />
</div>
  )
}

export default Home;


