<template>
  <Layout>
    <div>
      <section>
        <v-row class="my-5" align="center">
          <v-container fluid>
            <v-row align="start" justify="center">
              <v-col cols="12" md="8">
                <div class="text-center">
                  <p class="display-1">How may I contribute?</p>
                  <span class="subheading">
                    <v-row align="start" justify="center" class="hidden-sm-and-down">
                      <v-col cols="12" md="6">
                        <p class="headline mt-4">Helping With Development</p>
                      </v-col>
                      <v-col cols="12" md="6">
                        <p class="headline mt-4">Helping With Donations</p>
                      </v-col>
                    </v-row>

                    <v-row align="center" justify="center" class="hidden-sm-and-down">
                      <v-col cols="12" md="6">
                        <p class="mt-2">
                          If you have experience in C#, Switch Homebrew, graphic/website design, software quality assurance or beta testing, Discord management, or any other skills you think may be useful in helping the Ryujinx project, please contact us at our Discord server.
                        </p>
                      </v-col>
                      <v-col cols="12" md="6">
                        <p class="mt-2">
                          If you can't help out with development experience, there's other ways to support.
                          Whilst monetary donations are by no means required, we do appreciate them.
                          They'll go towards necessary equipment and the likes.
                          In return, there's some rewards that you as a supporter will get (for example access to a patreon-only text channel on our Discord).
                        </p>
                      </v-col>
                    </v-row>

                    <v-row align="start" justify="center" class="hidden-sm-and-down">
                      <v-col cols="12" md="6">
                        <v-btn
                          href="https://discord.gg/VkQYXAZ"
                          rel="noopener"
                          target="_blank"
                          dark
                          color="blue"
                          class="my-0"
                        >
                          <v-icon left>fab fa-discord</v-icon>Join our Discord!
                        </v-btn>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-btn
                          href="https://patreon.com/Ryujinx"
                          rel="noopener"
                          target="_blank"
                          dark
                          color="red"
                          class="my-0"
                        >
                          <v-icon left>fab fa-patreon</v-icon>Become a patron!
                        </v-btn>
                      </v-col>
                    </v-row>

                    <v-row align="start" justify="center" class="hidden-md-and-up">
                      <v-col cols="12" md="6">
                        <p class="headline mt-4">Helping With Development</p>
                        <p class="mt-2">
                          If you have experience in C#, Switch Homebrew, graphic/website design, software quality assurance or beta testing, Discord management, or any other skills you think may be useful in helping the Ryujinx project, please contact us at our Discord server.
                        </p>

                        <v-btn
                          href="https://discord.gg/VkQYXAZ"
                          rel="noopener"
                          target="_blank"
                          dark
                          color="blue"
                          class="my-0"
                        >
                          <v-icon left>fab fa-discord</v-icon>Join our Discord!
                        </v-btn>
                      </v-col>
                      <v-col cols="12" md="6">
                        <p class="headline mt-4">Helping With Donations</p>
                        <p class="mt-2">
                          If you can't help out with development experience, there's other ways to support.
                          Whilst monetary donations are by no means required, we do appreciate them.
                          They'll go towards necessary equipment and the likes.
                          In return, there's some rewards that you as a supporter will get (for example access to a patreon-only text channel on our Discord).
                        </p>

                        <v-btn
                          href="https://patreon.com/Ryujinx"
                          rel="noopener"
                          target="_blank"
                          dark
                          color="red"
                          class="my-0"
                        >
                          <v-icon left>fab fa-patreon</v-icon>Become a patron!
                        </v-btn>
                      </v-col>
                    </v-row>

                    <div fluid>
                      <iframe
                        class="mt-4"
                        align="center"
                        src="https://discordapp.com/widget?id=410208534861447168&theme=dark"
                        width="100%"
                        height="400"
                        allowtransparency="true"
                        frameborder="0"
                      ></iframe>
                    </div>
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
  extraPagesInfo(path: "/contribute") {
    path
    title
    keywords
  }
}
</page-query>
