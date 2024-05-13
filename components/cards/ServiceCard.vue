<template>
  <div
    class="flex flex-col items-center justify-center px-4 pt-10 pb-16 shadow-md bg-white hover:bg-slate-100 cursor-pointer rounded-md transition-all delay-75"
  >
    <nuxt-link :to="localePath('/hizmetlerimiz')" title="Hizmetlerimiz">
      <Icon
        :name="props.icon || 'carbon:undefined'"
        width="80"
        height="80"
        class="cursor-pointer text-primary"
      />
    </nuxt-link>

    <h2 class="mt-3">
      <nuxt-link
        class="text-lg font-semibold"
        :to="localePath('/hizmetlerimiz')"
        title="Hizmetlerimiz"
        >{{ title || "lorem ipsum" }}</nuxt-link
      >
    </h2>

    <p class="text-center mt-2 text-body">
      <nuxt-link :to="localePath('/hizmetlerimiz')" title="Hizmetlerimiz">
        {{ desc || "lorem ipsum" }}
      </nuxt-link>
    </p>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

const props = defineProps({
  title: {
    type: String,
    require: true,
  },

  desc: {
    type: String,
    require: true,
  },

  icon: {
    type: String,
    require: true,
  },
});
</script>

<style lang="scss" scoped></style>
