<template>
  <div class="border m-3 bg-white">
    <h3 class="border-bottom p-3 d-flex justify-content-center text-dark">Mon Panier</h3>
    <cart-products-list :cart="cart" class="p-3"></cart-products-list>
  </div>
</template>

<script>
import CartProductsList from './CartProductsList';
import { eventBus } from '../../../../main';

export default {
  components: {
    CartProductsList
  },
  data() {
    return {
      cart: []
    }
  },
  created() {
    this.cart = eventBus.cart;
    eventBus.$on('update:cart', (cart) => {
      this.cart = cart;
    })
  }
}
</script>

<style>

</style>