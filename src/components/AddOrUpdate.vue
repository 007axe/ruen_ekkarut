<script setup>
import { defineComponent, ref, onMounted } from 'vue'
import { db } from '../firebase/init'
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

const props = defineProps({
    data2: Object,
    isNew: Boolean
})

defineComponent({
    name: 'AddOrUpdate'
})

const emits = defineEmits(['close'])

onMounted(() => {
    product.value = {...product.value, ...props.data2}
    console.log(props.data2.id,'22222')
})

const product = ref({
    name: '',
    price: null,
    description: ''
})
async function addOrUpdate() {
    if(props.isNew) {
        await addDoc(collection(db, 'products'),product.value).then((res) => {
            emits('close')
        })
    }
    else {
        await updateDoc(doc(db, 'products', props.data2.id),product.value).then((res) => {
            emits('close')
        })
    }
}
</script>

<template>
    <transition name="model">
        <div class="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] transition-opacity ease-in">
            <div class="flex justify-center items-center h-[100%]">
                <div class="w-[500px] bg-gray-200 p-5 rounded-lg ">
                    <input class="border border-green-500 text-green-900 mb-2 placeholder-green-700  rounded-lg  block w-full p-2.5" type="text" placeholder="ใส่ชื่อสินค้า" v-model="product.name" >
                    <input class="border border-green-500 text-green-900 mb-2 placeholder-green-700  rounded-lg  block w-full p-2.5" type="number" placeholder="ใส่ราคา" v-model="product.price" >
                    <textarea class="border border-green-500 text-green-900 mb-2 placeholder-green-700  rounded-lg  block w-full p-2.5" placeholder="ใส่รายละเอียด" v-model="product.description" cols="30" rows="10"></textarea>
                    <div class="flex justify-between">
                        <button @click="emits('close')">Close</button>
                        <button @click="addOrUpdate()">{{ isNew ? 'Add' : 'Update' }}</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </transition>
</template>