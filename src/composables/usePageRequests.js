import { computed, reactive } from "vue";

// shared reactive array to keep track of active requests
// (this is a shared array because it is defined outside the function)
// this array will be used to determine if the page is loading
// (if the array is empty, the page is not loading)
const activeRequests = reactive([]);

export default function usePageRequests() {
  const isLoading = computed(() => !!activeRequests.length);

  const makeRequest = async (url) => {
    // add the url to the activeRequests array
    const index = activeRequests.length;
    activeRequests[index] = url;

    const response = await fetch(url).catch((error) => {
      //  if request fails, remove the url from the activeRequests array
      console.log(error);
      activeRequests.splice(index, 1);
    });
    const data = await response.json();
    //     remove the url from the activeRequests array
    activeRequests.splice(index, 1);
    //    return the data
    return data;
  };
  return {
    makeRequest,
    isLoading,
  };
}
