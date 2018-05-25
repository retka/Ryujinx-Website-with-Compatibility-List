<template>
	<div>
		<section>
			<v-parallax :src="require('@/assets/wallp.png')" height="600">
				<v-layout
					column
					align-center
					justify-center
					class="text-xs-center"
				>
					<img src="@/assets/logo.png" alt="RyujiNX" class="mb-5" />
					<p class="display-1">A simple, experimental Nintendo Switch emulator.</p>
					<p class="caption">Information and content is subject to change.</p>
				</v-layout>
			</v-parallax>
		</section>
		<section>
			<v-layout
				column
				wrap
				class="mt-5"
				align-center
			>
				<v-container grid-list-xl fluid>
					<v-layout row wrap align-start justify-center>
						<v-flex xs12 md6>
							<div class="text-xs-center">
								<p class="display-1">What is RyujiNX?</p>
								<span class="subheading">
									<small>
										<em>(REE-YOU-JI-NX)</em>
									</small>
									
									<p class="my-2">It is a Nintendo Switch Emulator programmed in C#; unlike most emulators that are created with C++ or C.
									This emulator aims to offer good performance, a friendly interface, and consistent builds.
									RyujiNX is created by user gdkchan over at the GBAtemp forums.
									This emulator is also available on GitHub, and is licensed under the "Unlicensed" license.</p>

									<p class="my-2">Note: This emulator is not capable (as of now) of running Commercial Nintendo Switch games!
									If you somehow find a source claiming that the Emulator is capable, and it has not been officially confirmed by us;
									Please consider reporting it via our Discord server. 
									</p>

									<v-btn dark color="blue" :to="{ name: 'Compatibility' }">
										<v-icon left>fas fa-list</v-icon>
										Game compatibility list
									</v-btn>
									<v-btn dark color="red" :to="{ name: 'Build' }">
										<v-icon left>fas fa-download</v-icon>
										Download the latest build
									</v-btn>

									<p class="my-2">
										<small>
											<em>Please keep in mind that these builds are from AppVeyor and are considered unstable!</em>
										</small>
									</p>
								</span>
							</div>
						</v-flex>
					</v-layout>
				</v-container>
				<v-container grid-list-xl>
					<v-layout row wrap align-start>
						<v-flex xs12 md4>
							<v-card class="elevation-0 transparent">
								<v-card-text class="text-xs-center">
									<v-icon x-large class="blue--text text--lighten-2">fab fa-github</v-icon>
								</v-card-text>
								<v-card-title primary-title class="layout justify-center">
									<div class="display-1 text-xs-center">Where can I grab it?</div>
								</v-card-title>
								<v-card-text class="text-xs-center">
									As of right now, the emulator has no stable builds;
									although, you may follow the build guide by clicking the "Build" menu option above.
									Or you may download the latest pre-compiled build (above).
								</v-card-text>
							</v-card>
						</v-flex>
						<v-flex xs12 md4>
							<v-card class="elevation-0 transparent">
								<v-card-text class="text-xs-center">
									<v-icon x-large class="blue--text text--lighten-2">fas fa-code</v-icon>
								</v-card-text>
								<v-card-title primary-title class="layout justify-center">
									<div class="display-1 text-xs-center">How can I contribute?</div>
								</v-card-title>
								<v-card-text class="text-xs-center">
									Please visit the contributing tab for more information.
								</v-card-text>
							</v-card>
						</v-flex>
						<v-flex xs12 md4>
							<v-card class="elevation-0 transparent">
								<v-card-text class="text-xs-center">
									<v-icon x-large class="blue--text text--lighten-2">fas fa-gamepad</v-icon>
								</v-card-text>
								<v-card-title primary-title class="layout justify-center">
									<div class="display-1 text-xs-center">Gaming?</div>
								</v-card-title>
								<v-card-text class="text-xs-center">
									RyujiNX currently doesn't work well with games as of now.
									Much like 'yuzu,' it only supports homebrew at the moment.
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
			<v-parallax class="hidden-sm-and-down" :src="require('@/assets/wallp2.png')" height="200"></v-parallax>
			<v-layout
				column
				wrap
				align-center
			>
				<v-container grid-list-xl>
					<v-layout row wrap align-start>
						<v-flex xs12 md4>
							<v-card class="elevation-0 transparent">
								<v-card-text class="text-xs-center">
									<v-icon x-large class="blue--text text--lighten-2 mr-4">fab fa-windows</v-icon>
									<v-icon x-large class="blue--text text--lighten-2 mr-4">fab fa-apple</v-icon>
									<v-icon x-large class="blue--text text--lighten-2">fab fa-linux</v-icon>
								</v-card-text>
								<v-card-title primary-title class="layout justify-center">
									<div class="display-1 text-xs-center">Platforms</div>
								</v-card-title>
								<v-card-text class="text-xs-center">
									RyujiNX is currently only available for Windows.
									Although, support for Linux, and macOS is there;
									but it may be more difficult to compile it.
								</v-card-text>
							</v-card>
						</v-flex>
						<v-flex xs12 md4>
							<v-card class="elevation-0 transparent">
								<v-card-text class="text-xs-center">
									<v-icon x-large class="blue--text text--lighten-2">fab fa-discord</v-icon>
								</v-card-text>
								<v-card-title primary-title class="layout justify-center">
									<div class="display-1 text-xs-center">Discord</div>
								</v-card-title>
								<v-card-text class="text-xs-center">
									Join the RyujiNX Discord server; you can get help,
									as well as converse with fellow users and developers.
									Join here.
								</v-card-text>
							</v-card>
						</v-flex>
						<v-flex xs12 md4>
							<v-card class="elevation-0 transparent">
								<v-card-text class="text-xs-center">
									<v-icon x-large class="blue--text text--lighten-2">fab fa-nintendo-switch</v-icon>
								</v-card-text>
								<v-card-title primary-title class="layout justify-center">
									<div class="display-1 text-xs-center">Why the name?</div>
								</v-card-title>
								<v-card-text class="text-xs-center">
									The name RyujiNX is based on the name "Ryujin."
									In other words, a name for a Mythical (Sea-God) Dragon.
									More information can be found here. 
									The name stems from Ryu (as already explained), then RyuJIT;
									which is the codename for the JIT compiler for Net Core.
									The NX part of the name is from the Codename of the Switch itself.
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
			<v-parallax class="hidden-sm-and-down" :src="require('@/assets/wallp3.png')" height="200"></v-parallax>
			<v-layout
				column
				wrap
				align-center
			>
				<v-container grid-list-xl>
					<v-layout row wrap align-start justify-center>
						<v-flex xs12>
							<v-card class="elevation-0 transparent">
								<v-card-text class="text-xs-center">
									<v-icon x-large class="blue--text text--lighten-2">fas fa-users</v-icon>
								</v-card-text>
								<v-card-title primary-title class="layout justify-center">
									<div class="display-1 text-xs-center">Our Team</div>
								</v-card-title>
							</v-card>
						</v-flex>
					</v-layout>
					<v-layout
						v-if="loading"
						row
						wrap
						align-center
						justify-center
					>
						<v-flex
							xs12
							class="text-xs-center"
						>
							<v-progress-circular :size="100" indeterminate color="primary"></v-progress-circular>
						</v-flex>
					</v-layout>
					<v-layout row wrap align-start justify-center>
						<v-flex xs12 sm4 md2 v-for="member in team" :key="member.name">
							<v-card class="elevation-0 transparent">
								<v-card-text class="text-xs-center">
									<v-avatar
										size="72"
									>
										<img :src="member.avatar">
									</v-avatar>
								</v-card-text>
								<v-card-title primary-title class="layout justify-center">
									<a v-if="member.github" :href="`https://github.com/${member.github}`" target="_blank" class="headline text-xs-center">{{ member.name }}</a>
									<p v-else class="headline text-xs-center">{{ member.name }}</p>
								</v-card-title>
								<v-card-text class="text-xs-center">
									<p class="title">{{ member.title }}</p>
									<em v-if="member.description">{{ member.description }}</em>
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
		</section>
	</div>
</template>

<script>
export default {
	data () {
		return {
			loading: true,
			team: []
		};
	},

	methods: {
		async fetchTeamMembers () {
			let _t = await fetch('https://cors-anywhere.herokuapp.com/https://gitlab.com/Lordmau5/RyujiNX-Website-Public/raw/master/team/team.json');
			this.team = await _t.json();

			this.loading = false;
		}
	},

	mounted () {
		this.fetchTeamMembers();
	}
};
</script>
