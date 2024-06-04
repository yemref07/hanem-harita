<template>
  <div
    class="hidden md:flex flex-row py-3 px-8 lg:px-12 xl:px-20 bg-dark text-tlight items-center justify-between"
  >
    <div class="flex items-center">
      <nuxt-link to="tel:905358703900" class="">
        <Icon
          name="lets-icons:phone-duotone"
          width="24"
          height="24"
          class="text-secondary cursor-pointer"
        />
        +905358703900
      </nuxt-link>
      <div
        class="border-l opacity-75 border-red-400 h-6 w-2 inline-block mx-6"
      ></div>
      <nuxt-link to="mailto:hanemharitaemlak@hotmail.com">
        <Icon
          name="iconamoon:email-light"
          width="24"
          height="24"
          class="text-secondary cursor-pointer"
        />
        hanemharitaemlak@hotmail.com
      </nuxt-link>
    </div>

    <nuxt-link to="https://www.google.com.tr/maps/dir//36.3668,30.2931152/@36.3669721,30.2928249,17.75z?hl=tr&entry=ttu" class="cursor-pointer" target="_blank">
      <Icon
        name="iconamoon:location-pin"
        width="24"
        height="24"
        class="text-secondary cursor-pointer"
      />
      Naranciye Mah Evran Sok B Blok No:11
    </nuxt-link>
  </div>
</template>

<script setup></script>

<style lang="css" scoped></style>
