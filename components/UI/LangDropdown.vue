<template>
  <div class="relative ml-4 lg:ml-8 xl:ml-12">

    <div class="border py-2 px-4 rounded-md cursor-pointer" @mouseleave="setHidden" @mouseenter="setVisible">
        <img
          alt='Active Lang Flag'
          :src="`/images/lang/${locale}.svg`"
          width="20"
          class="rounded-sm cursor-pointer inline-block"
        />
        <span class="ms-2 font-medium uppercase">{{ locale }}</span>
    </div>

    <!-- Dropdown menu -->
    <div
      @mouseenter="setVisible"
      @mouseleave="setHidden"
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 absolute top-12 transition-all delay-100 duration-75"
      :class="{ 'hid-dropdown': !dropdownVisibility }"
    >
      <ul class="py-3 px-3 text-sm text-gray-700">

        <li class="cursor-pointer" v-for="(item, index) in availableLocales" :key="index" @click="setLocale(item.code)">
          <NuxtImg
            :src="`/images/lang/${item.code}.svg`"
            width="20"
            class="inline-block"
          />
          <span class="ms-2 font-semibold capitalize">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})


const dropdownVisibility = ref(false);
const setVisible = () => {
  dropdownVisibility.value = true;
};

const setHidden = () => {
  dropdownVisibility.value = false;
};
</script>

<style lang="css" scoped>
.hid-dropdown{
    visibility: hidden;
    opacity: 0;
}

</style>
