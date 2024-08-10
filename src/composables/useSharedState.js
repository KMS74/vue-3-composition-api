import { ref } from "vue";
// shared reactive variable to keep track of the count value
// (this is a shared variable because it is defined outside the function)
const count = ref(0);
export function useSharedState() {
  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {
    count,
    increment,
    decrement,
  };
}
