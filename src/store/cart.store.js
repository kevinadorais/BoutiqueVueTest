const cart = {
    state: {
        cart: []
    },
    getters: {
        cartTotalPrice(state) {
            return state.cart.reduce((acc, v) => {
                acc += v.price;
                return acc;
              }, 0)
        }
    },
    mutations: {
        addProductToCart(state, payload){
            state.cart.push(payload);
        },
        deleteProductToCart(state, payload){
            let index = state.cart.findIndex( p => p.id === payload);
            state.cart.splice(index, 1);
        }
    }
}

export default cart ;