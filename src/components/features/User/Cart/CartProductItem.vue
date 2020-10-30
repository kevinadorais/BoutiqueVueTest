<template>
  <div class="">
      <h6 class="text-center w-100">{{ item.title }}<button @click="removeItemFromCart" class="close d-flex justify-content-end"><span>&times;</span></button></h6>
      <span class="d-flex justify-content-center">{{ item.price | price }}</span>
      <p class="d-flex justify-content-center">- - -</p>
  </div>
</template>

<script>
import { eventBus } from '../../../../main';

export default {
  props: ['item'],
  methods: {
    removeItemFromCart(){
      eventBus.removeItemFromCart({ ...this.item });
    }
  }
}
</script>

<style>

</style>