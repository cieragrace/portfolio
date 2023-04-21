import './Work.css'
import WorkCard from '../WorkCard/WorkCard'
import { Link} from 'react-router-dom'

const Work = ({projects}) => {
  const projectCards = projects.map((project, index) => {
    return(
      <WorkCard
        key={index}
        name={project.name}
        type={project.type}
        image={project.cardImg}
        userStory={project.userStory}
         />
      )
    })
  return (
    <div className='work-container'>
      <h1 className='project-header'>Projects</h1>
      <nav className='work-nav'>
        <Link to='/'>Back to Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        <a href='https://docs.google.com/document/d/18vq-qTCVMb_P5Ipbj60R9A848xsQq0aBTJjWFsQOG9k/edit?usp=sharing' >Resume</a>
      </nav>
      <div className='project-grid'>
        {projectCards}
      </div>
    </div>
  )
}

export default Work