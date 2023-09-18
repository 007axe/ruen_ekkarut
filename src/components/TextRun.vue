<template>
<Vue3Marquee class="bg-blue-200 dark:bg-gray-800 mt-2">
    <h2>รับผลิตของรับไหว้งานเเต่ง &nbsp;</h2>
    <h2>งานบวช &nbsp;</h2>
    <h2>งานเกษียณอายุราชการ &nbsp;</h2>
    <h2>เเละงานมงคลอื่นๆ &nbsp;</h2>
    <h2>ตามออร์เดอร์ &nbsp;</h2>
    <h2>รับประกันคุณภาพสินค้าด้วยประสบการณ์ที่มากกว่า 20 ปี &nbsp;</h2>
  </Vue3Marquee>
</template>
<script>
import { defineComponent } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'

export default defineComponent({
    components: {
    Vue3Marquee,
  }
})
</script>