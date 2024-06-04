<template>
  <div class="flex flex-col">
    <div class="relative employee-card cursor-pointer group">
      <NuxtPicture
        format="webp,png,jpg"
        src="/images/employee/team-01.webp"
        loading="lazy"
        sizes="sm:120px md:200px lg:250px xl:270px"
        :imgAttrs="{ class: 'w-full h-auto rounded-md' }"
      />

      <div class="flex flex-col absolute top-5 right-5 z-10 gap-2 social-media">
        
        <div
          class="group-hover:bg-white group-hover:rounded-full border-blue-500 z-1 h-10 w-10 flex items-center justify-center"
        >
          <Icon
            name="ic:baseline-share"
            width="30"
            height="30"
            class="text-white cursor-pointer z-10 group-hover:text-red-500"
          />
        </div>

        <nuxt-link :to="`tel:${props.phone}`" 
          class="group-hover:rounded-full group-hover:border-2 group-hover:border-white z-1 h-10 w-10 flex items-center justify-center"
        >
          <Icon
            name="ic:round-phone"
            width="30"
            height="30"
            class="text-white cursor-pointer -translate-y-10 invisible opacity-0 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 transition-all delay-75 duration-200"
          />
        </nuxt-link>

        <nuxt-link :to="`mailto:${props.email}`"
          class="group-hover:rounded-full group-hover:border-2 group-hover:border-white z-1 h-10 w-10 flex items-center justify-center"
        >
          <Icon
            name="ic:round-email"
            width="30"
            height="30"
            class="text-white cursor-pointer -translate-y-10 invisible opacity-0 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 transition-all delay-100 duration-200"
          />
        </nuxt-link>

        <nuxt-link :to="$props.instagram" target="_blank"
          class="group-hover:rounded-full group-hover:border-2 group-hover:border-white z-1 h-10 w-10 flex items-center justify-center"
        >
          <Icon
            name="ant-design:instagram-filled"
            width="30"
            height="30"
            class="text-white cursor-pointer -translate-y-10 invisible opacity-0 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 transition-all delay-150 duration-200"
          />
        </nuxt-link>

      </div>

      <div class="card-overlay"></div>
    </div>

    <div class="mt-2 p-3">
      <h3 class="text-heading font-poppins lg:text-lg text-center capitalize">
        {{ name }}
      </h3>
      <p class="text-body font-poppins text-sm text-center capitalize">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    require: true,
    default: "Engineer",
  },

  name: {
    type: String,
    require: true,
    default: "John Doe",
  },
  phone:{
    type: String,
    require: true,
  },
  email:{
    type: String,
    require: true,
  },
  instagram:{
    type: String,
    require: true,
  }
});
</script>

<style lang="scss" scoped>
.card-overlay {
  @include overlay(0,$color-primary);
  visibility: hidden;
  transition: all 0.3s ease-in;
}

.employee-card {
  &:hover {
    .card-overlay {
      visibility: visible;
      opacity: 0.4;
    }
  }
}
</style>
