import './Presentation.css';

const Presentation = () => {
    return (
        <div className='container-presentation'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 presentation-column'>
                        <div className='presentation-title'>
                            <h2 className='presentation-title__text text-center'>
                                Hello, my name is Yeison Arango 👋👨‍💻 Nice to meet you!
                            </h2>
                        </div>
                        <div className='presentation-content'>
                            <p className='presentation-content__text'>
                                I'm a full stack developer with knowledge in Javascript, 
                                React and Node.js amoung others, if you want to know more, 
                                scroll down
                            </p>
                            <p className='presentation-content__text'>
                                Got any questions? <a className='presentation-content__text--mail' href="mailto:yeisonarango03@gmail.com">Contact me.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation;