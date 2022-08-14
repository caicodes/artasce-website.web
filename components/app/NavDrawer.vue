<script setup>
import { NavDrawerMenuItems as items, navItems } from '@/constants/appMenus'
</script>

<template>
    <v-list>
        <v-list-subheader>Plain Variant</v-list-subheader>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="primary-content" variant="plain"
            :to="item.url">
            <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
    </v-list>
    <v-list>
        <v-list-subheader>Tonal Variant</v-list-subheader>

        <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="primary-content" variant="tonal"
            :to="item.url">
            <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
    </v-list>

    <v-card class="mx-auto" width="256">
        <v-layout>
            <v-system-bar color="base-300">system bar</v-system-bar>

            <v-navigation-drawer permanent absolute>
                <v-list>
                    <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" title="John Leider"
                        subtitle="john@vuetifyjs.com">
                        <template v-slot:append>
                            <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
                        </template>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list :lines="false" density="compact" nav>
                    <v-list-item v-for="(item, i) in navItems" :key="i" :value="item" active-color="primary-content">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 354px;"></v-main>
        </v-layout>
    </v-card>


</template>
