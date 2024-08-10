import {ref} from 'vue'
import usePageRequests from "./usePageRequests";

export default function useResource(resource) {
    const {makeRequest} = usePageRequests();

    // define the base URL
    const baseURL = `https://jsonplaceholder.typicode.com/${resource}`
    // define the reactive variables
    const items = ref([]);
    const item = ref(null);

    // define the functions
    const fetchAll = async () => {

        items.value = await makeRequest(baseURL)
    }
    const fetchOne = async (id) => {
        item.value = await makeRequest(`${baseURL}/${id}`)
    }

    // return the reactive variables and functions
    return {
        items,
        item,
        fetchAll,
        fetchOne
    }
}