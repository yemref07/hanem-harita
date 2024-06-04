<template>
  <section
    class="relative banner-1 flex flex-col justify-center items-center my-16"
  >
    <Container>
      <div class="flex flex-col justify-center items-center">
        <h2 class="font-sportan font-semibold text-2xl xl:text-3xl text-center">
          Haritacılık ve Emlak Hizmetleri İçin Güvenilir Adres
        </h2>
        <h2
          class="font-sportan text-secondary font-semibold text-2xl xl:text-3xl my-2 mb-6 text-center"
        >
          Hanem Harita
        </h2>
        <BtnPrimary link="iletisim" size="large">Hemen Ara</BtnPrimary>
      </div>
    </Container>
  </section>
</template>

<script setup>
import BtnPrimary from "~/components/buttons/BtnPrimary.vue";
import Container from "../UI/Container.vue";
</script>

<style lang="scss" scoped>
.banner-1 {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 400px;
  background-image: url(/images/background/cta.svg);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
