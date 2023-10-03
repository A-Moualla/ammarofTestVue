
<template>
  <div class="posts">
    <h1>posts</h1>
    <ul>
      <li
      v-for="post in posts"
      :key="post.id"
      >
        <RouterLink :to="`/postDetails/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus></textarea>
    <button 
           @click="increaseCounter(1)"
           class="counter-bytton"
           :class="{'yellow' : oddOrEven === 'odd'}">
      {{ counterData.count}}
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useCounter } from '@/use/useCounter'
import { vAutofocus } from '@/directives/vAutofocus'

const posts = ref([
  {
    id: 'id1',
    title: 'post 1'
  },
  {
    id: 'id2',
    title: 'post 2'
  },
  {
    id: 'id3',
    title: 'post 3'
  }
])

const {counterData, oddOrEven, increaseCounter, decreaseCounter} = useCounter()
</script>
<style scoped>
ul {
margin-bottom: 30px;
}
.counter-bytton{
  width: 100%;
  font-size: 60px;
  background-color: green;
}
.counter-bytton.yellow{
  background-color: yellow;
}
</style>