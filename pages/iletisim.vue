<template>
  <BreadCrumb />
  <Container class=" py-10 lg:py-20">
    <div class="grid md:grid-cols-2 md:gap-8">
      <div class="col-span-1">
        <div class="flex flex-col justify-center items-center">
          <NuxtImg
            class="md:w-2/3 md:h-auto hidden md:block"
            src="/images/contact2.jpg"
            loading="lazy"
            alt="shape1"
            sizes="300px sm:600px md:900px"
          />
        </div>
      </div>

      <div class="col-span-1">
        <div class="flex flex-col gap-6">
          <h2 class="text-3xl font-spartan font-semibold">Hanem Harita</h2>

          <div class="">
            <h3 class="text-xl font-poppins mb-1">Adres</h3>
            <nuxt-link class="cursor-pointer text-body" to=""
              >Studio 76d, Riley Ford, North Michael chester, CF99
              6QQ</nuxt-link
            >
          </div>

          <div class="">
            <h3 class="text-xl font-poppins mb-1">E-Posta</h3>
            <nuxt-link class="cursor-pointer text-body" to="emailto:"
              >hanem@harita.com.tr</nuxt-link
            >
          </div>

          <div class="">
            <h3 class="text-xl font-poppins mb-1 gap">Telefon</h3>
            <nuxt-link class="cursor-pointer text-body block" to="tel:"
              >+90 534 499 76 52</nuxt-link
            >
            <nuxt-link class="cursor-pointer text-body block my-1" to="tel:"
              >+90 534 499 76 52</nuxt-link
            >
            <nuxt-link class="cursor-pointer text-body block" to="tel:"
              >+90 534 499 76 52</nuxt-link
            >
          </div>

          <div class="flex gap-3">
            <nuxt-link>
                <Icon
                  name="entypo-social:facebook-with-circle"
                  width="40"
                  height="40"
                  class="text-primary cursor-pointer"
                />

            </nuxt-link>

            <nuxt-link>
                <Icon
                  name="entypo-social:linkedin-with-circle"
                  width="40"
                  height="40"
                  class="text-primary cursor-pointer"
                />

            </nuxt-link>

            <nuxt-link>
                <Icon
                  name="entypo-social:instagram-with-circle"
                  width="40"
                  height="40"
                  class="text-primary cursor-pointer"
                />

            </nuxt-link>

          </div>
        </div>
      </div>
    </div>
  </Container>

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6427.312821783827!2d30.171569301572127!3d36.34487624730695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c227479c9fe69d%3A0x14ffccea3c69a1cb!2sSakl%C4%B1su%2C%20Finike%2FAntalya!5e0!3m2!1str!2str!4v1715560697648!5m2!1str!2str" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>

<script setup>
import Container from "~/components/UI/Container.vue";
import BreadCrumb from "~/components/UI/BreadCrumb.vue";
</script>

<style lang="scss" scoped></style>
