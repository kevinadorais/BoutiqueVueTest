<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4 d-flex justify-content-start">
    <a class="navbar-brand d-flex justify-content-start">
     <img src="../assets/logo.png" width="50" height="50">
     <h1>BoutiqueVueTest</h1>
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar navbar-collapse d-flex justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a @click="changePage('user')" class="nav-link" :class="{ active : page === 'user'}">Boutique</a>
        </li>
        <li class="nav-item">
          <a @click="changePage('admin')" class="nav-link" :class="{ active : page === 'admin'}">Admin</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { eventBus } from '../main'

export default {
  data() {
    return {
      page: eventBus.page
    }
  },
  methods: {
    changePage(page){
      eventBus.changePage(page);
      eventBus.$on('update:page', (page) => {
        this.page = page;
      })
    }
  }
}
</script>

<style scoped>
  a{
    cursor: pointer;
  }
</style>