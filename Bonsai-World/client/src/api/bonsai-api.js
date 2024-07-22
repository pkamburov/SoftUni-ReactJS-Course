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

export const getTreeDetails = async (treeId) => {
    const result = await request.get(`${BASE_URL}/details/${treeId}`);

    const details = Object.values(result);
    return details;
}

export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);

export const getAllPages = async () => {
    const result = await request.get(`${BASE_URL}/pages`);

    const pages = Object.values(result);
    return pages;
}

export const getFeaturedPages = async () => {
    const result = await request.get(`${BASE_URL}/featuredPages`);
    
    const featuredPages = Object.values(result);
    return featuredPages;
}
export const getPage = (pageId) => request.get(`${BASE_URL}/pages/${pageId}`);
