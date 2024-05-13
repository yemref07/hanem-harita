<template>
  <nuxt-link
    :to="localePath('/')"
    class="relative shadow-md rounded-md cursor-pointer group hover border-b-4 border-red-300"
  >
    <div class="flex flex-col justify-center">
      <div class="relative">
        <NuxtPicture
          format="webp,png,jpg"
          src="/images/blog/blog-1.jpg"
          loading="lazy"
          sizes="sm:240px md:300px lg:400px xl:600px"
          :imgAttrs="{ class: 'w-full h-auto' }"
        />
        <div
          class="image-overlay invisible transition-all duration-500 delay-75 group-hover:visible group-hover:opacity-50"
        ></div>
      </div>

      <div class="px-6 pt-4 pb-8 mt-4 transition-all duration-500 delay-75">
        <h3
          class="bg-red-300/25 w-fit text-secondary p-1 font-poppins text-sm rounded-sm"
        >
          Emlak Danışmanlığı
        </h3>
        <h4 class="mt-4 font-spartan text-lg font-semibold">
          Gayrimenkul Bölge ve Konum Bilgisinin Önemi
        </h4>
        <p class="text-body mt-4 font-poppins text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad soluta
          doloremque quod architecto quis, quas saepe...
        </p>

        <p class="mt-4" v-if="!props.readTime">
          <Icon
            name="lets-icons:clock-duotone"
            width="22"
            height="22"
            class="text-secondary"
          />
          <span class="text-body text-sm ms-1">3 min</span>
        </p>

        <BtnSecondary
          size="small"
          link=""
          class="mt-4 translate-y-10 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:-translate-y-0 duration-700 delay-75 transition-all text-sm"
        >
          Devamını Oku
          <Icon
            name="ion:arrow-forward"
            width="16"
            height="16"
            class="text-white cursor-pointer ms-1"
          />
        </BtnSecondary>
      </div>

      <span
        class="z-10 bg-primary text-tlight absolute top-3 left-2 py-1 px-4 rounded-md text-sm font-poppins font-semibold"
        >Yeni Paylaşım
      </span>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import BtnPrimary from "../buttons/BtnPrimary.vue";
import BtnSecondary from "../buttons/BtnSecondary.vue";

const localePath = useLocalePath();

const props = defineProps({
  title: {
    type: String,
    require: true,
    default: "Blog Title",
  },
  desc: {
    type: String,
    require: true,
    default: "Blog Desc",
  },
  tag: {
    type: String,
    require: true,
    default: "Blog Tag",
  },
  readTime: {
    type: String,
    require: false,
  },
});
</script>

<style lang="scss" scoped>
.image-overlay {
  @include overlay(0, black);
}
</style>
