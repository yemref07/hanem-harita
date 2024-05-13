<template>
  <TheTopHeader />
  <Container>
    <div class="flex flex-row py-6 justify-between items-center">
      <nuxt-link :to="localePath('/')" title="Hanem Harita Anasayfa">
        <NuxtPicture
          format="webp,png,jpg"
          src="/images/logo/hanem-logo.png"
          preload
          sizes="sm:90px md:100px lg:120px xl:175px"
        />
      </nuxt-link>

      <div class="hidden lg:flex items-center gap-4 xl:gap-8">
        <nuxt-link class="nav-link" :to="localePath('/')" title="Anasayfa">
          {{ $t("home") }}
        </nuxt-link>
        <nuxt-link
          class="nav-link"
          :to="localePath('hakkimizda')"
          title="Hanem Harita Hakkımızda"
          >{{ $t("about") }}</nuxt-link
        >
        <div class="relative" @mouseleave="closeServiceMenu" @mouseenter="openServiceMenu">
          <nuxt-link
            class="nav-link"
            :to="localePath('hizmetlerimiz')"
            title="Hanem Harita Hizmetlerimiz"
            >{{ $t("services") }}
          </nuxt-link>

          <ul
            :class="{' submenu-visible': serviceMenuVisible}"
            class="w-64 absolute top-12 shadow px-3 py-3 text-tdark rounded-md services-submenu bg-white z-30"
          >
            <li class="mb-6 submenu-link">
              <nuxt-link to="localePath('/)" title="lorem">
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                Lorem ipsum dolor sit.
              </nuxt-link>
            </li>
            <li class="mb-6 submenu-link">
              <nuxt-link to="localePath('/')" title="lorem">
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                Lorem ipsum dolor sit.
              </nuxt-link>
            </li>
            <li class="mb-6 submenu-link">
              <nuxt-link to="localePath('/')" title="lorem">
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                Lorem ipsum dolor sit.
              </nuxt-link>
            </li>
            <li class="submenu-link">
              <nuxt-link to="localePath('/')" title="lorem">
                <Icon
                  name="icon-park-outline:land-surveying"
                  width="14"
                  height="14"
                  class="text-secondary cursor-pointer mr-2 align-middle"
                />
                Lorem ipsum dolor sit.
              </nuxt-link>
            </li>
          </ul>
        </div>
        <nuxt-link
          class="nav-link"
          :to="localePath('ilanlarimiz')"
          title="Hanem Harita İlanlar"
          >{{ $t("advertisement") }}</nuxt-link
        >
        <nuxt-link
          class="nav-link"
          :to="localePath('blog')"
          title="Hanem Harita Blog"
          >{{ $t("blog") }}</nuxt-link
        >
        <nuxt-link
          class="nav-link"
          :to="localePath('iletisim')"
          title="Hanem Harita İletişim"
          >{{ $t("contact") }}</nuxt-link
        >

        <langDropdown />

        <nuxt-link to="tel:" title="Hemen Ara" class="">
          <BtnPrimary size="base">
            {{ $t("callNow") }}
          </BtnPrimary>
        </nuxt-link>
      </div>

      <MobileMenu />
    </div>
  </Container>
</template>

<script setup>
import Container from "../UI/Container.vue";
import BtnPrimary from "../buttons/BtnPrimary.vue";
import MobileMenu from "./MobileMenu.vue";
import LangDropdown from "../UI/LangDropdown.vue";
import TheTopHeader from "./TheTopHeader.vue";


//i18N init
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

//services submenu visibility
const serviceMenuVisible = ref(false)

const openServiceMenu = () => {
  serviceMenuVisible.value = true
}
const closeServiceMenu = () => {
  serviceMenuVisible.value = false
}



</script>

<style lang="scss" scoped>
.nav-link {
  font-size: 15px;
  cursor: pointer;
  font-family: "Spartan", sans-serif;
  font-weight: 600;
  transition: all 0.2s;
}

.submenu-link{
  font-size: 13px;
  cursor: pointer;
  font-family: "Spartan", sans-serif;
  font-weight: 600;
  transition: all 0.2s;
}

@media only screen and (max-width: 600px) {
  .nav-link {
    font-size: 12px;
  }
}

@media only screen and (max-width: 1200px) {
  .nav-link {
    font-size: 14px;
  }
}

.nav-link:hover {
  color: $color-primary;
}

.submenu-link:hover{
  color: $color-primary;
}

.services-submenu{
  transition: all;
  transition-delay: 75ms;
  transition-duration: 75ms;
  opacity: 0;
  visibility:hidden;
}

.submenu-visible{
  opacity: 1;
  visibility: visible;
}

</style>
