import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/bonsai';

export const getAll = async () => {
    const result = await request.get(`${BASE_URL}/species`);
    
    const guides = Object.values(result);

    return guides;
}

export const getFeatured = async () => {
    const result = await request.get(`${BASE_URL}/featured`);
    
    const featured = Object.values(result);

    return featured;
}

export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);
export const getPage = (pageId) => request.get(`${BASE_URL}/pages/${pageId}`);
