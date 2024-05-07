<template>
  <button class="btn-primary" :class="setBtnSize"  @click="$emit('btnClick')">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
    size:{
        require:false,
        type:String
    }
})


const setBtnSize = computed(()=>{
    if(props.size === "small"){
        return {"btn-small" : true }
    }

    else if ( props.size === "base"){
        return {"btn-base" : true }
    }

    else if( props.size === "large"){
        return {"btn-large" : true }
    }

    else{
        return {"btn-base" : true }
    }
})
</script>

<style lang="css" scoped>

.btn-small{
    padding: 5px 10px;
}

.btn-base{
    padding: 10px 20px;
}

.btn-large{
    padding: 15px 40px;
}


.btn-primary {
  background: var(--color-primary);
  color:white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-family: "Spartan", sans-serif;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary:hover{
    background: var(--color-secondary);
}

</style>
