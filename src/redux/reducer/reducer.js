const product = {
    products: [],
    singleproduct: {},
}

export const productreducer = (state = product, action) => {
    switch (action.type) {
        case "setproduct": {
            return {
                ...state,
                product: action.payload,
            }
        }
        default:
            return state;
    }
}