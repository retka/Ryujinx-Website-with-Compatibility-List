<template>
  <Layout>
    <div>
      <section>
        <v-parallax :src="require('@/assets/wallp.png')" height="600">
          <v-layout column align-center justify-center class="text-xs-center">
            <g-image src="~/assets/logo.png" alt="Ryujinx" class="mb-5" width="128"/>
            <p class="display-1">A simple, experimental Nintendo Switch emulator.</p>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-layout column wrap class="mt-5" align-center>
          <v-container grid-list-xl fluid>
            <v-layout row wrap align-start justify-center>
              <v-flex xs12 md6>
                <div class="text-xs-center">
                  <p class="display-1">What is Ryujinx?</p>
                  <span class="subheading">
                    <small>
                      <em>(REE-YOU-JI-NX)</em>
                    </small>

                    <p
                      class="my-2"
                    >It is an open source Nintendo Switch Emulator written in C# created by gdkchan.</p>
                    <p
                      class="my-2"
                    >This emulator aims at providing good performance and accuracy, a friendly interface, and consistent builds.</p>
                    <p
                      class="my-2"
                    >Ryujinx is available on GitHub and is licensed under the "MIT" license.</p>

                    <v-btn
                      dark
                      color="ryu_blue"
                      href="https://github.com/Ryujinx/Ryujinx-Games-List/issues"
                    >
                      <v-icon left>fas fa-gamepad</v-icon>Game compatibility list
                    </v-btn>
                    <v-btn dark color="ryu_orange" to="/download">
                      <v-icon left>fas fa-download</v-icon>Download the latest build
                    </v-btn>
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
                    <v-icon x-large class="--text text--lighten-2">fab fa-github</v-icon>
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
                    <v-icon x-large class="--text text--lighten-2">fas fa-code</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="display-1 text-xs-center">How can I contribute?</div>
                  </v-card-title>
                  <v-card-text
                    class="text-xs-center"
                  >Please visit the contributing tab for more information.</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="--text text--lighten-2">fas fa-gamepad</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="display-1 text-xs-center">Gaming?</div>
                  </v-card-title>
                  <v-card-text
                    class="text-xs-center"
                  >Ryujinx boots lots of games, but almost none are playable, and won't be for a while.</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
        <v-parallax class="hidden-sm-and-down" :src="require('@/assets/wallp2.png')" height="200"></v-parallax>
        <v-layout column wrap align-center>
          <v-container grid-list-xl>
            <v-layout row wrap align-start>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="--text text--lighten-2 mr-4">fab fa-windows</v-icon>
                    <v-icon x-large class="--text text--lighten-2 mr-4">fab fa-apple</v-icon>
                    <v-icon x-large class="--text text--lighten-2">fab fa-linux</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="display-1 text-xs-center">Platforms</div>
                  </v-card-title>
                  <v-card-text
                    class="text-xs-center"
                  >Ryujinx is currently available for Windows, Linux, and macOS.</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="--text text--lighten-2">fab fa-discord</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="display-1 text-xs-center">Discord</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    Join the Ryujinx Discord server; you can get help,
                    as well as converse with fellow users and developers.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="--text text--lighten-2">fab fa-nintendo-switch</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="display-1 text-xs-center">Why the name?</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    The name Ryujinx is based on the name "Ryujin."
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
        <v-layout column wrap align-center>
          <v-container grid-list-xl>
            <v-layout row wrap align-start justify-center>
              <v-flex xs12>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="--text text--lighten-2">fas fa-users</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="display-1 text-xs-center">Our Team</div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout row wrap align-start justify-center>
              <v-flex xs12 sm4 md2 v-for="member in $page.teams.edges" :key="member.node.id">
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-avatar size="72">
                      <g-image alt="{{member.node.name}}'s avatar" :src="member.node.avatar" />
                    </v-avatar>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <a
                      v-if="member.node.github"
                      :href="`https://github.com/${member.node.github}`"
                      rel="noopener"
                      target="_blank"
                      class="headline text-xs-center"
                    >{{ member.node.name }}</a>
                    <p v-else class="headline text-xs-center">{{ member.name }}</p>
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    <p class="title">{{ member.node.title }}</p>
                    <em v-if="member.node.description">{{ member.node.description }}</em>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query {
  teams: allTeam(order: ASC) {
    edges {
      node {
        id
        name
        github
        avatar
        title
      }
    }
  }
  extraPagesInfo(path: "/") {
    path
    title
    keywords
  }
}
</page-query>

