import React from 'react'
import Navbar from './Navbar'
import './About.css'
import Choice from '../components/home/Choice'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      {/* <h1>About</h1> */}
      <div className='Few_img'>

        <div className='Few_words'>
          <h5>A FEW WORDS</h5>
          <h2>About Us</h2>

        </div>
      </div>
      <div className='Flo'>
        <div className='Elit'>
          <div className='sub_elit'>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>

          </div>
          <div className='elit_border'>

          </div>

        </div>
        <div className='ligula'>
          <h2>Cras ut ultricies risus. Etiam ac malesuada lectus. Sed congue nisi vitae lorem ullamcorper laoreet. In eget tellus mauris. Phasellus id ligula.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet.
            Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis.
            Curabitur tortor dolor, fringilla eu fringilla id, dignissim in urna.</p>
          <p>Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros,
            sit amet bibendum nibh consectetur quis. Curabitur tortor dolor,
            fringilla eu fringilla id.</p>

        </div>

      </div>
      <div className='mauris'>
        <div className='cover_0'>
          <div className='cover_txts'>
            <h2>About Our Products</h2>
            <div className='border_div'></div>
            <h5>
              Proin at velit sed elit varius porttitor. Ut a suscipit quam, eu congue odio.
              Sed eget viverra est. Vivamus ut sodales neque. Sed vel dui et dolor placerat egestas id lacinia mauris
            </h5>

          </div>

        </div>
      </div>
      <div className='cover_intro'>
        <div className='intro_div'>
          <div className='intro_pic'>

          </div>
          <div className='intro_txt'>
            <div className='sub_intro'>
              <h5>ABOUT ME</h5>
              <h2>Hi, I'm Lucee!</h2>
              <h3>I'm a 22 years old woman entrepreneur, living in Miami, Florida</h3>
              <div className='intro_border'>

              </div>

              <p>Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus.
                Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna,
                id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum
                finibus felis non massa commodo molestie at id justo. Quisque
                sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.
              </p>
              <p>
                Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna,
                id pulvinar ipsum dictum eget.
              </p>

            </div>

          </div>

        </div>
      </div>
      <div className='choice'> 
        <Choice/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default About