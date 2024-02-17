//import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import About from './About'
import Experience from './Experience'
import TechStack from './TechStack'
import Projects from './Projects'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    AOS.init({
      anchorPlacement: 'bottom-bottom',
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='flex flex-col md:flex-row p-8 sm:p-16 md:p-0'>
        <aside className='md:fixed md:top-0 md:bottom-0 md:flex-initial flex flex-col items-center justify-center md:left-[15vw] md:w-[30vw] w-full'>
          <div className="text-start">
            <div>
              <h1 className='mb-1 text-4xl font-semibold text-white' data-aos="fade-right" >Brahim Abderrazak</h1>
              <h2 className='mb-2 text-l tracking-widest2 font-light text-slate-300' data-aos="fade-right">DEV-OPS ENGINEER</h2>
              <p className='mb-4 text-slate-400' data-aos="fade-right" >I work on implementing automated CI/CD workflows for a seamless and collaborative development process.</p>
              <div className="flex gap-6 mb-4 self-start">
                <a href="https://www.linkedin.com/in/abderrazak1307/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} size='xl' data-aos="fade-right" data-aos-delay="50" /></a>
                <a href="https://github.com/abderrazak1307" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} size='xl' data-aos="fade-right" data-aos-delay="100" /></a>
                <a href="https://twitter.com/abderrazak1307" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} size='xl' data-aos="fade-right" data-aos-delay="150" /></a>
                <a href="https://discordapp.com/users/307600950032465922" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faDiscord} size='xl' data-aos="fade-right" data-aos-delay="200" /></a>
                <a href="mailto:brahim.abderrazak1307@gmail.com" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} size='xl' data-aos="fade-right" data-aos-delay="250" /></a>
              </div>
            </div>
            <div className="flex mb-8 justify-center" data-aos="zoom-in-right" data-aos-delay="400">
              <div className='bg-gradient-to-r from-[#5CB446]/40 via-[#5CB446]/60 to-[#5CB446]/40 rounded-full px-4 py-1 flex items-center content-center'>
                <div className='bg-[#5CB446] h-4 w-4 rounded-full animate-ping'></div>
                <div className='ms-[-1rem] me-3 bg-[#5CB446] h-4 w-4 rounded-full'></div>
                <span className='text-white'>Open for hire</span>
              </div>
            </div>
            <div className='bg-gradient-to-r from-[#00A3FF]/30 to-[#00A3FF]/0 h-1 mb-4'></div>
            <ul className="flex gap-6">
              <li className='w-1/12'><a href="#About" className='font-light hover:font-regular text-slate-300 text-l' data-aos="fade-right" data-aos-delay="100">About</a></li>
              <li className='w-4/12'><a href="#Experience" className='font-light hover:font-regular text-slate-300 text-l' data-aos="fade-right" data-aos-delay="200">Experience & Education</a></li>
              <li className='w-2/12'><a href="#TechStack" className='font-light hover:font-regular text-slate-300 text-l' data-aos="fade-right" data-aos-delay="300">Tech Stack</a></li>
              <li className='w-1/12'><a href="#Projects" className='font-light hover:font-regular text-slate-300 text-l' data-aos="fade-right" data-aos-delay="400">Projects</a></li>
            </ul>
          </div>
        </aside>
        <main className='flex-initial md:w-8/12 text-start md:ms-[50vw]'>
          <About></About>
          <Experience></Experience>
          <TechStack></TechStack>
          <Projects></Projects>
          <div className='footer'>
            <p className='mb-2' data-aos="fade-up">Designed and developed by yours truly :).</p>
            <p className='mb-4' data-aos="fade-up" data-aos-delay="100">Crafted using React.JS, Tailwind CSS, and proudly hosted on Netlify.</p>
            <p className='mb-16' data-aos="fade-up" data-aos-delay="200">All content is licensed under the <a href="#" className='underline'>CC BY-NC-SA 4.0 license</a>. © 2023 Brahim Abderrazak </p>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
