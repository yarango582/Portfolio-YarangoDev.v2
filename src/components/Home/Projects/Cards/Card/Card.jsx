
const Card = ({name, description, url, img}) => {

        return (
            <>
                <div className="card">
                    <img className="card-img-top" src={img} alt="Foto"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className='card-text-container'>
                             <p className="card-text">{description}</p>
                        </div>
                        <a href={url} target='_blank' rel='noreferrer' className="btn btn-primary">Go to github or Principal Page</a>
                    </div>
                </div>
            </>
        )

}

export default Card;