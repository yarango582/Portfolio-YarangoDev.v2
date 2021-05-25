import './Contact.css';

const Contact = () => {

    const handleClick = (event) => {
        event.preventDefault();

    }

    return(
    <div className='container-contact'>
        <div className='container-contact__text'>
            <p className='container-contact__text-title'>
                Contact me
            </p>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <form action="/" method="post">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <input className='contact-input' type="text" placeholder='Write your name'/>
                                </div>
                                <div className='col-12'>
                                    <input className='contact-input mt-2' type="email" placeholder='Write your email'/>
                                </div>
                                <div className='col-12'>
                                    <textarea className='contact-input mt-2' cols="20" rows="10" placeholder='Write your message here'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12'>
                                <button className='btn-sendMessage' onClick={handleClick}>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='arrow-up-container'>
           <a className='arrow-up-container__link' href="/#"><i className="far fa-arrow-alt-circle-up"></i></a>
        </div>
    </div>
    )

}

export default Contact;