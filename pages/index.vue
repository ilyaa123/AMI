<script lang="ts" setup>
    import { useTestStore } from '~/store/TestStore';

    const testStore = useTestStore();

    onMounted(() => {
        testStore.getAllTests()
    })
    // const { data } = await useFetch('/api/test')
    // console.log(data)
</script>
<template>
    <div>
        IndexPage
    </div>
</template>