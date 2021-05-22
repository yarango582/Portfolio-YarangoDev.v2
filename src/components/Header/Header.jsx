import getDateTime from '../../js/getDateTime';
import {useEffect, useState} from 'react';

import './Header.css';

const Header = () => {

    const [date, setDate] = useState(0);

    useEffect(() => {

        const invertal = setInterval(()=> {
            setDate(getDateTime());
        },0)
        window.onload = () => {
            clearInterval(invertal);
        }
        
    }, [date]);

    return(
        <>
           <header className='header'>
               <div className='header__container'>
                   <div className='header__title'>
                        <h2 className='header__title-text'>
                            <span>Y</span>
                            <span>a</span>
                            <span>r</span>
                            <span>a</span>
                            <span>n</span>
                            <span>g</span>
                            <span>o</span>
                            <span> </span>
                            <span>d</span>
                            <span>e</span>
                            <span>v</span>
                        </h2>
                   </div>
                   <p className='header__datetime'>{date}</p>
               </div>
           </header>
        </>
    )
}

export default Header;