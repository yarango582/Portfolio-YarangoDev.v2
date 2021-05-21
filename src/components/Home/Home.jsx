import './Home.css';
import Presentation from './Presentation/Presentation';

const Home = ({scroll, containerTarget, bannerOutText}) => {

    
    const stateBanner = {
        start: 'banner-begin',
        end: 'banner-end',
        showMenu: 'banner-show-menu',
    }
    
    if(containerTarget){ 
        if(scroll>0){
            containerTarget.classList.replace(stateBanner.start, stateBanner.end);
            containerTarget.classList.add('gradiant');
            if(containerTarget.classList[1] === stateBanner.showMenu){
                containerTarget.classList.replace(stateBanner.showMenu, stateBanner.end)
            }  
        }else if(scroll<=0 && containerTarget.classList[1]===stateBanner.end){
            containerTarget.classList.replace(stateBanner.end, stateBanner.start);
        }  
    }
    
    const showMenu = () => {
        for(let i of containerTarget.classList.values()){
            if(i === stateBanner.start){
                containerTarget.classList.replace(i, stateBanner.showMenu);
                bannerOutText.classList.add('hide');
                bannerOutText.classList.remove('show');
            }else if(i === stateBanner.showMenu) {
                containerTarget.classList.replace(i, stateBanner.start);
                bannerOutText.classList.remove('hide');
                bannerOutText.classList.add('show');
            }
        }
    }

    return(
        <div className='home'>
            <div className='home-container'>
                <a href='/#' className='banner__button-menu' onClick={showMenu}>
                    <i className="fas fa-bars banner__button-menu-icon"></i>
                </a>
                <div className='banner-content-container'>
                    <Presentation/>
                </div>
                <div className='banner-out-text' id='banner-out-text'>
                    <h1>
                        Welcome to my portfolio
                    </h1>
                </div>
                <div className='container-fluid banner-begin' id='container-fluid'>
                </div>
            </div>
        </div>
    )

}

export default Home;