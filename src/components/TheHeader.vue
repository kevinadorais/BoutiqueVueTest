<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4 d-flex justify-content-space-between">
    <a class="navbar-brand d-flex justify-content-start">
     <img src="../assets/logo.png" width="50" height="50">
     <h1>BoutiqueVueTest</h1>
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon" v-trigger-collapse="'collapse'"></span>
    </button>
    <div id="collapse" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item d-flex justify-content-center">
          <a @click="changePage('user')" class="nav-link" :class="{ active : page === 'user'}">Boutique</a>
        </li>
        <li class="nav-item d-flex justify-content-center">
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
    }
  },
  created() {
    eventBus.$on('update:page', (page) => {
        this.page = page;
      })
  },
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener('click', () => {
          nav.classList.remove('show')
        })
        const nav = document.querySelector(`#${ binding.value }`);
        el.addEventListener('click', (e) => {
          if(nav.classList.contains('show')){
            nav.classList.remove('show')
          }
          else{
            nav.classList.add('show')
          }
          e.stopPropagation();
        })
      }
    }
  }
}
</script>

<style scoped>
  a{
    cursor: pointer;
  }
</style>