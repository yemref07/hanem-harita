<template>
  <div class="">
    <BreadCrumb title="İlanlar" />
    <Container class="py-16">
      <div
        class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center items-start"
      >
        <div v-for="(item, index) in serviceData" :key="index">
          <AdvertisementCard />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "~/components/UI/Container.vue";
import AdvertisementCard from "~/components/cards/AdvertisementCard.vue";
import BreadCrumb from "~/components/UI/BreadCrumb.vue";
import serviceData from "~/data/serviceData";
</script>

<style lang="scss" scoped></style>
