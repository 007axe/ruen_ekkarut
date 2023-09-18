<template>
  <div class="md:mt-[4.5rem] mt-[3.5rem]">
    <div class="container mx-auto">
      
      <h1 class="text-center">Admin</h1>
      <AddOrUpdate @close="toggleComponent()" v-if="show" :data2="data" :isNew="isNew"/>
      <button @click="toggleComponent">Add New</button>
      <div v-for="product in products" :key="product.name" class="p-4 flex justify-between items-center mb-2 bg-blue-200 text-center">
        <div class="text-left w-[80%]">
          <div>ชื่อ: {{ product.name }}</div>
          <div>รายละเอียด: {{ product.description }}</div>
          <div>ราคา: {{ product.price }} บาท</div>
        </div>
        <div >
          <button @click="toggleComponent(product, false)">แก้ไข</button>
          <button @click.stop="delectRecord(product.id)" class="ml-4">ลบ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { db } from '../firebase/init'
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ref, onMounted } from 'vue'
import AddOrUpdate from '../components/AddOrUpdate.vue';

const products = ref([])
const show = ref(false)
const data = ref({})
const isNew = ref(true)


onMounted(async() => {
let productsColection = await getDocs(collection(db, "products"));
productsColection.forEach((product) => {
  products.value.push({...product.data(), id: product.id})
  console.log(product.data());

  })
})

function toggleComponent(docData = {}, isNewDoc = true) {
  data.value = docData
  isNew.value = isNewDoc
  show.value = !show.value
}

async function delectRecord(id) {
  await deleteDoc(doc(db, 'products', id))
}







</script>

<style>

</style>