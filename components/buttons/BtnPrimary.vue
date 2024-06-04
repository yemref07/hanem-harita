<template>
    <nuxt-link class="btn-primary" :class="setBtnSize" :to="localePath(`/${link}`)" v-if="link">
            <slot />
    </nuxt-link>

    <button class="btn-primary" :class="setBtnSize" @click="$emit('btnClick')" v-else>
        <slot />
    </button>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

const props = defineProps({
    size: {
        require: false,
        type: String,
    },

    link: {
        require: false,
        type: String,
    },
});

const setBtnSize = computed(() => {
    if (props.size === "small") {
        return { "btn-small": true };
    } else if (props.size === "base") {
        return { "btn-base": true };
    } else if (props.size === "large") {
        return { "btn-large": true };
    } else {
        return { "btn-base": true };
    }
});
</script>

<style lang="scss" scoped>
.btn-small {
    @include btn-size(small);
}

.btn-base {
    @include btn-size(medium);
}

.btn-large {
    @include btn-size(large);
}

.btn-primary {
    background: $color-primary;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
    font-family: "Spartan", sans-serif;
    font-weight: 600;
    transition: all 0.2s;
    text-align: center;
}

.btn-primary:hover {
    background: $color-secondary;
}
</style>
