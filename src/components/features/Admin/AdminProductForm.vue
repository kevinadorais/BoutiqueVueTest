<template>
    <form @submit="submitProduct" class="d-flex flex-column p-5">
        <h3>Ajouter un Produit :</h3>
        <hr class="w-100"/>

        <div class="form-group">
            <label>Nom du produit :</label>
            <input v-model="form.title" class="form-control" type="text" placeholder="Nom Du Produit">
        </div>
        <div class="form-group">
            <label>description :</label>
            <textarea v-model="form.description" class="form-control" placeholder="Description"></textarea>
        </div>
        <div class="form-group">
            <label>prix :</label>
            <input v-model.number="form.price" class="form-control" type="text" placeholder="Prix">
        </div>
        <div class="form-group">
            <label>image :</label>
            <input v-model="form.img" class="form-control" type="text">
        </div>
        <ul v-if="errors.length">
            <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        <button type="submit" class="btn btn-dark">Ajouter</button>
    </form>
</template>

<script>
import { eventBus } from '../../../main'

export default {
    data() {
        return {
            form: {
                img: "",
                title: "",
                description: "",
                price: ""
            },
            errors: []
        }
    },
    methods: {
        formIsValid(){
            if(!this.form.title){
                this.errors.push("Le nom du produit est manquant !")
            }
            if(!this.form.description){
                this.errors.push("La description est manquante !")
            }
            if(!this.form.price){
                this.errors.push("Le prix est manquant !")
            }
            if(isNaN(this.form.price)){
                this.errors.push("Le prix doit être un nombre !")
            }
            if(!this.form.img){
                this.errors.push("L'image est manquante !")
            }
            return this.errors.length ? false : true
        },
        submitProduct(e){
            e.preventDefault();
            this.errors = [];
            if(this.formIsValid()){
                eventBus.addProductToShop({ ...this.form })
                this.resetForm();
                eventBus.changePage('user');
            }
            else{
                alert(this.errors)
            }
        },
        resetForm(){
            this.form = {
                img: "",
                title: "",
                description: "",
                price: ""
            }
        }
    }
}
</script>

<style>

</style>