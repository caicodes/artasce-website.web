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

Colormode working, no sync with nuxt/color-mode at this time... For now, done... sync later, I'm not in the mood for another battle with color modes and theming, besides, I've pretty much nailed a few different setups, now it's about the vuetify elements, the starter site, the presentation/navigation/buttery effects for show!

### Todos Testing

Todos were a ***drop-in*** and work perfectly... 

> UI NOTE: related to vuetify... there's an app 'squash' then flash fill the screen issue I'm wonding about...

For now, the site now has menus and pages setup, todos work, light/dark is working, no persist, no deep integration... no color theming setup, sass vars done... coming along.

# New - Settings store

a store setup for ui settings, pinia... then linked to localStorage, then firebase, then api...

## module pinia latest from starter

this store setup will have the new file to be added to the module... `data/settings.js` to be separate from `data/store.js` and the next will be `data/firestore.js` keeping them separate but available for drop-in from the module directly.

> need a module management project, use firebase? or... internal tracking and repo for the suite of modules underdevelopement... central repo for syncing up and use in projects... list of projects using, links to demos, dashboard... etc.. the `dashboard` project... this can also help organize the `portfolio` project and the `clients` project, soon to be developed...

todos for the dashboard - link the blogs, resources, projects, demos, and more... the master cms/crm/dashboard... 

projects - 

pinia
shopify
woo
messaging
stats


## update - firebase hosting fixed...

this issue has been resolved, it's client-side or pre-rendered.. first I did pre-rendered, worked great... for client side only, need to update the config with `ssr: false`

```javascript

defineNuxtConfig({
  ssr: false
})

```
