<template>
  <Layout>
    <div>
      <section>
        <v-row class="my-5" align="center">
          <v-container fluid>
            <v-row align="start" justify="center">
              <v-col cols="12" md="6">
                <div class="text-center">
                  <p class="display-1">Building Ryujinx and latest downloads</p>
                  <img class="text-center" width="100%" src="/public/shell.png" alt="Shell" />
                  <span class="subheading">
                    <v-row align="start" justify="center">
                      <v-col cols="12" md="6">
                        <p class="mt-4 title">Building methods</p>
                        <v-btn dark class="mx-2" color="ryu_blue" to="/build">
                          <v-icon class="ml-n1 mr-2">fas fa-code</v-icon>.NET Core
                        </v-btn>
                      </v-col>
                      <v-col cols="12" md="6">
                        <p class="mt-4 title">Automatically compiled builds</p>
                        <v-tooltip top>
                          <template v-slot:activator="{ on }">
                            <v-btn
                              v-on="on"
                              class="mx-2"
                              dark
                              color="ryu_orange"
                              target="_blank"
                              rel="noopener"
                              :loading="isLoading"
                              :href="`${downloadURL}-win_x64.zip`"
                            >
                              <v-icon class="mx-5">fab fa-windows</v-icon>
                            </v-btn>
                          </template>
                          <span>{{ version }}</span>
                        </v-tooltip>
                        <v-tooltip top>
                          <template v-slot:activator="{ on }">
                            <v-btn
                              v-on="on"
                              class="mx-2"
                              dark
                              color="ryu_orange"
                              target="_blank"
                              rel="noopener"
                              :loading="isLoading"
                              :href="`${downloadURL}-linux_x64.tar.gz`"
                            >
                              <v-icon class="mx-5">fab fa-linux</v-icon>
                            </v-btn>
                          </template>
                          <span>{{ version }}</span>
                        </v-tooltip>
                        <v-tooltip top>
                          <template v-slot:activator="{ on }">
                            <v-btn
                              v-on="on"
                              class="mx-2"
                              dark
                              color="ryu_orange"
                              target="_blank"
                              rel="noopener"
                              :loading="isLoading"
                              :href="`${downloadURL}-osx_x64.zip`"
                            >
                              <v-icon class="mx-5">fab fa-apple</v-icon>
                            </v-btn>
                          </template>
                          <span>{{ version }}</span>
                        </v-tooltip>
                        <br />
                        <v-btn
                          text
                          class="my-2"
                          target="_blank"
                          rel="noopener"
                          href="https://ci.appveyor.com/project/gdkchan/ryujinx?branch=master"
                        >
                          <g-image
                            width="140"
                            src="https://ci.appveyor.com/api/projects/status/ssg4jwu6ve3k594s?svg=true"
                          />
                        </v-btn>
                        <p class="mt-4 title">
                          Profiled builds
                          <br />
                          <span
                            class="caption"
                          >(If you're not a developer, these builds aren't for you.)</span>
                        </p>
                        <div class="text-center">
                        <div v-if="showProfiledBuilds">
                          <v-tooltip top>
                            <template v-slot:activator="{ on }">
                              <v-btn
                                v-on="on"
                                class="mx-2"
                                dark
                                color="ryu_blue"
                                target="_blank"
                                rel="noopener"
                                :loading="isLoading"
                                :href="`${downloadURL_profiled}-win_x64.zip`"
                              >
                                <v-icon class="mx-5">fab fa-windows</v-icon>
                              </v-btn>
                            </template>
                            <span>{{ this.version }}</span>
                          </v-tooltip>
                          <v-tooltip top>
                            <template v-slot:activator="{ on }">
                              <v-btn
                                v-on="on"
                                class="mx-2"
                                dark
                                color="ryu_blue"
                                target="_blank"
                                rel="noopener"
                                :loading="isLoading"
                                :href="`${downloadURL_profiled}-linux_x64.tar.gz`"
                              >
                                <v-icon class="mx-5">fab fa-linux</v-icon>
                              </v-btn>
                            </template>
                            <span>{{ this.version }}</span>
                          </v-tooltip>
                          <v-tooltip top>
                            <template v-slot:activator="{ on }">
                              <v-btn
                                v-on="on"
                                class="mx-2"
                                dark
                                color="ryu_blue"
                                target="_blank"
                                rel="noopener"
                                :loading="isLoading"
                                :href="`${downloadURL_profiled}-osx_x64.zip`"
                              >
                                <v-icon class="mx-5">fab fa-apple</v-icon>
                              </v-btn>
                            </template>
                            <span>{{ this.version }}</span>
                          </v-tooltip>
                        </div>
                        <div v-else>
                          <v-btn
                            dark
                            color="ryu_orange"
                            target="_blank"
                            rel="noopener"
                            @click.stop="showProfiledBuilds = true"
                          >I know what I'm doing</v-btn>
                        </div>
                        </div>
                      </v-col>
                    </v-row>
                  </span>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query {
  extraPagesInfo(path: "/download") {
    path
    title
    keywords
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      downloadURL: "",
      downloadURL_profiled: "",
      isLoading: true,
      version: "Loading ...",
      showProfiledBuilds: false,
      jobId_profiled: ""
    };
  },

  methods: {
    async fetchDownloadURL() {
      this.isLoading = true;

      let _f = await fetch(
        "https://ci.appveyor.com/api/projects/gdkchan/ryujinx/branch/master"
      );
      let json = await _f.json();

      this.version = json.build.version;

      const jobId = json.build.jobs[0].jobId;
      const jobIdProfiled = json.build.jobs[1].jobId;

      this.downloadURL = `https://ci.appveyor.com/api/buildjobs/${jobId}/artifacts/ryujinx-${this.version}`;
      this.downloadURL_profiled = `https://ci.appveyor.com/api/buildjobs/${jobIdProfiled}/artifacts/ryujinx-profiled-${this.version}`;

      this.isLoading = false;
    }
  },

  mounted() {
    this.fetchDownloadURL();
  }
};
</script>
