import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS
} from './types';

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'All'
            },
            {
                _id: 2,
                title: 'Javascript'
            },
            {
                _id: 3,
                title: 'UI/UX'
            },
            {
                _id: 4,
                title: 'Linux'
            },
            {
                _id: 5,
                title: 'Python'
            },
            {
                _id: 6,
                title: 'UML'
            },
            {
                _id: 0,
                title: 'Ruby'
            },
        ]
    })
}