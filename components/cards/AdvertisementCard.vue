<template>
  <div class="shadow-sm relative rounded-md bg-white group">
    <nuxt-link :to="localePath('/ilanlar')" title="İlanlar" class="relative">
      <NuxtPicture
        format="webp,avif,jpg,png"
        :src="`/images/advirtesment/${props.img}.jpg`"
        :imgAttrs="{ class: 'w-full h-auto' }"
        sizes="300px  md:500px"
        alt="slide 1"
        loading="lazy"
      />

      <span
        class="z-10 bg-secondary px-3 py-1 text-white absolute left-6 top-6 rounded-lg font-poppins text-sm"
      >
        <icon name="material-symbols:sell-sharp" class="text-white mr-1" />
        {{ props.type }}
      </span>

      <span
        class="z-10 p-2 text-white absolute left-2 bottom-2 rounded-lg font-poppins text-lg"
      >
        <icon name="fontisto:tl" class="text-white mr-1" />
        {{ props.price }}
      </span>

      <span
        class="z-10 p-2 text-white absolute right-2 bottom-2 rounded-lg font-poppins text-lg"
      >
        <icon name="ph:star" class="text-white" size="30" />
      </span>

      <div
        class="image-overlay invisible transition-all duration-500 delay-75 group-hover:visible group-hover:opacity-50"
      ></div>
    </nuxt-link>

    <div class="mt-4 px-4 pb-8">
      <h3 class="lg:text-lg text-heading">{{ props.title }}</h3>

      <div
        class="flex flex-row justify-start mt-4 mb-4 items-center gap-8 text-body"
      >
        <p>
          <Icon
            name="material-symbols-light:bed-outline"
            width="25"
            height="25"
            class="text-primary cursor-pointer"
          />
          4 + 1
        </p>
        <p>
          <Icon
            name="material-symbols-light:bathroom-outline"
            width="25"
            height="25"
            class="text-primary cursor-pointer"
          />
          2 Banyo
        </p>
        <p>
          <Icon
            name="material-symbols-light:rectangle-outline"
            width="25"
            height="25"
            class="text-primary cursor-pointer"
          />
          145² M
        </p>
      </div>

      <nuxt-link class="text-body" :to="localePath('/ilanlar')" title="">
        {{ props.address }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  address: {
    type: String,
    require: true,
    default: "Address Info",
  },

  title: {
    required: true,
    type: String,
    default: "Title",
  },

  price: {
    type: String,
    require: true,
    default: "1.000.000",
  },

  type: {
    type: String,
    require: true,
    default: "Type",
  },

  img: {
    type: String,
    require: true,
    default: "placeholder",
  },
});

//i18N init
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
</script>

<style lang="scss" scoped>
.image-overlay {
  @include overlay(0, black);
}
</style>
