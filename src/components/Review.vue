<template>
  <div class="">
    <div class="container mx-auto">
    <h1 class="text-center">รีวิว</h1>
  </div>
    <Carousel class="md:container mx-auto"  :itemsToShow="1.99" :wrapAround="true" :transition="500">
    <Slide  v-for="item in items" :key="item.img">
      <div 
      class=" py-[20px] px-[5px]">
      <img :src="item.img" alt="img-review" class="md:h-[600px] h-[250px] w-[450px] pt-4 ">
    </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>

  
  </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'






  const initialBoard = []
  for (var i = 1; i <= 18; i++) {
    initialBoard.push({img: '/public/review/review'+i+'.jpg'});
  }

  export default defineComponent({
    components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
    setup() {
      return {
        items: initialBoard
      };
    },
  })
  </script>
  <style scoped>
  .carousel__slide--sliding {
    transition: 0.8s;
  }
  
  .carousel__slide {
    opacity: 0.5;
    transform: rotateY(-20deg) scale(0.9);
  }
  
  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-20deg) scale(0.9);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(20deg) scale(0.9);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }

  @media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
  </style>