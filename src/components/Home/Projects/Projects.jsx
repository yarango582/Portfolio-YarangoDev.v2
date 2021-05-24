import './Projects.css';
import Cards from './Cards/Cards';

const Projects = () => {

    return(
    <div className='container-projects'>
        <div className='container-projects__text'>
            <p className='container-projects__text-title'>
                My Projects
            </p>
        </div>
        <Cards/>
    </div>
    )

}

export default Projects;