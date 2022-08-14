# nuxt vuetify firebase

```
yarn add -D @nuxtjs/color-mode @nuxt/content
yarn add  @pinia/nuxt gsap firebase vuetify@3.0.0-beta.7 sass @mdi/font
```

Ok... after that, the nuxt config...

```javascript

import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "@nuxt/content", "@pinia/nuxt"],
});

```

Now add a plugins directory, and next a file vuetify.js with the following

```javascript
// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})
```

Now configure nuxt to build it and pull in the css...

```javascript
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "@nuxt/content", "@pinia/nuxt"],
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});

```

Now, test to see it working and drop in the default application layout at app.vue


```javascript
<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>

</template>

```

Ok, now to do some clean up from the instructions found at the time of this setup which needed some finesse...


Using mdi icons... added that and also the sass setup needed some tweaks to get the variables in, the icon font in and then provide the updated url to the compiled output from `/styles/vuetify.scss` that first imports custom variables and then passes to the vuetify sasss... nice!

```javascript
// Styles
import "@mdi/font/css/materialdesignicons.css";
import "../styles/vuetify.scss";

// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});

```

and... the `styles/vuetify.scss` file is as follows now:

```
@import "./variables.scss";
@import "vuetify/lib/styles/main.sass";

```

And to verify the setup thus far, run the project, make a change to the sass variables, 


```scss
/* @/styles/_variables.scss */
$font-size-root: 36px;

```
then dropping this into `pages/index.vue`

```javascript

<template>
    <v-icon>mdi-home</v-icon>
</template>

```

Now seeing a big home icon, means the variables are working and the icon font is also working... vue dev tools confirms pinia is initialized, added a `data/store.js` file to setup a starter pinia with todos and a counter, all working... tested thru `@components/VHelloPina.vue` then made the page to verify it...

```javascript
<script setup>
import HelloPinia from '../components/VHelloPinia.vue'
</script>

<template>
    <HelloPinia />
</template>

```

### Content Module added

Added content and module configured, has a full site setup of pages... haven't found the source project from a little while ago that had the best implementation...

### Colormode added... 

Setting up the darkmode, the nuxt module makes this simple... let's keep it simple for this starter and focus on the dual light/dark setup, knowing it's easy to integrate more, this is a first run with vuetify colormode and nuxt using nuxt/color-mode... 

> still need to look into using css vars better with vuetify...


