<template>
    
    <div>
        <div class="container h-screen mx-auto flex justify-center items-center">
            <div class="bg-blue-200 dark:bg-blue-950 w-[500px] px-10 py-10 rounded">
                <h1 class="text-center">Login</h1>
                <input class="block mt-3 w-full h-10 rounded dark:bg-gray-800" type="text" placeholder="Email" v-model="email">
                <input class="block mt-3 w-full h-10 rounded dark:bg-gray-800" type="password" placeholder="Password" v-model="password">
                <p v-if="errMsg">{{ errMsg }}</p>
                <button class="block mt-3 w-full h-10 bg-blue-500 rounded hover:bg-blue-900" @click="register">เข้าสู่ระบบ</button>
                <RouterLink to="/register" class="mt-3 w-full flex justify-center items-center h-10 bg-blue-500 rounded hover:bg-blue-900">สมัครสมาชิก</RouterLink>
                <p class="mt-3 text-center">หรือ</p>
                <button class="text-black block mt-3 w-full h-10 bg-blue-100 rounded hover:bg-blue-500 " @click="signInWithGoogle">Sign In With Google</button>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errMsg = ref()
const router = useRouter()

const register = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Successfully signed in!")
            console.log(auth.currentUser)
            router.push('/admin')
        })
        .catch((error) => {
            console.log(error.code)
            alert(error.message)
        })
}

const signInWithGoogle = () => {
    console.log(error.code)
    switch (error.code) {
        case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
        case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
        case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break
        default:
            errMsg.value = 'Email or password was incorrect'
            break
    }
}
</script>
  
<style scoped>
::placeholder {
   padding-left: 10px; 
}
</style>