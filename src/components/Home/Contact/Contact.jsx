import './Contact.css';

const Contact = () => {

    return(
    <div className='container-contact'>
        <div className='container-contact__text'>
            <p className='container-contact__text-title'>
                Contact me
            </p>
        </div>
        <div className='container-cards'>
            <div className='container-cards__card'>
            </div>
        </div>
        <div className='arrow-up-container'>
           <a className='arrow-up-container__link' href="/#"><i className="far fa-arrow-alt-circle-up"></i></a>
        </div>
    </div>
    )

}

export default Contact;