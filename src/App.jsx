import '@fortawesome/fontawesome-free/js/all';
import './css/App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import { useEffect, useState } from 'react';


const App = () => {
    
    const [scrollYOffset, setScrollYOffset] = useState(0);
    const [bannerTarget, setBannerTarget] = useState(0);
    const [bannerOutText, setBannerOutText] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setScrollYOffset(window.pageYOffset);
        }
        setBannerTarget(document.getElementById('container-fluid'));
        setBannerOutText(document.getElementById('banner-out-text'));

    }, [bannerTarget]);

    return(
        <div className='container-outPage'>
            <Header/>
            <Banner 
                scroll={scrollYOffset} 
                containerTarget={bannerTarget}
                bannerOutText={bannerOutText}
            />
        </div>
    )
}

export default App;