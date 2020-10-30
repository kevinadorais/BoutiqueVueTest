<template>
  <div class="d-flex flex-column">
    <transition-group name="itemToCart" appear tag="div">
      <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item>
    </transition-group>
    <template v-if="cart.length">
      <hr class="w-100">
      <h5 class="d-flex justify-content-center text-center">Total de la commande : {{ totalCart | price }}</h5>
      <button class="btn-dark">Payer ma commande</button>
    </template> 
    <template v-else>
      <p style="fontSize:1.2rem;">Ajoutez un produit à votre panier ... </p>
      <hr class="w-100">
      <h5 class="d-flex justify-content-center text-center">Total de la commande : {{ totalCart | price }}</h5>
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