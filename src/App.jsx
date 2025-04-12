

import React from 'react';
import './App.css';
import channel from './assets/channel.png';
import youtube from './assets/youtube.png'

function App() {

  return (
    
      <div className='outermost'>

        <div className='dummy-nav'>

        </div>

        <div className='navbar'>
          <div className='logo'>

          </div>

          <div className='nav-buttons'>
           
              <p>Youtube</p>

            
              <p>Blog</p>

           
           
              <p>About Me</p>

          
          </div>

        </div>

        <div className='home-div'>
          <div className='home-div-left'>
            
              <p className='inner-left'>
                A place <br></br>
                where Philosophy <br></br>meets<br></br>
                the Future.
              </p>
            

          </div>

          <div className='home-div-right'>

          </div>

        </div>

        <div className='Apathy-text'>
          <p className='Apathy-para'> Apathy is a space
          where philosophy meets science <br></br>— a channel and website dedicated to exploring the fundamental questions of existence through the lens of logic, curiosity, and critical thought. We dive deep into the paradoxes of the universe, the nature of consciousness, and the edges of human understanding, weaving scientific insights with philosophical inquiry. Whether it's dissecting reality, challenging belief systems, or contemplating the cosmos, Apathy invites you to think deeply, question everything, and embrace the unknown with an open mind.</p>
        </div>

        <div className='Youtube'>
          <div className='Latest-Upload'>
            <p className='Latest-upload-p'>Latest Upload</p>
          </div>
          <div className='Youtube-card'>
            <div className='Youtube-thumb'>
            <img src={youtube} alt="channel" width="72" height="72" />
              

            </div>
            <div className="Youtube-title-div">
              <p className='Youtube-title'>Significance of “You” or “It” ?</p>

            </div>
            <div className="Youtube-channel">
            <img className='yuki' src={channel} alt="channel" width="72" height="72" />
            <p className="Channel-name">Apathy</p>

            </div>
          </div>
        </div>

        <div className='footer'>
          <div className='footer-line'>

          </div>

          <div className= 'footer-socials'>
            <div className='discord'>
              
            </div>
            <div className='twitter'>
              
            </div>
            <div className='instagram'>
              
            </div>
            <div className='reddit'>
              
            </div>
            <div className='steam'>
              
            </div>
          </div>

          <div className= 'Copyright'>
            <p className='Copyright-para'>Copyright © Apathy . All rights reserved <br/>
            Designed By Rohit Patial</p>
          </div>

        </div>
      </div>
    
  );

}


export default App;