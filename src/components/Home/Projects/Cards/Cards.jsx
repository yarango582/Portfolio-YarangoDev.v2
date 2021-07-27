import './Cards.css';
import Card from './Card/Card';
import Project from '../../../../utils/project';

const Cards = () => {

    const project = new Project();
    const newObj = [...project.getProjects()];

    return (
        <div className='card-container'>
            <div className='container'>
                <div className='row row-cards'>
                    {
                      newObj.map((data, index) => {
                          return(
                              <div className='col-sm-12 col-md-6 col-lg-4' key={index}>
                                  <Card 
                                    name={data.name}
                                    description={data.description}
                                    url={data.url}
                                    urlRepository={data.urlRepository}
                                    img={data.img}
                                />
                              </div>
                          )
                      })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards;