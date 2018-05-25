<template>
  <v-app :dark="dark">
    <v-toolbar fixed app>
		<v-toolbar-side-icon class="hidden-md-and-up mr-0" @click="drawer = !drawer"></v-toolbar-side-icon>
		<v-avatar
			size="32px"
			tile
			class="ml-3 mr-1"
		>
			<img
				src="@/assets/logo.png"
			>
		</v-avatar>
		<v-toolbar-title v-text="title" class="ml-2"></v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down hidden-lg-and-up">
			<v-btn flat exact :to="{ name: 'Home' }">
				<v-icon>fas fa-home</v-icon>
			</v-btn>
			<v-btn flat exact :to="{ name: 'News' }">
				<v-icon>fas fa-newspaper</v-icon>
			</v-btn>
			<v-btn flat href="https://github.com/gdkchan/Ryujinx/wiki">
				<v-icon>fas fa-lemon</v-icon>
			</v-btn>
			<v-btn flat exact :to="{ name: 'Build' }">
				<v-icon>fas fa-database</v-icon>
			</v-btn>
			<v-btn flat exact :to="{ name: 'Contribute' }">
				<v-icon>fas fa-code</v-icon>
			</v-btn>
			<v-btn flat exact :to="{ name: 'Compatibility' }">
				<v-icon>fas fa-gamepad</v-icon>
			</v-btn>

			<v-btn flat color="green" href="https://github.com/gdkchan/Ryujinx"><v-icon>fab fa-github</v-icon></v-btn>
			<v-btn flat color="blue" href="https://discord.gg/VkQYXAZ"><v-icon>fab fa-discord</v-icon></v-btn>
			<v-btn flat color="red" href="https://www.reddit.com/r/Ryujinx"><v-icon>fab fa-reddit</v-icon></v-btn>
		</v-toolbar-items>
		<v-toolbar-items class="hidden-md-and-down">
			<v-btn flat exact :to="{ name: 'Home' }">Home</v-btn>
			<v-btn flat exact :to="{ name: 'News' }">News</v-btn>
			<v-btn flat href="https://github.com/gdkchan/Ryujinx/wiki">Wiki</v-btn>
			<v-btn flat exact :to="{ name: 'Build' }">Build</v-btn>
			<v-btn flat exact :to="{ name: 'Contribute' }">Contribute</v-btn>
			<v-btn flat exact :to="{ name: 'Compatibility' }">Compatibility</v-btn>

			<v-btn flat color="green" href="https://github.com/gdkchan/Ryujinx"><v-icon left>fab fa-github</v-icon>GitHub</v-btn>
			<v-btn flat color="blue" href="https://discord.gg/VkQYXAZ"><v-icon left>fab fa-discord</v-icon>Discord</v-btn>
			<v-btn flat color="red" href="https://www.reddit.com/r/Ryujinx"><v-icon left>fab fa-reddit</v-icon>Reddit</v-btn>
		</v-toolbar-items>
		<v-toolbar-items class="ml-0 mr-2">
			<v-btn flat @click.stop="toggleDarkMode()">
				<v-icon v-if="dark">fas fa-sun</v-icon>
				<v-icon v-else>fas fa-moon</v-icon>
			</v-btn>
		</v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      fixed
    >
      <v-list>
        <!-- Home -->
        <v-list-tile exact :to="{ name: 'Home' }">
          <v-list-tile-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <!-- News -->
        <v-list-tile exact :to="{ name: 'News' }">
          <v-list-tile-action>
            <v-icon>fas fa-newspaper</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>News</v-list-tile-title>
        </v-list-tile>

        <!-- Wiki -->
        <v-list-tile href="https://github.com/gdkchan/Ryujinx/wiki">
          <v-list-tile-action>
            <v-icon>fas fa-lemon</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Wiki</v-list-tile-title>
        </v-list-tile>

        <!-- Build -->
        <v-list-tile exact :to="{ name: 'Build' }">
          <v-list-tile-action>
            <v-icon>fas fa-database</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Build</v-list-tile-title>
        </v-list-tile>

        <!-- Contribute -->
        <v-list-tile exact :to="{ name: 'Contribute' }">
          <v-list-tile-action>
            <v-icon>fas fa-code</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Contribute</v-list-tile-title>
        </v-list-tile>

        <!-- Game Compatibility -->
        <v-list-tile exact :to="{ name: 'Compatibility' }">
          <v-list-tile-action>
            <v-icon>fas fa-gamepad</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Game Compatibility</v-list-tile-title>
        </v-list-tile>

        <v-divider></v-divider>

        <!-- GitHub -->
        <v-list-tile color="green" href="https://github.com/gdkchan/Ryujinx">
          <v-list-tile-action>
            <v-icon color="green">fab fa-github</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>GitHub</v-list-tile-title>
        </v-list-tile>

        <!-- Discord -->
        <v-list-tile color="blue" href="https://discord.gg/VkQYXAZ">
          <v-list-tile-action>
            <v-icon color="blue">fab fa-discord</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Discord</v-list-tile-title>
        </v-list-tile>

        <!-- Reddit -->
        <v-list-tile color="red" href="https://www.reddit.com/r/Ryujinx">
          <v-list-tile-action>
            <v-icon color="red">fab fa-reddit</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Reddit</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
	<v-footer fixed app class="text-xs-center">
		<v-flex>
			<em>Made with <v-icon color="red" class="mx-1">fas fa-heart</v-icon> by <a target="_blank" href="https://twitter.com/Lordmau5">Lordmau5</a></em>
		</v-flex>
    </v-footer>
  </v-app>
</template>

<style scoped>
	.btn {
		min-width: 0;
	}
</style>


<script>
export default {
	data () {
		return {
			dark: localStorage.dark_mode === 'true',
			drawer: false,
			title: 'Ryujinx - Switch Emulator'
		};
	},
	methods: {
		toggleDarkMode () {
			this.dark = !this.dark;
			localStorage.dark_mode = this.dark;
		}
	},
	name: 'App'
};
</script>
