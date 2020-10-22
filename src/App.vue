<template>
  <div id="app" class="bg-light">
    <the-header></the-header>
    <component :is="page" class="w100"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import User from './components/features/User/User';
import Admin from './components/features/Admin/Admin';
import { eventBus } from './main'

export default {
  name: 'App',
  components: {
    TheHeader,
    User,
    Admin
  },
  data() {
    return {
      page: eventBus.page
    }
  },
  created() {
    eventBus.$on('update:page', (page) => {
      this.page = page
    })
  }
}
</script>

<style>
  *{
    font-family: lato;
  }
</style>
