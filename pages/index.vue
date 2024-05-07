<template>
  <swiper-container
    :slides-per-view="1"
    :space-between="spaceBetween"
    :centered-slides="true"
    :pagination="{
      hideOnClick: true,
    }"
    :breakpoints="{
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
    }"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
  >
    <swiper-slide class="relative">
      <NuxtPicture
        preload
        format="avif,webp,jpg"
        src="/images/slides/1.jpg"
        :imgAttrs="{class:'w-full h-80 md:h-auto'}"
        sizes="600px sm:900px md:1200px lg:1920px"
        alt="slide 1"
        loading="lazy"
      />
      <div
        class="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6 md:px-20 lg:px-32 z-10"
      >
        <h1
          class="text-2xl xl:text-4xl font-spartan font-semibold text-white text-nowrap"
        >
          <span class="text-primary font-bolder"> Hanem </span> <br />
          Harita Gayrimenkul
        </h1>
        <p class="md:text-lg mt-4 text-white font-poppins">
          Haritacılık hizmetlerinden , Gayrimenkul danışmanlığına birçok alan
          için Kumluca'nın güvenilir adresi.
        </p>
        <nuxt-link
          :to="localePath('hizmetlerimiz')"
          title="Kumluca Hanem Harita Hizmetlerimiz"
        >
          <BtnPrimary size="large" class="mt-8"> Hizmetlerimiz </BtnPrimary>
        </nuxt-link>
      </div>
      <div class="image-overlay"></div>
    </swiper-slide>

    <swiper-slide class="relative">
      <NuxtPicture
        format="webp,jpg,jpeg,png"
        src="/images/slides/2.jpg"
        :imgAttrs="{class:'w-full h-80 md:h-auto'}"
        sizes="600px sm:900px md:1200px lg:1920px"
        alt="slide 2"
        loading="lazy"
      />
      <div
        class="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6 md:px-20 lg:px-32 z-10"
      >
        <h1
          class="text-2xl xl:text-4xl font-spartan font-semibold text-white text-nowrap"
        >
          <span class="text-primary font-bolder"> Hanem </span> <br />
          Harita Gayrimenkul
        </h1>
        <p class="md:text-lg mt-4 text-white font-poppins">
          Haritacılık hizmetlerinden , Gayrimenkul danışmanlığına birçok alan
          için <br />
          Kumluca'nın güvenilir adresi.
        </p>
        <nuxt-link
          :to="localePath('hizmetlerimiz')"
          title="Kumluca Hanem Harita Hizmetlerimiz"
        >
          <BtnPrimary size="large" class="mt-8"> Hizmetlerimiz </BtnPrimary>
        </nuxt-link>
      </div>
      <div class="image-overlay"></div>
    </swiper-slide>

    <swiper-slide class="relative">
      <NuxtPicture
        format="avif,webp,jpg"
        src="/images/slides/3.jpg"
        :imgAttrs="{class:'w-full h-80 md:h-auto'}"
        sizes="600px sm:900px md:1200px lg:1920px"
        alt="slide 3"
        loading="lazy"
      />
      <div
        class="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6 md:px-20 lg:px-32 z-10"
      >
        <h1
          class="text-2xl xl:text-4xl font-spartan font-semibold text-white text-nowrap"
        >
          <span class="text-primary font-bolder"> Hanem </span> <br />
          Harita Gayrimenkul
        </h1>
        <p class="md:text-lg mt-4 text-white font-poppins">
          Haritacılık hizmetlerinden , Gayrimenkul danışmanlığına birçok alan
          için <br />
          Kumluca'nın güvenilir adresi.
        </p>
        <nuxt-link
          :to="localePath('hizmetlerimiz')"
          title="Kumluca Hanem Harita Hizmetlerimiz"
        >
          <BtnPrimary size="large" class="mt-8"> Hizmetlerimiz </BtnPrimary>
        </nuxt-link>
      </div>
      <div class="image-overlay"></div>
    </swiper-slide>

    <swiper-slide class="relative">
      <NuxtPicture
        format="avif,webp,jpg"
        src="/images/slides/4.jpg"
        :imgAttrs="{class:'w-full h-80 md:h-auto'}"
        sizes="600px sm:900px md:1200px lg:1920px"
        alt="slide 4"
        loading="lazy"
      />
      <div
        class="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6 md:px-20 lg:px-32 z-10"
      >
        <h1
          class="text-2xl xl:text-4xl font-spartan font-semibold text-white text-nowrap"
        >
          <span class="text-primary font-bolder"> Hanem </span> <br />
          Harita Gayrimenkul
        </h1>
        <p class="md:text-lg mt-4 text-white font-poppins">
          Haritacılık hizmetlerinden , Gayrimenkul danışmanlığına birçok alan
          için <br />
          Kumluca'nın güvenilir adresi.
        </p>
        <nuxt-link
          :to="localePath('hizmetlerimiz')"
          title="Kumluca Hanem Harita Hizmetlerimiz"
        >
          <BtnPrimary size="large" class="mt-8"> Hizmetlerimiz </BtnPrimary>
        </nuxt-link>
      </div>
      <div class="image-overlay"></div>
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import BtnPrimary from "~/components/buttons/BtnPrimary.vue";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

//i18N init
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress);
};

const onSlideChange = (e) => {
  console.log("slide changed");
};
</script>

<style lang="css" scoped>
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.5;
  z-index: 1;
}
</style>
