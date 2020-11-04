<template>
  <div class="">
      <h6 class="text-center w-100">{{ item.title }}<button @click="deleteProductToCart(item.id)" class="close d-flex justify-content-end"><span>&times;</span></button></h6>
      <span class="d-flex justify-content-center">{{ item.price | price }}</span>
      <p class="d-flex justify-content-center">- - -</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['item'],
  methods: {
    ...mapMutations([
      'deleteProductToCart'
    ])
  }
}
</script>

<style>

</style>