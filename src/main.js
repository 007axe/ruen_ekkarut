import './assets/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxC_eYfAOz8ZLlwdK3Z3Nxb_2nHZkv2I8",
  authDomain: "ruen-ekkarut.firebaseapp.com",
  projectId: "ruen-ekkarut",
  storageBucket: "ruen-ekkarut.appspot.com",
  messagingSenderId: "18376021168",
  appId: "1:18376021168:web:dac8ecd18fe7ee30a19775"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
