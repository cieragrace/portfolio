import './Home.css'
import { Link } from "react-router-dom"

const Home = () => {
  return(
    <div className='home-container'>
      <nav className='nav-container'>
        <h3>Ciera Muniz FEE</h3>
        <div className='nav-link-container'>
          <Link className='about link'>About</Link>
          <div>|</div>
          <Link className='projects link'>Projects</Link>
          <div>|</div>
          <Link className='contact link'>Contact</Link>
        </div>
      </nav>
      <main className='main-container'>
        <section className='info-section'>
          <div className='info-text-container'>
            <h1 className='hello'>Hey there,</h1>
            <h3 className='intro'>Here's a bit about me...</h3>
            <p className='blurb'>I am a Denver based Front End developer with over 10 years
            experience in restaurant management. I am passionate and focused on accessibility, 
            empathy and inclusivity in my work. In my time at Turing I continued to prove that 
            I am an efficient learner with the ability to adapt quickly in a new environment 
            individually or when working on a team. I am a dedicated hard worker, and am here to 
            help make big changes for people in a positive way.
            </p>
          </div>
          <div className='circle-link-container'>
            <div className='about circle'>
              <Link className='about link'>About</Link>
            </div>
            <div className='projects circle'>
              <Link className='projects link'>Projects</Link>
            </div>
            <div className='contact circle'>
              <Link className='contact link'>Contact</Link>
            </div>
          </div>
        </section>
        <section className='image-section'>
          <img alt='self-portrait-in-mountains' className='image'></img>
        </section>
      </main>
      <footer className='footer-container'>
        <Link className='linkedIn link'>LinkedIn</Link>
        <Link className='github link'>GitHub</Link>
        <Link className='resume link'>Resume</Link>
      </footer>
    </div>
  )
}

export default Home