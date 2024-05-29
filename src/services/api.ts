import axios from "axios";

const api = axios.create({
    baseURL: 'https://dummyjson.com/auth/',
});

const saveToken = (token: string) => {
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = getToken();
};

const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
}

const validateToken = () => {
        return api.get('/me', {
            headers: {
                Authorization: getToken(),
            }
        });
}

export {
    api, getToken, saveToken, validateToken
};

