
<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
      <h1>{{ counterData.title }}</h1>
      <div>
          <button @click="decreaseCounter(2)" class="btn">--</button>
          <button @click="decreaseCounter(1)" class="btn">-</button>
          <span class="counter">{{ counterData.count }}</span>
          <button @click="increaseCounter(1,$event)" class="btn">+</button>
          <button @click="increaseCounter(2)" class="btn">++</button>
      </div>
      <p>this counter is {{ oddOrEven }}</p>

      <div class="edit">
        <h1>Edit counter title</h1>
        <input v-model="counterData.title" type="text" v-autofocus>
      </div>
  </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useCounter } from '@/use/useCounter'
    import { vAutofocus } from '@/directives/vAutofocus'

        const appTitle = 'my counter APP'
        const appTitleRef = ref(null)
        onMounted(() => {
          console.log(`the width of the title is ${appTitleRef.value.offsetWidth} px wide`);
        })

       const {counterData,
              oddOrEven,
              increaseCounter,
               decreaseCounter} = useCounter()
</script>

<style>
.home{
  text-align: center;
  padding: 20px;
}
.btn, .counter{
  font-size: 40px;
  margin: 10px;
}
.edit{
  margin-top: 60px;
}
</style>