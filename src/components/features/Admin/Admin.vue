<template>
    <div class="d-flex justify-content-center p-5">
        <transition name="fromBottom" appear>
            <admin-product-form class="col-8 border"></admin-product-form>
        </transition>
    </div>
</template>

<script>
import AdminProductForm from './AdminProductForm';

export default {
    components: {
        AdminProductForm
    }
}
</script>

<style>

</style>