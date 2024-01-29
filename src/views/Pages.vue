<script setup>
import InputMath from '../components/InputMath.vue';

// Props message to parent app.vue
defineProps({
  msg: String,
});

</script>

<template>
  <h1 class="mt-5 mb-5 mx-5 text-center font-extrabold">{{ msg }}</h1>
  <div class="grid grid-rows-4 justify-center mx-5 mt-5 mb-5 gap-4">
    <InputMath></InputMath>
  </div>
</template>
