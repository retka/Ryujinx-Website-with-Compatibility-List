<template>
  <v-app :dark="dark">
    <!-- IMPORTANT: KEEP THIS HERE-->
    <SEO/>
    <v-toolbar fixed app>
      <v-toolbar-side-icon class="hidden-md-and-up mr-0" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-avatar size="32px" tile class="ml-3 mr-1">
        <g-image src="~/assets/logo.png" alt="Ryujinx" width="32"/>
      </v-avatar>
      <v-toolbar-title v-text="title" class="ml-2"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down hidden-lg-and-up">
        <v-btn flat exact to="/">
          <v-icon>fas fa-home</v-icon>
        </v-btn>
        <v-btn flat href="https://blog.ryujinx.org/">
          <v-icon>fas fa-newspaper</v-icon>
        </v-btn>
        <v-btn flat exact to="/download">
          <v-icon>fas fa-download</v-icon>
        </v-btn>
        <v-btn flat exact to="/contribute">
          <v-icon>fas fa-code</v-icon>
        </v-btn>
        <v-btn
          flat
          exact
          href="https://github.com/Ryujinx/Ryujinx-Games-List/issues"
          rel="noopener"
          target="_blank"
        >
          <v-icon>fas fa-gamepad</v-icon>
        </v-btn>

        <v-btn flat v-for="element in $static.socialNavbarElements.edges" :key="element.node.id" :color="element.node.color" :href="element.node.href">
          <v-icon>fab {{ element.node.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn flat exact to="/">Home</v-btn>
        <v-btn flat href="https://blog.ryujinx.org/">Blog</v-btn>
        <v-btn flat exact to="/download">Download</v-btn>
        <v-btn flat exact to="/contribute">Contribute</v-btn>
        <v-btn
          flat
          exact
          href="https://github.com/Ryujinx/Ryujinx-Games-List/issues"
          rel="noopener"
          target="_blank"
        >Compatibility</v-btn>

        <v-btn flat v-for="element in $static.socialNavbarElements.edges" :key="element.node.id" :color="element.node.color" :href="element.node.href">
          <v-icon>fab {{ element.node.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="ml-0 mr-2">
        <v-btn flat @click.stop="toggleDarkMode()">
          <v-icon v-if="dark">fas fa-sun</v-icon>
          <v-icon v-else>fas fa-moon</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <slot />
    </v-content>
    <v-navigation-drawer temporary v-model="drawer" fixed>
      <v-list>
        <!-- Index -->
        <v-list-tile exact to="/">
          <v-list-tile-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <!-- News -->
        <v-list-tile href="https://blog.ryujinx.org/">
          <v-list-tile-action>
            <v-icon>fas fa-newspaper</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Blog</v-list-tile-title>
        </v-list-tile>

        <!-- Download -->
        <v-list-tile exact to="/download">
          <v-list-tile-action>
            <v-icon>fas fa-download</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Download</v-list-tile-title>
        </v-list-tile>

        <!-- Contribute -->
        <v-list-tile exact to="/contribute">
          <v-list-tile-action>
            <v-icon>fas fa-code</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Contribute</v-list-tile-title>
        </v-list-tile>

        <!-- Game Compatibility -->
        <v-list-tile
          exact
          href="https://github.com/Ryujinx/Ryujinx-Games-List/issues"
          rel="noopener"
          target="_blank"
        >
          <v-list-tile-action>
            <v-icon>fas fa-gamepad</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Game Compatibility</v-list-tile-title>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile v-for="element in $static.socialNavbarElements.edges" :key="element.node.id" :color="element.node.color" :href="element.node.href">
          <v-list-tile-action>
            <v-icon :color="element.node.color">fab {{ element.node.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{element.node.title}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer class="text-xs-center">
      <v-flex class="text-xs-left">
      <v-card-text class="py-2 text-center">
        Website designed by
        <a rel="noopener" target="_blank" href="https://twitter.com/Lordmau5">Lordmau5</a>
      </v-card-text>
      </v-flex>
      <v-flex class="text-xs-right">
      <v-card-text class="py-2 text-center">
        {{this.$static.metadata.siteAuthor}} © {{ new Date().getFullYear() }}
      </v-card-text>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteAuthor
  }
  socialNavbarElements: allSocialNavbarElements(order: ASC) {
    edges {
      node {
        title
        color
        href
        icon
      }
    }
  }
}
</static-query>

<style scoped>
.btn {
  min-width: 0;
}
</style>

<style>
a {
  color: #00c4e1;
}
</style>

<script>
export default {
  data() {
    return {
      title: "Ryujinx - Nintendo Switch Emulator",
      dark: process.isClient && localStorage.dark_mode === "true",
      drawer: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.dark = !this.dark;
      localStorage.dark_mode = this.dark;
    }
  }
};
</script>
