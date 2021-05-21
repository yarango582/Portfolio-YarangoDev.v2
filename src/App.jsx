import './css/App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import { useEffect, useState } from 'react';


const App = () => {
    
    const [scrollYOffset, setScrollYOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setScrollYOffset(window.pageYOffset);
        }
    }, []);

    return(
        <div className='container-outPage'>
            <Header/>
            <Banner scroll={scrollYOffset}/>
        </div>
    )
}

export default App;