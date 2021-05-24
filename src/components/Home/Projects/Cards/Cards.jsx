import './Cards.css';
import Card from './Card/Card';

const Cards = () => {
    return (
        <div className='card-container'>
            <div className='container'>
                <div className='row row-cards'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default Cards;