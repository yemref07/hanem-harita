<template>
    <TheHeader />
        <slot></slot>
    <TheFooter/>
</template>

<script setup>
import TheHeader from '~/components/layouts/TheHeader.vue';
import TheFooter from '~/components/layouts/TheFooter.vue';

</script>

<style lang="css" scoped>

</style>