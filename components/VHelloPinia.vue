<template>
    <div id="hello-pinia">


        <v-card width="256" class="my-8" color="secondary">
            <v-card-title class="text-center" primary-title>
                {{ storeCounter.title }}
            </v-card-title>
            <v-card-text>
                <div class="text-h1 text-center">{{ storeCounter.count }}</div>
            </v-card-text>
            <v-card-actions>
                <div class="mx-auto">
                    <v-btn @click="storeCounter.decrementCount" icon="mdi-chevron-double-left">
                    </v-btn>
                    <v-btn @click="storeCounter.decrementCount" icon="mdi-chevron-left">
                    </v-btn>
                    <v-btn @click="storeCounter.incrementCount" icon="mdi-chevron-right">
                    </v-btn>
                    <v-btn @click="storeCounter.incrementCount" icon="mdi-chevron-double-right">
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>

        <!-- title edit -->
        <v-text-field v-model="storeCounter.title" label="counter title" variant="solo"></v-text-field>

        <input v-model="storeCounter.title" type="text" placeholder="New App title..." />

        <!-- todos -->
        Todos:
        <!-- add a todo -->
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore, useTodosStore } from '../data/store'
const storeCounter = useCounterStore()
const { todos, completedTodos } = storeToRefs(useTodosStore())
const todoInput = ref('')
const todosStore = useTodosStore()
const handleTodoInputSubmit = async () => {
    console.log('yo, submit...')
    await todosStore.addTodo(todoInput.value)
    todoInput.value = ''
}
const handleDeleteTodoClick = (todoID) => {
    todosStore.deleteTodo(todoID)
}
</script>