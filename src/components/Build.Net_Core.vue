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
								<p class="display-1">Building RyujiNX <small>(Windows only for now)</small>:</p>
								<p class="headline"><em>
									Support for OSX and Linux is limited and not really recommended for use as of late.</br>
									To get started; you will need the .NET Core 2.0 or greater runtime installed.
								</em></p>
								<span class="subheading">
									<v-layout row wrap align-start justify-center>
										<v-flex xs12>
											<p class="mt-4 title">Step one:</p>
											<p>Download NET Core, <a href="https://www.microsoft.com/net/learn/get-started/linuxredhat" target="_blank">here</a>. Then install the SDK.</p>
										</v-flex>
										<v-flex xs12 md6>
											<p class="mt-4 title">Step two (Variant one):</p>
											<p>
												After the installation of the Net Core SDK is done; go ahead and copy the Clone link from GitHub from <a href="https://github.com/gdkchan/Ryujinx" target="_blank">here</a> (via Clone or Download --> Copy HTTPS Link. Or you can download the ZIP tarball.)
												You can Git Clone the repo by using the GitBash, or you may use the second variant.
											</p>
										</v-flex>
										<v-flex xs12 md6>
											<p class="mt-4 title">Step two (Variant two):</p>
											<p>Download the ZIP Tarball. Then extract it to a directory of your choice.</p>
										</v-flex>
										<v-flex xs12>
											<p class="mt-4 title">Step three:</p>
											<p>
												Build the App using a Command prompt in the ROOT directory. You can quickly access it by Holding shift in explorer (in the RyujiNX directory) then right clicking,
												and typing the following command~ "dotnet publish -c Release -f win10-x64".
												The build directory is "root/bin/release/etc/etc."
											</p>
										</v-flex>
										<v-flex xs12>
											<p class="mt-4 title">Step four:</p>
											<p>
												In order to run a NRO or NSO; simply drag the file onto the Executable. The app will launch, and the homebrew/application will begin emulation.
												Do keep in mind, that emulation is finicky, and will most likely crash at some point.
											</p>
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
			version: 'Loading ...'
		};
	}
};
</script>

