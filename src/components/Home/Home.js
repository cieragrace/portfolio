import './Home.css'

const Home = () => {
  return(
    <div className='home-container'>
      <nav className='nav-container'>
        <h3>Ciera Muniz FEE</h3>
        <div className='nav-link-container'>
          <button className='about link'>About</button>
          <div>|</div>
          <button className='projects link'>Projects</button>
          <div>|</div>
          <button className='contact link'>Contact</button>
        </div>
      </nav>
      <main className='main-container'>
        <section className='info-section'>
          <div className='info-text-container'>
            <h1 className='hello'>Hey there,</h1>
            <h3 className='intro'>Here's a bit about me...</h3>
            <p className='blurb'>I am a Denver based Front End developer with over 10 years experience in restaurant management. I am passionate and focused on accessibility, empathy and inclusivity in my work. In my time at Turing I continued to prove that I am an efficient learner with the ability to adapt quickly in a new environment individually or when working on a team. I am a dedicated hard worker, and am here to help make big changes for people in a positive way.</p>
          </div>
          <div className='circle-link-container'>
            <button className='about circle'>About</button>
            <button className='projects circle'>Projects</button>
            <button className='contact circle'>Contact</button>
          </div>
        </section>
        <section className='image-section'>
          <img className='image'></img>
        </section>
      </main>
      <footer className='footer-container'>
        <button className='linkedIn link'>LinkedIn</button>
        <button className='github link'>GitHub</button>
        <button className='resume link'>Resume</button>
      </footer>
    </div>
  )
}

export default Home