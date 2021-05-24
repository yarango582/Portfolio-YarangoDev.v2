
const Card = () => {
    return (
        <>
            <div className='col-sm-12 col-md-6 col-lg-4'>
                <div className="card">
                    <img className="card-img-top" src="https://image.freepik.com/foto-gratis/adorable-retrato-cachorro-jack-russell-retriever_53876-64825.jpg" alt="Foto"/>
                    <div className="card-body">
                        <h5 className="card-title">Project title</h5>
                        <p className="card-text">Description of the project, tecnlonogies, tools etc.</p>
                        <a href="/#" className="btn btn-primary">Go to github or Principal Page</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;