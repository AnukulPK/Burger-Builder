import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-project-udemy-default-rtdb.firebaseio.com/'
});

export default instance;