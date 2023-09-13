import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDxC_eYfAOz8ZLlwdK3Z3Nxb_2nHZkv2I8",
  authDomain: "ruen-ekkarut.firebaseapp.com",
  projectId: "ruen-ekkarut",
  storageBucket: "ruen-ekkarut.appspot.com",
  messagingSenderId: "18376021168",
  appId: "1:18376021168:web:dac8ecd18fe7ee30a19775"
};

initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth()

