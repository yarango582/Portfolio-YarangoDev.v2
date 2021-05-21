import './Presentation.css';

const Presentation = () => {
    return (
        <div className='container'>
            <h2 className='container__title text-center mt-3'>
                Hi, my name's Yeison Arango 👋👨‍💻 Nice to me you!
            </h2>
            <section>
                <div className='container__presentation'>
                    <p className='container__presentation-text'>
                        I'm a full stack developer with knowledge in Javascript,
                        React and Node.js amoung others, if you want to know more,
                        scroll down
                    </p>
                    <div className='container__presentation-contact'>
                        <p className='container__presentation-text text-center'>
                            Got any questions? <a href="mailto:yeisonarango03@gmail.com">Contact me.</a>
                        </p>   
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Presentation;