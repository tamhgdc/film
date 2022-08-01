import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/',
    // proxy: { host: '192.168.193.12', port: 3128 },
    headers: {
        'Content-Type':'application/json'
    }
});
instance.defaults.params = {};
instance.interceptors.request.use(function (config:AxiosRequestConfig) {
    config.params = {...config.params, 'api_key': 'beb36572ce908c61fa2c0585f6e2ced8'}
    return config;
    }
);

export default instance;