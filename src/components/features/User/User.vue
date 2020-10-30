<template>
    <div class="d-flex flex-row">
        <transition name="fromLeft" appear>
            <shop class="w-75"></shop>
        </transition>
        <transition name="fromRight" appear>
            <cart class="w-25 h-100 position-sticky sticky-top"></cart>
        </transition>
    </div>
</template>

<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';

export default {
    components: {
        Shop,
        Cart
    }
}
</script>

<style>
</style>