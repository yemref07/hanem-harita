<template>
  <div
    class="hidden md:flex flex-row py-3 px-8 lg:px-12 xl:px-20 bg-dark text-tlight items-center justify-between"
  >
    <div class="flex items-center">
      <nuxt-link to="tel:" class="">
        <Icon
          name="lets-icons:phone-duotone"
          width="24"
          height="24"
          class="text-secondary cursor-pointer"
        />
        +905349976752
      </nuxt-link>
      <div
        class="border-l opacity-75 border-red-400 h-6 w-2 inline-block mx-6"
      ></div>
      <nuxt-link to="mailto:">
        <Icon
          name="iconamoon:email-light"
          width="24"
          height="24"
          class="text-secondary cursor-pointer"
        />
        hanem@harita.com.tr
      </nuxt-link>
    </div>

    <nuxt-link to="" class="cursor-pointer">
      <Icon
        name="iconamoon:location-pin"
        width="24"
        height="24"
        class="text-secondary cursor-pointer"
      />
      Antalya Kumluca Beyler Mah Çiçek Sok
    </nuxt-link>
  </div>
</template>

<script setup></script>

<style lang="css" scoped></style>
