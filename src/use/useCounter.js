import { reactive, computed, watch, onMounted, nextTick } from 'vue'

const counterData = reactive({
    count : 0,
    title : 'my counter'
  })

export function useCounter(){

      watch(() => counterData.count, (newCount) => {
        if(newCount == 20){
          alert('you did it !!!!!')
        }
      })

      const oddOrEven = computed(() => {
        if(counterData.count % 2 === 0) return 'even'
        return 'odd'
      })

      const increaseCounter = (amount, e) =>{
        counterData.count += amount
        nextTick(() => {
          console.log('do some thing while counter increased');
        })
      }
      
      const decreaseCounter = (amount) =>{
        counterData.count -= amount
      }

      onMounted(() => {
        console.log();
      })

      return{
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter
      }
}