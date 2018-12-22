<template>
	<div>
		<section>
			<v-layout
				column
				wrap
				class="my-5"
				align-center
			>
				<v-container grid-list-xl fluid>
					<v-layout row wrap align-start justify-center>
						<v-flex xs12 md6>
							<div class="text-xs-center">
								<p class="display-1">Building Ryujinx and latest downloads</p>
								<img class="text-xs-center" width="100%" src="@/assets/shell.png">
								<span class="subheading">
									<v-layout row wrap align-start justify-center>
										<v-flex xs12 md6>
											<p class="mt-4 title">Building methods</p>
											<v-btn dark color="ryu_blue" :to="{ name: 'BuildNetCore' }">
												<v-icon left>fas fa-code</v-icon>
												.NET Core
											</v-btn>
										</v-flex>
										<v-flex xs12 md6>
											<p class="mt-4 title">Automatically compiled builds</p>
											<v-tooltip top>
												<v-btn
													slot="activator"
													dark
													color="ryu_orange"
													target="_blank"
													:loading="isLoading"
													:href="`${downloadURL}-win_x64.zip`"
												>
													<v-icon>fab fa-windows</v-icon>
												</v-btn>
												<span>{{ this.version }}</span>
											</v-tooltip>
											<v-tooltip top>
												<v-btn
													slot="activator"
													dark
													color="ryu_orange"
													target="_blank"
													:loading="isLoading"
													:href="`${downloadURL}-linux_x64.tar.gz`"
												>
													<v-icon>fab fa-linux</v-icon>
												</v-btn>
												<span>{{ this.version }}</span>
											</v-tooltip>
											<v-tooltip top>
												<v-btn
													slot="activator"
													dark
													color="ryu_orange"
													target="_blank"
													:loading="isLoading"
													:href="`${downloadURL}-osx_x64.zip`"
												>
													<v-icon>fab fa-apple</v-icon>
												</v-btn>
												<span>{{ this.version }}</span>
											</v-tooltip>
											<br>
											<v-btn flat target="_blank" href="https://ci.appveyor.com/project/gdkchan/ryujinx">
												<img width="140" src="https://ci.appveyor.com/api/projects/status/ssg4jwu6ve3k594s?svg=true">
											</v-btn>
										</v-flex>
									</v-layout>
								</span>
							</div>
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
			downloadURL: '',
			isLoading: true,
			version: 'Loading ...'
		};
	},

	methods: {
		async fetchDownloadURL () {
			this.isLoading = true;

			let _f 	= await fetch('https://ci.appveyor.com/api/projects/gdkchan/ryujinx/branch/master');
			let json = await _f.json();

			this.version = json.build.version;

			let jobId = json.build.jobs[0].jobId;
			let _a = await fetch(`https://ci.appveyor.com/api/buildjobs/${jobId}/artifacts`);
			json = await _a.json();

			this.downloadURL = `https://ci.appveyor.com/api/buildjobs/${jobId}/artifacts/ryujinx-${this.version}`;
			this.isLoading = false;
		}
	},

	mounted () {
		this.fetchDownloadURL();
	}
};
</script>

