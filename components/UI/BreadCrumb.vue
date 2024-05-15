<template>
  <div class="bread-bg my-6 group">
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-center text-3xl xl:text-4xl font-spartan font-semibold capitalize">{{title}}</h1>
      <p class="mt-2 font-poppins">
        <nuxt-link :to="localePath('/')" title="Anasayfa">Anasayfa </nuxt-link>
        >
        <span class="text-body"> {{title}}</span>
      </p>
    </div>
    <NuxtImg
     class="absolute bottom-5 left-10 group-hover:animate-bounce"
      src="/images/shapes/shape-1.png"
      loading="lazy"
      alt="shape1"
      sizes="100px sm:200px md:300px"
    />
    <NuxtImg
     class="absolute top-10 right-10 group-hover:animate-bounce"
      src="/images/shapes/shape-2.png"
      loading="lazy"
      alt="shape1"
      sizes="100px sm:200px md:300px"
    />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const props = defineProps({
  title:{
    type:String,
    require:true
  }
})

</script>

<style lang="scss" scoped>
.bread-bg {
  background-color: #f5f9fa;
  padding: 95px 0 85px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}


</style>
