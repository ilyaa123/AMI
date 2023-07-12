<script setup lang="ts">
    import { computed } from 'vue';

    import { useModalStore } from '../../store/modalStore';

    const store = useModalStore();

    const value = computed(() => store.getAddChatModal)

    const handleToUpdate = (value: boolean) => {
        store.setAddChatModal(value)
    }
</script>

<template>
    <v-dialog
        :model-value="value"
        @update:modelValue="handleToUpdate"
        min-width="600px"
        width="auto"
    >

        <v-card>
            <v-card-title>Create New Chat</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Write you username" />
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="handleToUpdate(false)">Close</v-btn>
                <v-btn variant="outlined" color="primary">Accept</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>