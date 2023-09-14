<script setup>
import { reactive } from 'vue'


const arr = reactive(["เรือนเอกรุจต์", "Ruen Ekkarut"])
const img = ('/public/favicon.jpeg')
</script>

<template>
  <div class="w-full h-[100vh] bg-[url('https://cdn.discordapp.com/attachments/511170800997629954/1140933541480378408/367507894_1029601531373168_3676124302816852865_n.jpg')] bg-cover bg-center">
    <div class="w-full h-full flex  justify-center items-center md:backdrop-blur bg-[rgba(250,250,250,0.1)] dark:bg-[rgba(0,0,0,0.9)]">
      <div class="container flex md:flex-row flex-col md:justify-between justify-center items-center  mx-auto h-full">
      <div class="md:w-[40%] w-[80%] txet-center">
        <VueWriter class="font-Chonburi text-4xl font-bold text-center md:text-left" :array="arr" />
        <h1 class="">รับผลิตของรับไหว้งานเเต่ง งานบวช งานเกษียณอายุราชการ เเละงานมงคลอื่นๆ ตามออร์เดอร์ รับประกันคุณภาพสินค้าด้วยประสบการณ์ที่มากกว่า 20 ปี</h1>
      </div>
      <div class="md:w-[40%] w-[80%] txet-center">
        <img :src="img" alt="" class="rounded-xl">
    </div>
    </div>
    </div>
  </div>

</template>

<style scoped>

.bg-custom {
  background-color: #ff626d;
  /* Fallback color */
  background-color: rgba(226, 80, 80, 0.7);
  /* Black w/opacity/see-through */
}
</style>