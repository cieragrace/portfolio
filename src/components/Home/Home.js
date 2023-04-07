import './Home.css'

const Home = () => {
  return(
    <div className='home-container'>
      <nav className='nav-container'>
        <h3>Ciera Muniz FEE</h3>
        <div className='nav-link-container'>
          <button className='about-link'>About |</button>
          <button className='projects-link'> Projects |</button>
          <button className='contact-link'>Contact</button>
        </div>
      </nav>
      <main className='main-container'>
        <section className='info-section'>
          <h1 className='hello'>Hello,</h1>
          <h3 className='intro'>A bit about me</h3>
          <p className='blurb'></p>
          <div className='circle-link-container'>
            <button className='about circle'></button>
            <button className='projects circle'></button>
            <button className='contact circle'></button>
          </div>
        </section>
        <section className='image-section'>
          <img className='image'></img>
        </section>
      </main>
      <footer className='footer-container'>
        <button className='resume'>resume</button>
        <button className='linkedIn'>linkedIn</button>
        <button className='github'>GitHub</button>
      </footer>
    </div>
  )
}

export default Home