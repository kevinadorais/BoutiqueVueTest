<template>
    <div class="d-flex flex-row">
        <transition name="fromLeft" appear>
            <shop :products="products" class="w-75"></shop>
        </transition>
        <transition name="fromRight" appear>
            <cart :cart="cart" class="w-25 h-100 position-sticky sticky-top"></cart>
        </transition>
    </div>
</template>

<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import { mapState } from 'vuex';

export default {
    components: {
        Shop,
        Cart
    },
    computed: {
        ...mapState([ 'products', 'cart' ])
    },
    created () {
        this.$store.dispatch('initProductsToShop') ;
        console.log(this.$store.state.products)
    }
}

</script>

<style>
</style>