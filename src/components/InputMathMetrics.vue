<script setup>
import { ref } from "vue";
// service euclidean Distance
import euclideanDistance from "../../modules/services/EuclideanMetrics";

const x1 = ref( 0 )
const x2 = ref( 0 )
const y1 = ref( 0 )
const y2 = ref( 0 )
const result =  ref( 0 )

const calculate = () =>{
  result.value = euclideanDistance(x1.value, y1.value, x2.value, y2.value)
}

</script>

<template>
  <input
    type="number"
    placeholder="x1"
    class="input input-bordered w-full max-w-xs"
    v-model="x1"
  />
  <input
    type="number"
    placeholder="x2"
    class="input input-bordered w-full max-w-xs"
    v-model="x2"
  />
  <input
    type="number"
    placeholder="y1"
    class="input input-bordered w-full max-w-xs"
    v-model="y1"
  />
  <input
    type="number"
    placeholder="y2"
    class="input input-bordered w-full max-w-xs"
    v-model="y2"
  />
    <button class="btn btn-accent" @click="calculate" :disabled="!x1 || !x2 || !y1 || !y2">
      Calculate
    </button>
   
  <p>Result is: {{ result }}</p>
</template>
