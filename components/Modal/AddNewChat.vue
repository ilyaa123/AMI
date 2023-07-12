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
        max-width="600px"
        width="100%"
    >

        <v-card>
            <v-card-title>Create New Chat</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-text-field variant="outlined" label="Write name for chat" />
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-row class="py-0 my-0">
                    <v-col md="6" cols="12">
                        <v-btn block @click="handleToUpdate(false)">Close</v-btn>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-btn block variant="outlined" color="primary">Accept</v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>