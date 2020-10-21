<template>
  <div class="m-2 mr-0">
    <h1 class="d-flex justify-content-center p-3 text-dark">Ma Boutique</h1>
    <shop-products-list :products="products" class="p-3 border bg-white"></shop-products-list>
  </div>
</template>

<script>
import ShopProductsList from './ShopProductsList.vue';
import { eventBus } from '../../main';

export default {
  components: {
    ShopProductsList
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.products = eventBus.products;
    eventBus.$on('update:products', (products) => {
      this.products = products;
    })
  }
}
</script>

<style>

</style>