<template>
  <div class="relative flex flex-col">
    <button
      class="px-6 py-3 text-heading cursor-pointer rounded-md font-semibold font-spartan text-lg border-2 transition-all delay-75 duration-75"
      @click="toggle" :class="{ 'bg-white': !isVisible, 'bg-primary text-tlight': isVisible }">
      Hanem Harita hangi hizmetleri sunmaktadır?
      <Icon name="material-symbols:keyboard-arrow-down-rounded" width="30" height="30"
        class="cursor-pointer ms-2 transition-all duration-200" :class="{
          'rotate-180 text-white': isVisible,
          'text-heading ': !isVisible,
        }" />
    </button>
    <transition name="accordion" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:before-leave="beforeLeave"
      v-on:leave="leave">
      <div v-show="isVisible" class="text-body shadow bg-white transition-all duration-150 delay-0">
        <div class="text-body px-4 py-4">
          Hanem Harita, kadastral haritacılık, topografik haritacılık, jeolojik
          haritacılık, uzaktan algılama, coğrafi bilgi sistemleri (CBS), emlak
          danışmanlığı, gayrimenkul değerleme ve yatırım danışmanlığı gibi geniş
          bir yelpazede harita ve emlak hizmeti sunmaktadır.
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  question: {
    require: true,
    type: String,
  },

  desc: {
    require: true,
    type: Array,
  },
});

const isVisible = ref(false);

const toggle = () => {
  isVisible.value = !isVisible.value;
};

const beforeEnter = (el: any) => {
  el.style.height = "0";
};

const enter = (el: any) => {
  el.style.height = el.scrollHeight + "px";
};

const beforeLeave = (el: any) => {
  el.style.height = el.scrollHeight + "px";
};

const leave = (el: any) => {
  el.style.height = "0";
};
</script>

<style lang="scss" scoped></style>
