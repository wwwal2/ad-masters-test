import originalProducts from '../comps/data';
const initialState = {
    cartProducts: [],
    totalOfAll: 0
};

export const reducer = (state = initialState, action) => {

    const search = (arr, id) => {
        let index =  arr.findIndex(item => (item.id === id));
        return arr[index]
     }
    let product = search(originalProducts, action.payload);
    let duplicate = search(state.cartProducts, action.payload);
    let index = state.cartProducts.findIndex(item => (item.id === action.payload));
    
    switch (action.type) {
        case "ADD":
            let cartProduct = {
                id: product.id,
                title:product.title,
                description:product.description,
                count: 1,
                totalPrice: product.price
            };
            let addPrice = Number(state.totalOfAll) + Number(product.price);

            if (duplicate === undefined) {
                return { ...state, 
                        cartProducts: [...state.cartProducts, cartProduct],
                        totalOfAll: addPrice 
                }
            } else {
                let duplicatedItem = {
                    ...duplicate, 
                    count: duplicate.count +1,
                    totalPrice: Number(duplicate.totalPrice) + Number(product.price)
                }    
                return { ...state, 
                        cartProducts: [...state.cartProducts.slice(0, index), duplicatedItem, ...state.cartProducts.slice(index + 1)],
                        totalOfAll: addPrice 
                    }
            }

        case "REMOVE":
            let removePrice = Number(state.totalOfAll) - Number(product.price);
            if (duplicate.count > 1) {
                let removable = {
                    ...duplicate,
                    count: duplicate.count - 1,
                    totalPrice: Number(duplicate.totalPrice) - Number(product.price)
                }
                return {
                    ...state, 
                    cartProducts: [...state.cartProducts.slice(0, index), removable, ...state.cartProducts.slice(index + 1)],
                    totalOfAll: removePrice 
                }
            } else {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts.slice(0, index), ...state.cartProducts.slice(index + 1)],
                    totalOfAll:removePrice
                }
            }
        default:
            return state;
    }
};