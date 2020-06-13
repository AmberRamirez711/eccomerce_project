import { 
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                amount: 8.40,
                orderNumber: 'A0807878078',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                amount: 19.40,
                orderNumber: '$FKTThfklsifous',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Max Hudgens',
                    shippingAddress: '7920 West State lane'
                }
            },
            {
                _id: 2,
                amount: 8.10,
                orderNumber: '7878078',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Tiffany Wilkonson',
                    shippingAddress: '1234 South State Street'
                }
            },
            {
                _id: 3,
                amount: 7.15,
                orderNumber: 'Ahdusiowq76234',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Brit Hall',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                amount: 24.45,
                orderNumber: 'NJOYO&&b',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Josh Braiopsd',
                    shippingAddress: '41 W Adams St'
                }
            },
            {
                _id: 5,
                amount: 8.00,
                orderNumber: 'B6786458',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Adri Smitch',
                    shippingAddress: '950 Sampson Way'
                }
            },
            {
                _id: 6,
                amount: 9.50,
                orderNumber: 'C67857469',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Brit Regard',
                    shippingAddress: '8975 Iron Cactus'
                }
            },
            {
                _id: 7,
                amount: 7.15,
                orderNumber: 'H7896579',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Oscar Holmes',
                    shippingAddress: '7655 W State Ave'
                }
            },
            
        ]
    })
}