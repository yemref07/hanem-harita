<template>
  <div
    class="flex flex-col items-start justify-center pb-6 shadow-md bg-white group cursor-pointer rounded-md transition-all delay-75 duration-300 hover:border-b-4 hover:border-red-400"
  >
    <nuxt-link
      :to="localePath(`/hizmetlerimiz/${getLink(title)}`)"
      :title="`Kumluca Hanem Harita - ${title}`"
      class="relative"
    >
      <nuxt-img
        :src="`/images/services/${props.img}` || '/images/services/1.jpg'"
        sizes="sm:500px md:600px lg:800px"
        class="w-full h-auto"
        loading="lazy"
      />
      <div
        class="image-overlay transition-all duration-300 delay-75 group-hover:invisible group-hover:opacity-0"
      ></div>
    </nuxt-link>

    <div class="px-2 lg:px-4 mt-6">
      <h2>
        <nuxt-link
          class="text-lg font-semibold line-clamp-1"
          :to="localePath(`/hizmetlerimiz/${getLink(title)}`)"
          title="Hizmetlerimiz"
          >{{ title || "lorem ipsum" }}</nuxt-link
        >
      </h2>

      <p class="mt-1 text-body line-clamp-4">
        <nuxt-link
          :to="localePath(`/hizmetlerimiz/${getLink(title)}`)"
          title="Hizmetlerimiz"
        >
          {{ desc || "lorem ıpsum." }}
        </nuxt-link>
      </p>
    </div>

    <div class="px-2 lg:px-4">
      <BtnPrimary
        class="mt-8 self-start block"
        size="small"
        :link="`hizmetlerimiz/${getLink(title)}`"
        >Devamını Oku</BtnPrimary
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnPrimary from "../buttons/BtnPrimary.vue";

const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

// Create Seo friendly Link and remove turkish chars from url
const getLink = (title: string): string => {
  const turkishChars = {
    ğ: "g",
    ü: "u",
    ş: "s",
    ı: "i",
    ö: "o",
    ç: "c",
    İ: "i",
  };
  const englishChars = Object.values(turkishChars);

  // Replace Turkish characters with English equivalents
  let link = title.replace(/[\ğüşıöçİ]/g, (char) => turkishChars[char]);

  // Replace spaces with hyphens and remove special characters
  link = link.replace(/\s+/g, "-").replace(/[^a-z0-9-]/gi, "");

  // Ensure lowercase for consistency
  link = link.toLowerCase();

  return link;
};

const props = defineProps({
  title: {
    type: String,
    require: true,
    default: "Dummy Title",
  },

  desc: {
    type: String,
    require: true,
  },

  img: {
    type: String,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
.image-overlay {
  @include overlay(0.2, black);
}
</style>
