<template>
    <div>
        <div class="container h-screen mx-auto flex justify-center items-center">
            <div class="bg-blue-200 dark:bg-blue-950 w-[500px] px-10 py-10 rounded">
                <h1>Create an Account</h1>
                <input class="block mt-3 w-full h-10 rounded dark:bg-gray-800" type="text" placeholder="Email"
                    v-model="email">
                <input class="block mt-3 w-full h-10 rounded dark:bg-gray-800" type="password" placeholder="Password"
                    v-model="password">
                <button class="block mt-3 w-full h-10 bg-blue-500 rounded hover:bg-blue-900" @click="register">Submit</button>
                <button class="text-black flex items-center justify-between mt-3 w-full h-10 bg-blue-100 rounded hover:bg-blue-500 px-3" @click="signInWithGoogle"><i class="fa-brands fa-google "></i>Sign In With Google<p></p></button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/init.js'
import { useRouter } from 'vue-router'


const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Successfully registered!")
            router.push('/admin')
        })
        .catch((error) => {
            console.log(error.code)
            alert(error.message)
        })
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user)
            router.push('/admin')
        })
        .catch((error) => {

        })
}
</script>

<style scoped>
::placeholder {
   padding-left: 10px; 
}
</style>