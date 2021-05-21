import './Banner.css';

const Banner = ({scroll}) => {

    const target = document.getElementById('container-fluid');
    
    if(target){
        if(scroll>0){
            target.classList.replace('banner-begin', 'banner-end');
        }else if(scroll<=0 && target.classList[1]==='banner-end'){
            target.classList.replace('banner-end', 'banner-begin');
        }   
    }

    return(
        <div className='banner'>
            <div className='container-banner'>
                <div className='container-fluid banner-begin' id='container-fluid'>
                    
                </div>
            </div>
        </div>
    )

}

export default Banner;