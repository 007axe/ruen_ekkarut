<template>
  <div id="contact" class="py-5" >
    <div class=" mx-auto flex flex-col justify-center" data-aos="fade-up" data-aos-duration="2000">
      <h1 class="text-center mb-4 text-[#232F2F]" >ติดต่อ</h1>

      <div class="container xl:flex mb-8 mx-auto xl:justify-between duration-700 ease-in" >
        <!-- ข้อมูลการติดต่อ -->
        <div class="xl:text-start text-center duration-700 ease-in">
          <div class="text-[#232F2F]">
            <h1 class="mb-4">สอบถามเพิ่มเติมเกี่ยวกับสินค้าได้ที่</h1>
            <div class="xl:flex items-center mb-2">
              <i class="fa-solid fa-envelope text-3xl mr-3"></i>
              <p class="text-lg">Ekkawach2019@gmail.com</p>
            </div>
            <div class="xl:flex items-center mb-2">
              <i class="fa-brands fa-facebook text-3xl mr-3"></i>
              <p>
                <a
                  :href="faceBook"
                  target="popup"
                  class="text-lg text-[#232F2F] no-underline"
                  >เรือน เอกรุจต์ - Ruen Ekkarut</a
                >
              </p>
            </div>
            <div class="xl:flex items-center mb-2">
              <i class="fa-brands fa-line text-3xl mr-3"></i>
              <p>
                <a
                  :href="Line"
                  target="popup"
                  class="text-lg text-[#232F2F] no-underline"
                  >เรือน เอกรุจต์ - Ruen Ekkarut</a
                >
              </p>
            </div>
            <div class="xl:flex items-center mb-2">
              <i class="fa-solid fa-phone text-3xl mr-3"></i>
              <p class="text-lg">084-587-9935, 095-682-2554</p>
            </div>
            <div class="xl:flex items-center mb-2">
              <i class="fa-solid fa-location-pin text-3xl ml-1 mr-4"></i>
              <p class="text-lg">
                ศูนย์การค้า J.J.MALL ชั้น G ห้อง G223-224 ถ.กำเเพงเพชร 2 กรุงเทพมหานคร 10900
              </p>
            </div>
            <div class="mt-4" >
      <iframe
        class="rounded-md w-[100%] h-[240px] duration-700 ease-in mb-4"
        :src="map"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
          </div>
          
        </div>

        <div class="xl:w-[40%] xl:text-start text-center">
          <form
            action="mailto:info@ruenekkarut@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <label class="block text-lg ">ชื่อ</label>
            <input type="text" name="yourName" class="mb-4 rounded-md w-[100%] h-12" /><br />
            
            <label class="block text-lg">อีเมล</label>
            <input type="email" name="yourEmail" class="mb-4 rounded-md w-[100%] h-12" /><br />
            
            <label class="text-lg">รายละเอียด</label><br />
            <textarea name="yourMessage" cols="40" rows="10" class="mb-4 rounded-md w-[100%]"></textarea><br />
            <button type="submit" class="bg-[#232F2F] hover:bg-[#000000] text-[#DBB461]  hover:shadow-lg py-2 px-8 rounded-md" >ส่ง</button>
          </form>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>

const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.607894968213!2d100.54591987596818!3d13.802494996115893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c14d7006243%3A0x4ef54f56a9bf403d!2z4LmA4LiI4LmA4LiI4Lih4Lit4Lil4Lil4LmM!5e0!3m2!1sth!2sth!4v1691495595014!5m2!1sth!2sth"
const faceBook = "https://www.facebook.com/ruenekkarut"
const Line = "https://lin.ee/XpdyuYJ"

</script>

<style scoped>
</style>