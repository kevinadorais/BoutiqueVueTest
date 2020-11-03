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
          <router-link class="nav-link" to='/shop'>Boutique</router-link>
        </li>
        <li class="nav-item d-flex justify-content-center">
          <router-link class="nav-link" to='/admin'>Admin</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
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
  .router-link-active{
    color: white;
    font-weight: bold;
  }
  a{
    cursor: pointer;
  }
</style>