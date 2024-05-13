<template>
  <div class="bread-bg my-6 group text-tlight">
    <Container>
      <div class="flex flex-col justify-center items-start gap-4">
        <h2
          class="text-center text-2xl xl:text-3xl font-poppins font-semibold capitalize"
        >
          Hanem Harita
        </h2>
        <h1
          class="text-center text-3xl xl:text-6xl font-spartan font-semibold mt-3 uppercase"
        >
          İLETİŞİM
        </h1>
        <p class="lg:w-1/2">
          Hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime
          geçebilir, blog kısmı için öneri ve isteklerde bulunabilirsiniz.
        </p>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "./Container.vue";

const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.bread-bg {
  padding: 120px 0 100px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-image: url(/images/hero/hero.jpg);
}

@media screen and (max-width: 991px) {
  .bread-bg {
    padding: 50px 0 50px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    background-image: url(/images/hero/hero.jpg);
  }
}
</style>
