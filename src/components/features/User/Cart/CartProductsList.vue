<template>
  <div class="d-flex flex-column">
    <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item>
    <template v-if="cart.length">
      <hr class="w-100">
      <h5 class="d-flex justify-content-center text-center">Total de la commande : {{ totalCart }} €</h5>
      <button class="btn-dark">Payer ma commande</button>
    </template> 
  </div>
</template>

<script>
import CartProductItem from './CartProductItem';

export default {
  components: {
    CartProductItem
  },
  props: ['cart'],
  computed: {
    totalCart(){
      return this.cart.reduce((acc, v) => {
        acc += v.price;
        return acc;
      }, 0)
    }
  }
}
</script>

<style>

</style>