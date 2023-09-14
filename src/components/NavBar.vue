<template>
    <nav 
    :class="{ 'scrolled': !view.atTopOfPage }" 
    class="flex fixed w-full items-center justify-between flex-wrap p-2 m-auto top-0 animated"> 
        <div class="container mx-auto flex justify-between items-center md:h-14">
            <div >
                <h1 class="font-Chonburi md:static absolute top-2.5 left-[30%]">เรือนเอกรุจต์</h1>
            </div>

                <ul class="dark:md:bg-inherit md:bg-inherit md:flex md:items-center text-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-[#EEEEEE] dark:bg-black md:w-auto w-full h-[30vh] md:py-0 py-10 top-0 duration-700 ease-in"
                :class="[open ? 'left-0' : 'left-[-100%]']">
                    <li v-for="item in navLink" :key="item.name">
                        <RouterLink :to="item.link"
                            class="mr-3  link link-underline link-underline-black md:mb-0 mb-3 md:mx-5 cursor-pointer text-md md:text-lg font-Roboto">
                            {{ item.name }}</RouterLink>

                    </li>
                    <!-- <RouterLink to="/register" class="mr-3">สมัคร</RouterLink> -->
                </ul>
                <div>
                    <RouterLink v-if="!isLoggedIn" to="/signin">เข้าสู่ระบบ</RouterLink>
                    <button @click="handleSignOut" v-if="isLoggedIn"><i class="fa-solid fa-right-to-bracket"></i></button>
                    <DarkMode />
                </div>



            <span @click="MenuOpen()" class="absolute md:hidden left-2.5 top-2.5 cursor-pointer text-3xl">
                <i :class="[open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars']"></i>
            </span>
        </div>
    </nav>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import DarkMode from './DarkMode.vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/init.js'
import { useRouter } from 'vue-router'



const isLoggedIn = ref(false)
const router = useRouter()
const navLink = [
    { name: "หน้าแรก", link: "/" },
    { name: "สินค้า", link: "/" },
    { name: "แอดมิน", link: "/admin"},
    
]
let open = ref(false)
const MenuOpen = () => {
    open.value = !open.value
}

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true
        } else {
            isLoggedIn.value = false
        }
    })
})

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push('/')
    })
}

const view = ref({
    atTopOfPage: true
})
onBeforeMount(() => {
    window.addEventListener("scroll", handleScroll)
})  
   

const handleScroll = () => {
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>0){
            // user is scrolled
            if(view.value.atTopOfPage) view.value.atTopOfPage = false
        }else{
            // user is at top of page
            if(!view.value.atTopOfPage) view.value.atTopOfPage = true
        }
    }

</script>

<style scoped>
nav {
    z-index: 10
}
nav.scrolled  {
      @apply bg-[rgba(250,250,250,0.5)];
      @apply backdrop-blur;
      @apply dark:bg-[rgba(0,0,0,0.5)];
      @apply shadow-md;
      @apply shadow-[#004225];
      @apply dark:shadow-[#004225];
      border-bottom: 0px;
}




.link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent),
        linear-gradient(#232F2F, #232F2F);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.5s ease-in-out;
}

.link-underline-black {
    background-image: linear-gradient(transparent, transparent),
        linear-gradient(#232F2F, #232F2F);
}

.link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%;
}
</style>