<template>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Ingrese email" v-model.trim="email" ><br>
        <input type="password" placeholder="Ingrese contraseña" v-model.trim="password" ><br>
        <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
    </form>
   
</template>
<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user'
// import { useRouter } from 'vue-router'

const userStore = useUserStore();
// const router = useRouter()

const email = ref('angel@gmail.com')
const password = ref('123456')    

const handleSubmit = async () => {
    console.log(email.value)
    console.log(password.value)
    if (!email.value || password.value.length < 6 ) {
        return alert('llena los campos')
    }
    await userStore.loginUser(email.value, password.value)
    // router.push("/")
 }

</script>
 