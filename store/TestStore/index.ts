import { defineStore } from "pinia";


export const useTestStore = defineStore('testStore', {
    state: () => ({
        test: false
    }),
    actions: {
        setTest(payload: boolean){
            this.test = payload
        },
        async getAllTests(){
            const { data } = await useFetch('/api/test');
            console.log('data', data.value)
        }
    }
})