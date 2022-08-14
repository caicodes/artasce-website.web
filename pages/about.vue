<template>
    <v-card v-for="[name, cls] in classes" :key="name" class="my-4">
        <div :class="[cls, 'pa-2']">{{ name }}</div>
        <div class="text-caption pa-2 bg-grey-lighten-4">
            <div class="text-grey">Class</div>
            <div class="font-weight-medium">{{ cls }}</div>
        </div>
    </v-card>

</template>
<script setup>
import { typographyClasses as classes } from '@/constants/appMenus'
</script>