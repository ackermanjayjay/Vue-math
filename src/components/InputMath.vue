<script setup>
import { ref } from 'vue';

const x1 = ref(0)
const x2 = ref(0)
const result = ref(0)

const addition = () => {
    result.value = (+x1.value) + (+x2.value)
}
const subtrack = () => {
    result.value = (+x1.value) - (+x2.value)
}
</script>

<template>
    <input type="number" class="input input-bordered w-full max-w-xs" v-model="x1" />
    <input type="number" class="input input-bordered w-full max-w-xs" v-model="x2" />
    <button class="btn btn-accent" @click="addition" :disabled="!x1 || !x2">
        Tambah
    </button>
    <button class="btn btn-error" @click="subtrack" :disabled="!x1 || !x2">
        Kurang
    </button>
    <p>Result is: {{ result }}</p>
</template>