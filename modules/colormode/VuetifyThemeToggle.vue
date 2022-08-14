<template>
    <div class="my-colormode-switch">
        <!-- <v-switch class="colormode-switch" @click="toggleTheme" v-model="switch1"
            :label="switch1 === true ? 'dark' : 'light'">
        </v-switch> -->
        <v-badge color="background text-primary-content text-uppercase" :content="theme.global.name.value"
            class="badge-color mb-4 mr-6">
        </v-badge>
        <v-btn color="btn-circle primary-content" icon="mdi-theme-light-dark" @click.stop="toggleTheme">
        </v-btn>

    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
const theme = useTheme()
let isDark = ref(false)
const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
<style scoped>
.my-colormode-switch .badge-color {
    opacity: .45;
}

.my-colormode-switch:hover .badge-color {
    opacity: 1;
}
</style>