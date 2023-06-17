<script setup lang="ts">
    import { ref } from 'vue';
    const rail = ref<boolean>(true)

    const handleToAddNewChat = () => {

    }
</script>
<template>
    <v-navigation-drawer
        :model-value="true"
        location="left"
        absolute
        rounded
        :rail="rail"    
    >
        <v-list lines="one" density="compact" nav>
            <v-list-item color="primary" nav @click="rail = !rail">
                <v-icon :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"></v-icon>
            </v-list-item>
        </v-list>
        
        <v-list>
            <v-list-item @click="handleToAddNewChat">
                <template v-slot:prepend>
                    <v-icon>mdi-plus</v-icon>
                </template>
                <v-list-item-title>Add new chat</v-list-item-title>
            </v-list-item>
        </v-list>

        <v-list lines="one" density="compact" nav>
            <v-list-item>
                
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>