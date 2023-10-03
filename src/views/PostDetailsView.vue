
<template>
  <div class="post-details">
    <h1>this is a post page</h1>
    <p>display the content of post with id {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">show post ID</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">go home in 3 seconds</button>
    </div>
    <p><RouterLink to="/posts">&lt back</RouterLink></p>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const showPostId = () => {
  alert(`the id is ${ route.params.id }`)
}

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    router.push('/')
  }, 3000);
}
</script>