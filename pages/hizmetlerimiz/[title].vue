<template>
  <div class="">
    <BreadCrumb title="Hizmet Detay" />
    <Container class="py-8 md:py-12">
      <div class="grid lg:grid-cols-5 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-14">
        <div class="lg:col-span-3 xl:col-span-3">
          <h2
            class="font-semibold text-xl lg:text-2xl mb-4 lg:mb-8 font-spartan"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing
          </h2>
          <NuxtImg
            src="/images/services/1.jpg"
            loading="lazy"
            alt="about"
            width="900"
            sizes="sm:300px md:600px lg:900px"
            class="rounded-md"
          />
          <p class="mt-6 md:mt-10 text-body font-poppins text-sm lg:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            voluptatem suscipit obcaecati, animi sunt iure consequatur odit hic!
            Hic cumque rem dolores tempore recusandae consequatur nemo tenetur?
            A ducimus iusto neque quis expedita, tempora, voluptatem possimus
            nam hic qui commodi, blanditiis quo similique magni tenetur vel
            deserunt laudantium officia. Voluptatibus, quasi minima voluptatem,
            dolorum iste sit error, odio corrupti unde magni assumenda aperiam
            eos. Aperiam quae est, amet praesentium adipisci dolores ea dolore
            laborum assumenda error voluptatum ex quod nam nobis eveniet non,
            quis minus mollitia beatae qui. Saepe veniam fuga delectus,
            repellendus similique velit quidem voluptas? Quisquam, sequi at.
          </p>

          <h3 class="font-semibold font-spartan text-base md:text-lg mt-6">
            Gerekli Belgeler
          </h3>

          <ul class="mt-2 text-body">
            <li>
              <Icon
                name="teenyicons:tick-small-outline"
                width="24"
                height="24"
                class=""
              />
              Lorem ipsum dolor sit amet.
            </li>
            <li>
              <Icon
                name="teenyicons:tick-small-outline"
                width="24"
                height="24"
                class=""
              />
              Lorem ipsum dolor sit amet.
            </li>
            <li>
              <Icon
                name="teenyicons:tick-small-outline"
                width="24"
                height="24"
                class=""
              />
              Lorem ipsum dolor sit amet.
            </li>
            <li>
              <Icon
                name="teenyicons:tick-small-outline"
                width="24"
                height="24"
                class=""
              />
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2 xl:col-span-1">
          <h2 class="font-semibold lg:text-xl mb-4 font-spartan">
            Diğer Hizmetlerimiz
          </h2>

          <ul>
            <li>
              <nuxt-link
                to=""
                class="font-spartan font-semibold text-sm inline-link cursor-pointer"
              >
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                İfraz - Tevhid İşlemleri
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to=""
                class="font-spartan font-semibold text-sm inline-link cursor-pointer"
              >
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                İfraz - Tevhid İşlemleri
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to=""
                class="font-spartan font-semibold text-sm inline-link cursor-pointer"
              >
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                İfraz - Tevhid İşlemleri
              </nuxt-link>
            </li>
          </ul>

          <div class="bg-red-300 py-8 px-8 md:px-12 md:py-12 mt-14 rounded-md">
            <div class="flex flex-col justify-center items-center gap-4">
              <NuxtImg
                src="/images/banners/banner-1.png"
                loading="lazy"
                alt="about"
                width="120"
                sizes="sm:300px md:300px lg:400px"
              />
              <h3 class="font-poppins lg:text-base font-semibold text-center">
                Gayrimenkul Yatırımınızın Güvenli Adresi
              </h3>
              <BtnPrimary link="iletisim" size="sm">Hemen Bilgi Al</BtnPrimary>
            </div>
          </div>
          <div class="flex flex-row gap-2 mt-8 items-center justify-center">
            <SocialShare
              v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
              :key="network"
              :network="network"
              :styled="true"
              :label="false"
              class="p-3 rounded-full bg-red-100 text-black hover:text-white"
            />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import BreadCrumb from "~/components/UI/BreadCrumb.vue";
import Container from "~/components/UI/Container.vue";
import BtnPrimary from "~/components/buttons/BtnPrimary.vue";
</script>

<style lang="scss" scoped></style>
