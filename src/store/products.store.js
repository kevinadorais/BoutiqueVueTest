import axios from 'axios' ;

const products = {
    state: {
        products: []
    },
    mutations: {
        initProducts(state, payload){
            state.products = payload ;
        },
        addProduct(state, payload){
            state.products.push(payload) ;
        }
    },
    actions: {
        initProductsToShop(context) {
            axios.get('products.json')
                .then( res => {
                    const data = res.data;
                    context.commit('initProducts', Object.keys(data).map( key => data[key]))
                })
        },
        addProductToShop(context, payload){
            axios.post('products.json', payload)
                .then( () => {
                    context.commit('addProduct', payload) ;
                })
        }
    }
}

export default products ;