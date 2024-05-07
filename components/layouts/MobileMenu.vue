<template>
  <div>
    <Icon
      name="eva:menu-2-outline"
      width="40"
      height="40"
      class="text-tdark mobile-menu-icon cursor-pointer"
      @click="openMenu"
    />

    <div
      class="fixed top-0 left-0 z-40 h-screen px-8 py-6 overflow-y-auto transition-transform w-full bg-light1"
      :class="{ 'translate-x-full': !menuVisibility }"
    >

      <div class="flex flex-col">
        <div class="flex justify-between mb-10">
          <nuxt-link to="/" title="Anasayfa">
            <NuxtPicture
              format="webp,png,jpg"
              src="/images/logo/hanem-logo.png"
              preload
              sizes="sm:120px md:100px lg:120px xl:175px"
            />
          </nuxt-link>
          <Icon
            @click="closeMenu"
            name="ep:close"
            width="30"
            height="30"
            class="text-tdark cursor-pointer"
          />
        </div>
        <nuxt-link class="mobile-nav-link" to="/" title="Anasayfa">
          {{ $t("home") }}
        </nuxt-link>
        <nuxt-link
          class="mobile-nav-link"
          to="/hakkimizda"
          title="Hanem Harita Hakkımızda"
          >{{ $t("about") }}</nuxt-link
        >
        <nuxt-link
          class="mobile-nav-link"
          to="/hizmetlerimiz"
          title="Hanem Harita Hizmetlerimiz"
          >{{ $t("services") }}</nuxt-link
        >
        <nuxt-link
          class="mobile-nav-link"
          to="/ilanlar"
          title="Hanem Harita İlanlar"
          >{{ $t("advertisement") }}</nuxt-link
        >
        <nuxt-link
          class="mobile-nav-link"
          to="/blog"
          title="Hanem Harita Blog"
          >{{ $t("blog") }}</nuxt-link
        >
        <nuxt-link
          class="mobile-nav-link"
          to="/iletisim"
          title="Hanem Harita İletişim"
          >{{ $t("contact") }}</nuxt-link
        >

        <div class="flex justify-center items-center gap-4 mt-4">
          <NuxtImg
            @click="setLocale('tr')"
            src="/images/lang/tr.svg"
            loading="lazy"
            width="40"
            class="rounded-md cursor-pointer"
          />
          <NuxtImg
            @click="setLocale('en')"
            src="/images/lang/en.svg"
            loading="lazy"
            width="40"
            class="rounded-md cursor-pointer"
          />
        </div>
      </div>

      <div class="flex flex-col gap-4 mt-8">
          <BtnPrimary
            size="base"
            >{{ $t("callNow") }}</BtnPrimary
          >
          <BtnPrimary
            size="base"
            >{{ $t("getAddress") }}</BtnPrimary
          >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnPrimary from "../buttons/BtnPrimary.vue";
const menuVisibility = ref<boolean>(false);
const router = useRouter()
const closeMenu = ():void => {
  menuVisibility.value = false;
};

const openMenu = ():void => {
  menuVisibility.value = true;
};

const localePath = useLocalePath()
const { locale, setLocale } = useI18n()

router.beforeEach(()=>{
  closeMenu()
})

</script>

<style lang="css" scoped>
.mobile-menu-icon {
  display: none !important;
}

@media only screen and (max-width: 991px) {
  .mobile-menu-icon {
    display: inline-block !important;
  }
}

.mobile-nav-link {
  font-size: 15px;
  cursor: pointer;
  font-family: "Spartan", sans-serif;
  font-weight: 600;
  transition: all 0.2s;
  border-bottom: 1px solid rgba(128, 128, 128, 0.348);
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.mobile-btns{
    bottom: 15%;
}

</style>
