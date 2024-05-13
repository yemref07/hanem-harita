<template>
  <swiper-container
    :slides-per-view="1"
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
  >
    <swiper-slide class="relative">
      <NuxtPicture
        preload
        format="avif,webp,jpg"
        src="/images/slides/1.jpg"
        :imgAttrs="{ class: 'w-full h-80 md:h-auto' }"
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
        :imgAttrs="{ class: 'w-full h-80 md:h-auto' }"
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
        :imgAttrs="{ class: 'w-full h-80 md:h-auto' }"
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
        :imgAttrs="{ class: 'w-full h-80 md:h-auto' }"
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

  <section class="my-12">
    <Container>
      <div
        class="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-start gap-8"
      >
        <div class="col-span-1">
          <ServiceCard
            title="Haritacılık Hizmetleri"
            desc="Haritacalık hizmetlerinden, Emlak danışmanlığına birçok taşınmaz ihtiyacınız için güvenilir adres."
            icon="lets-icons:map-duotone"
          />
        </div>

        <div class="col-span-1">
          <ServiceCard
            title="Emlak Danışmanlığı"
            desc="Haritacalık hizmetlerinden, Emlak danışmanlığına birçok taşınmaz ihtiyacınız için güvenilir adres."
            icon="pepicons-print:house"
          />
        </div>

        <div class="col-span-1">
          <ServiceCard
            title="Gayrimenkul Değerleme"
            desc="Haritacalık hizmetlerinden, Emlak danışmanlığına birçok taşınmaz ihtiyacınız için güvenilir adres."
            icon="solar:key-bold-duotone"
          />
        </div>

        <div class="col-span-1">
          <ServiceCard
            title="CBS Hizmetleri"
            desc="Haritacalık hizmetlerinden, Emlak danışmanlığına birçok taşınmaz ihtiyacınız için güvenilir adres."
            icon="solar:book-line-duotone"
          />
        </div>
      </div>
    </Container>
  </section>

  <section class="lg:mt-20 xl:mt-24">
    <Container>
      <div class="grid md:grid-cols-2 gap-12">
        <div class="col-span-1">
          <NuxtPicture
            format="avif,webp,jpg"
            src="/images/about/about.jpg"
            :imgAttrs="{ class: 'w-full h-auto rounded-md' }"
            sizes="300px sm:900px md:400px"
            alt="slide 3"
            loading="lazy"
          />
        </div>

        <div class="col-span-1">
          <div class="flex flex-col items-start justify-center">
            <h2
              class="text-heading text-2xl lg:text-3xl xl:text-4xl font-spartan font-semibold"
            >
              Hakkımızda
            </h2>
            <h3 class="mt-2 text-2xl text-primary">Hanem Harita</h3>

            <p class="mt-4 text-poppins text-body">
              Hanem Harita, haritacılık ve emlak sektöründe uzun yıllara dayanan
              deneyime sahip uzman bir kadrodan oluşan, müşteri memnuniyetine ve
              modern mühendislik tekniklerine önem veren bir firmadır.
            </p>

            <p class="mt-4 text-poppins text-body">
              Müşterilerimizin ihtiyaçlarını ve beklentilerini her zaman ön
              planda tutarak, onlara en uygun ve kaliteli hizmeti sunmaya
              çalışıyoruz. Her projenin özel olduğunu biliyor ve her müşteriye
              özel çözümler üretiyoruz.
            </p>

            <ul class="mt-4 text-heading">
              <li>
                <Icon
                  name="teenyicons:tick-small-outline"
                  width="20"
                  height="20"
                  class="text-secondary cursor-pointer inline-block"
                />
                Uzman Kadro
              </li>
              <li class="my-2">
                <Icon
                  name="teenyicons:tick-small-outline"
                  width="20"
                  height="20"
                  class="text-secondary cursor-pointer inline-block"
                />
                Uzman Kadro
              </li>
              <li>
                <Icon
                  name="teenyicons:tick-small-outline"
                  width="20"
                  height="20"
                  class="text-secondary cursor-pointer inline-block"
                />
                Uzman Kadro
              </li>
            </ul>

            <BtnPrimary link="hakkimizda" size="small" class="mt-6">
              Devamını Oku
              <Icon
                name="carbon:arrow-right"
                width="20"
                height="20"
                class="text-white cursor-pointer ms-2"
              />
            </BtnPrimary>
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section class="my-24">
    <Container>
      <div class="flex justify-between mb-12">
        <h2
          class="text-center xl:text-4xl text-heading font-semibold font-spartan"
        >
          Popüler İlanlar
        </h2>
        <BtnPrimary link="ilanlar" size="large">Tüm İlanlar</BtnPrimary>
      </div>

      <swiper-container
        space-between="12"
        :centeredSlides="true"
        :loop="true"
        :pagination="false"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          600: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide class="relative pb-10">
          <AdvertisementCard
            title="Kumluca Lüks Villa"
            address="Cumhuriyet Mah. Çicek Sok. No:2 / Kumluca-Antalya"
            img="1"
            type="Satılık"
          />
        </swiper-slide>
        <swiper-slide class="relative pb-10">
          <advertisementCard
            title="Kumluca Lüks Villa"
            address="Cumhuriyet Mah. Çicek Sok. No:2 / Kumluca-Antalya"
            img="2"
            type="Satılık"
          />
        </swiper-slide>
        <swiper-slide class="relative pb-10">
          <AdvertisementCard
            title="Kumluca Lüks Villa"
            address="Cumhuriyet Mah. Çicek Sok. No:2 / Kumluca-Antalya"
            img="3"
            type="Satılık"
          />
        </swiper-slide>
        <swiper-slide class="relative pb-10">
          <AdvertisementCard
            title="Kumluca Lüks Villa"
            address="Cumhuriyet Mah. Çicek Sok. No:2 / Kumluca-Antalya"
            img="4"
            type="Satılık"
          />
        </swiper-slide>
        <swiper-slide class="relative pb-10">
          <AdvertisementCard
            title="Kumluca Lüks Villa"
            address="Cumhuriyet Mah. Çicek Sok. No:2 / Kumluca-Antalya"
            img="5"
            type="Satılık"
          />
        </swiper-slide>
      </swiper-container>
    </Container>
  </section>

  <section class="relative mt-28">
    <div>
      <NuxtPicture
        format="avif,webp,jpg"
        src="/images/counterbg.jpg"
        :imgAttrs="{ class: 'w-full h-auto' }"
        sizes="300px md:900px lg:1920px"
        alt="slide 1"
        loading="lazy"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full"
      >
        <Container>
          <div class="grid grid-cols-4">
            <div class="flex flex-col items-center">
              <Icon
                name="iconoir:home"
                width="90"
                height="90"
                class="text-primary cursor-pointer"
              />
              <p class="text-white text-2xl mt-2">10+ Fazla İlan</p>
            </div>

            <div class="flex flex-col items-center">
              <Icon
                name="fluent:people-48-regular"
                width="90"
                height="90"
                class="text-primary cursor-pointer"
              />
              <p class="text-white text-2xl mt-2">300 + İş Partneri</p>
            </div>

            <div class="flex flex-col items-center">
              <Icon
                name="ph:projector-screen-chart-thin"
                width="90"
                height="90"
                class="text-primary cursor-pointer"
              />
              <p class="text-white text-2xl mt-2">20 + Fazla Proje</p>
            </div>

            <div class="flex flex-col items-center">
              <Icon
                name="fluent-emoji-high-contrast:hundred-points"
                width="90"
                height="90"
                class="text-primary cursor-pointer"
              />
              <p class="text-white text-2xl mt-2">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </Container>
      </div>
      <div class="image-overlay"></div>
    </div>
  </section>

  <section class="mt-28">
    <Container>
      <h2
        class="text-center xl:text-4xl text-heading font-semibold font-spartan mb-12"
      >
        Sıkça Sorulan Sorular
      </h2>
      <div class="grid lg:grid-cols-2 justify-start items-center">
        <div class="col-span-1">
          <Dropdown class="mb-4" />
          <Dropdown class="mb-4" />
          <Dropdown class="mb-4" />
        </div>
        <div class="col-span-1">
          <NuxtPicture
            format="webp,jpg,png,avif"
            src="/images/faq/faq2.png"
            :imgAttrs="{ class: 'w-full h-auto' }"
            sizes="300px md:400px lg:600px"
            alt="slide 1"
            loading="lazy"
          />
        </div>
      </div>
    </Container>
  </section>

  <section class="pt-28">
    <Container>
      <h2
        class="text-center xl:text-4xl text-heading font-semibold font-spartan mb-12"
      >
        Uzman Kadromuz
      </h2>
      <swiper-container
        :space-between="14"
        :loop="true"
        :slides-per-view="1"
        :centered-slides="false"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="false"
        :breakpoints="{
          600: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 4,
          },
        }"
      >
        <swiper-slide>
          <EmployeeCard />
        </swiper-slide>
        <swiper-slide>
          <EmployeeCard />
        </swiper-slide>
        <swiper-slide>
          <EmployeeCard />
        </swiper-slide>
        <swiper-slide>
          <EmployeeCard />
        </swiper-slide>
      </swiper-container>
    </Container>
  </section>

  <section class="relative">
    <Container>
      <div class="banner-1 p-8 flex flex-col justify-center items-center">
        <h2 class="font-sportan font-semibold text-2xl xl:text-3xl text-center">
          Haritacılık ve Emlak Hizmetleri İçin Güvenilir Adres
        </h2>
        <h2
          class="font-sportan text-secondary font-semibold text-2xl xl:text-3xl my-2 mb-6 text-center"
        >
          Hanem Harita
        </h2>
        <BtnPrimary link="iletisim" size="large">Hemen Ara</BtnPrimary>
      </div>
    </Container>
  </section>

  <section class='my-24'>
    <Container>
      <h2
        class="text-center xl:text-4xl text-heading font-semibold font-spartan mb-12"
      >
        Blog Paylaşımları
      </h2>
      <div class="grid grid-cols-3 gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Container>
  </section>
</template>

<script setup>
import BtnPrimary from "~/components/buttons/BtnPrimary.vue";
import Container from "~/components/UI/Container.vue";
import ServiceCard from "~/components/cards/ServiceCard.vue";
import AdvertisementCard from "~/components/cards/AdvertisementCard.vue";
import Dropdown from "~/components/UI/Dropdown.vue";

import { register } from "swiper/element/bundle";
import EmployeeCard from "~/components/cards/EmployeeCard.vue";
import BlogCard from "~/components/cards/BlogCard.vue";
register();

//i18N init
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
</script>

<style lang="scss" scoped>
.image-overlay {
 @include overlay(0.5,black)
}

.vertical-align-middle {
  vertical-align: middle;
  display: inline-block; /* Needed for some browsers */
}

.banner-1 {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 400px;
  background-image: url(/images/background/cta.svg);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
