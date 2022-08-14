<template>
    <v-app-bar app class="align-center">
        <v-app-bar-title>yo {{ theme.global.name.value }}</v-app-bar-title>
        <template v-slot:append>
            <ThemeToggle />
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="right" app>
        <NavDrawer />
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import NavDrawer from './NavDrawer.vue'
import ThemeToggle from '../colormode/ThemeToggle.vue'

const theme = useTheme()
const drawer = ref(false)

</script>

