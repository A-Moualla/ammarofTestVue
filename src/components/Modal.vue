<template>
    <teleport to=".modals-container">
          <div v-if="modelValue"
               class="modal">
            <h3>{{ title }}</h3>
            <slot />
            <button @click="$emit('update:modelValue', false)">hide modal</button>
            <div> username is {{ userData.username }}</div>
          </div>
     </teleport>
</template>
<script setup>

import { inject } from 'vue';

const props = defineProps({
  modelValue:{
    type: Boolean,
    default: false
  },
  title:{
    type: String,
    default: 'no title specified'
  }
})

const emit = defineEmits(['update:modelValue'])
const userData = inject('userData')
</script>
<style>
.modal{
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>