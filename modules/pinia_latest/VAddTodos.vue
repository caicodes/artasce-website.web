<template>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
        <v-card-title>
            Top western road trips
        </v-card-title>
        <v-card-subtitle>
            1,000 miles of wonder
        </v-card-subtitle>
        <v-card-text>

            <v-list-item v-for="(item, i) in todosStore.todos" :key="i" :value="item">
                <template v-slot:prepend="{ isActive }">
                    <v-list-item-action start>
                        <v-checkbox-btn v-model="item.completed"></v-checkbox-btn>
                    </v-list-item-action>
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>

            </v-list-item>
        </v-card-text>


        <v-card-actions>
            <v-btn @click="show = !show" color="orange-lighten-2" variant="text">
                Add Todos
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                    <v-text-field v-model="todoInput" variant="outlined" label="new todo">
                    </v-text-field>
                    <v-btn :disabled="todoInput === ''" @click="handleTodoInputSubmit">Add</v-btn>
                </v-card-text>
                <v-card-actions>

                </v-card-actions>
            </div>
        </v-expand-transition>
    </v-card>

    <!-- <v-card class="mx-auto" max-width="344">
        <v-list-item v-for="(item, i) in todosStore.todos" :key="i" :value="item">
            <template v-slot:prepend="{ isActive }">
                <v-list-item-action start>
                    <v-checkbox-btn v-model="item.completed"></v-checkbox-btn>
                </v-list-item-action>
            </template>
            <v-list-item-title>{{ item.title }}</v-list-item-title>

        </v-list-item>
    </v-card> -->
</template>

<script setup>
import { ref } from 'vue';
import { useTodosStore } from '../data/store'

const show = ref(false)
const todoInput = ref()
const todosStore = useTodosStore()

const handleTodoInputSubmit = async () => {
    console.log('yo, submit...')
    await todosStore.addTodo(todoInput.value)
    todoInput.value = ''
}
</script>
