import moment from 'moment';

const getDateTime = () => {
    return (moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'));
}

export default getDateTime;