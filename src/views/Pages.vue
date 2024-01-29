<script setup>
import BasicMath from './features/BasicMath.vue';

// Props message to parent app.vue
defineProps({
  msg: String,
});

</script>

<template>
    <BasicMath msg="Basic Math"></BasicMath>
</template>
