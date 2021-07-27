
const Card = ({name, description, url, img, urlRepository}) => {

        return (
            <>
                <div className="card">
                    <img className="card-img-top" src={img} alt="Foto"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className='card-text-container'>
                             <p className="card-text">{description}</p>
                        </div>
                        <a type='button' href={url} target='_blank' rel='noreferrer' className="btn btn-primary d-block">Demo</a>
                        <a type='button' href={urlRepository} target='_blank' rel='noreferrer' className="btn btn-primary d-block mt-1">Repository</a>
                    </div>
                </div>
            </>
        )

}

export default Card;