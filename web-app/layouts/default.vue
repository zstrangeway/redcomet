<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mobile"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon 
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="drawer = !drawer" 
      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div v-if="!$vuetify.breakpoint.mobile">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          text
          small
        >
          {{item.title}}
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'About',
          to: '/about'
        },
        {
          title: 'Services',
          to: '/services'
        },
        {
          title: 'Information',
          to: '/information'
        },
        {
          title: 'Contact',
          to: '/contact'
        },
        {
          title: 'Gallery',
          to: '/gallery'
        }
      ],
      title: 'Red Comet Creations'
    }
  }
}
</script>
