<script setup>
import { ref } from "vue";
import { addition, subtrack, divide } from "../../modules/services/BasicMath";

const x1 = ref(0);
const x2 = ref(0);
const result = ref(0);

const add = () => {
  result.value = addition(x1.value, x2.value);
};
const minus = () => {
  result.value = subtrack(x1.value, x2.value);
};
const divid = () => {
  result.value = divide(x1.value, x2.value);
};
</script>

<template>
  <input
    type="number"
    class="input input-bordered w-full max-w-xs"
    v-model="x1"
  />
  <input
    type="number"
    class="input input-bordered w-full max-w-xs"
    v-model="x2"
  />
  <div class="join gap-5">
    <button class="btn btn-accent" @click="add" :disabled="!x1 || !x2">
      Tambah
    </button>
    <button class="btn btn-error" @click="minus" :disabled="!x1 || !x2">
      Kurang
    </button>
    <button class="btn btn-error" @click="divid" :disabled="!x1 || !x2">
      Bagi
    </button>
  </div>
  <p>Result is: {{ result }}</p>
</template>
