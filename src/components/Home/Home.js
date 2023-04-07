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
            <h1 className='hello'>Hello there,</h1>
            <h3 className='intro'>A bit about me</h3>
            <p className='blurb'>A Front End developer with over 10 years experience in restaurant management. Passionate and focused on accessibility, empathy and inclusivity in my work. An efficient learner with the ability to adapt quickly in a new environment individually or when working on a team. Dedicated hard worker, ready to help make big changes for people in a positive way.</p>
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
        <button className='resume link'>resume</button>
        <button className='linkedIn link'>linkedIn</button>
        <button className='github link'>GitHub</button>
      </footer>
    </div>
  )
}

export default Home