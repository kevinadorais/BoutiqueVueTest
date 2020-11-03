<template>
  <div id="app" class="bg-light">
    <the-header></the-header>
    <router-view class="w100"></router-view>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
  *{
    font-family: lato;
  }
  @keyframes fromLeftAnim{
    from {
        transform: translateX(-1500px);
    }
    to {
    }
}
@keyframes fromRightAnim{
    from {
        transform: translateX(1500px);
    }
    to {
    }
}
@keyframes fromBottomAnim{
    from {
        transform: translateY(1500px);
    }
    to {
    }
}
@keyframes itemDisplayAnim{
    from {
        transform: scale(0);
    }
    to {
    }
}
@keyframes itemDropAnim{
    from {
    }
    to {
      transform: scale(0);
    }
}
.fromLeft-enter-active{
    animation: fromLeftAnim 1s;
}
.fromRight-enter-active{
    animation: fromRightAnim 1s;
}
.fromBottom-enter-active{
    animation: fromBottomAnim 1s;
}
.itemToCart-enter-active{
  animation: itemDisplayAnim 0.8s;
}
.itemToCart-leave-active{
  animation: itemDropAnim 0.5s;
}
</style>
