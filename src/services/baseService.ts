import axios, { AxiosInstance } from 'axios';

const defaultConfig = {
    baseURL: '/api',
};

export abstract class BaseService {
    protected ai: AxiosInstance;

    constructor(config = defaultConfig) {
        this.ai = axios.create(config);
    }
}
