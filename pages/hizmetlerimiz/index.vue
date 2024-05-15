<template>
  <BreadCrumb title="Hizmetlerimiz" />
  <Container class="py-16">
    <div
      class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center items-start"
    >
      <div class="" v-for="(item, index) in serviceData" :key="index">
        <ServiceCard2 :title="item.title" :desc="item.desc" :img="item.img":link="item.link" />
      </div>
    </div>
  </Container>
</template>

<script setup>
import BreadCrumb from "~/components/UI/BreadCrumb.vue";
import Container from "~/components/UI/Container.vue";
import ServiceCard2 from "~/components/cards/ServiceCard2.vue";
import serviceData from "~/data/serviceData";

const localePath = useLocalePath();
</script>

<style lang="scss" scoped></style>
