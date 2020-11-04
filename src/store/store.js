import Vue from 'vue' ;
import Vuex from 'vuex' ;
import products from './products.store' ;
import cart from './cart.store' ;

Vue.use(Vuex) ;

const store = new Vuex.Store ({
    modules: {
        products,
        cart
    }
})

export default store ;