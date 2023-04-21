import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return(
    <main className='about-container'>
      <section className='onside-container'>
        <div className='h2-container'>
          <h2 className='name'>Ciera</h2>
          <h2 className='name'>Muniz</h2>
          <h2 className='title'>Front End Engineer</h2>
        </div>
        <div className='link-container'>
          <ul className='link-list-container'>
            <li>Projects</li>
            <li>Contact</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Resume</li>
            <Link to='/'>Back to Home</Link>
          </ul>
        </div>
      </section>
      <section className='right-side-container'>
        <div className='image-container'>
          <div className='about-image'></div>
        </div>
        <div className='text-container'>
          <section className='left-text-container'>
            <p></p>
          </section>
          <section className='right-text-container'>
            <ul className='skills-list'></ul>
          </section>
        </div>
      </section>
    </main>
  )
}

export default About