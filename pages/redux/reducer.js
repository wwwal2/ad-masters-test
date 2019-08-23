const initialState = {
    cartProducts: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            let duplicate = state.cartProducts.find((item) => (action.payload.id === item.id));
            if (duplicate == undefined) {
                return { ...state, cartProducts: [...state.cartProducts, action.payload] }
            } else {
                console.log("The product has been already added");
                alert("The product has been already added")
                return state
            }
        case "REMOVE":
            let seachProduct = (product) => (product.id === action.payload);
            let index = state.cartProducts.findIndex(seachProduct);
            return {
                ...state, 
                cartProducts: [...state.cartProducts.slice(0, index), ...state.cartProducts.slice(index + 1)]
            }
        default:
            return state;
    }
};