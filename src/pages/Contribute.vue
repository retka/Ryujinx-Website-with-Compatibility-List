<template>
  <Layout>
    <div>
      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-container grid-list-xl fluid>
            <v-layout row wrap align-start justify-center>
              <v-flex xs12 md8>
                <div class="text-xs-center">
                  <p class="display-1">How may I contribute?</p>
                  <span class="subheading">
                    <v-layout row wrap align-start justify-center class="hidden-sm-and-down">
                      <v-flex xs12 md6>
                        <p class="headline mt-4">Helping With Development</p>
                      </v-flex>
                      <v-flex xs12 md6>
                        <p class="headline mt-4">Helping With Donations</p>
                      </v-flex>
                    </v-layout>

                    <v-layout row wrap align-center justify-center class="hidden-sm-and-down">
                      <v-flex xs12 md6>
                        <p class="mt-2">
                          You may contribute if you have experience in C#, Switch Homebrew, image design, Discord management, etc.
                          It doesn't matter what you're good at. If you have any skills that you think would be useful in the development,
                          please do contact us through our Discord.
                        </p>
                      </v-flex>
                      <v-flex xs12 md6>
                        <p class="mt-2">
                          If you can't help out with development experience, there's other ways to support.
                          Whilst monetary donations are by no means required, we do appreciate them.
                          They'll go towards necessary equipment and the likes.
                          In return, there's some rewards that you as a supporter will get (for example access to a patreon-only text channel on our Discord).
                        </p>
                      </v-flex>
                    </v-layout>

                    <v-layout row wrap align-start justify-center class="hidden-sm-and-down">
                      <v-flex xs12 md6>
                        <v-btn
                          href="https://discord.gg/VkQYXAZ"
                          target="_blank"
                          dark
                          color="blue"
                          class="my-0"
                        >
                          <v-icon left>fab fa-discord</v-icon>Join our Discord!
                        </v-btn>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-btn
                          href="https://patreon.com/Ryujinx"
                          target="_blank"
                          dark
                          color="red"
                          class="my-0"
                        >
                          <v-icon left>fab fa-patreon</v-icon>Become a patron!
                        </v-btn>
                      </v-flex>
                    </v-layout>

                    <v-layout row wrap align-start justify-center class="hidden-md-and-up">
                      <v-flex xs12 md6>
                        <p class="headline mt-4">Helping With Development</p>
                        <p class="mt-2">
                          You may contribute if you have experience in C#, Switch Homebrew, image design, Discord management, etc.
                          It doesn't matter what you're good at. If you have any skills that you think would be useful in the development,
                          please do contact us through our Discord.
                        </p>

                        <v-btn
                          href="https://discord.gg/VkQYXAZ"
                          target="_blank"
                          dark
                          color="blue"
                          class="my-0"
                        >
                          <v-icon left>fab fa-discord</v-icon>Join our Discord!
                        </v-btn>
                      </v-flex>
                      <v-flex xs12 md6>
                        <p class="headline mt-4">Helping With Donations</p>
                        <p class="mt-2">
                          If you can't help out with development experience, there's other ways to support.
                          Whilst monetary donations are by no means required, we do appreciate them.
                          They'll go towards necessary equipment and the likes.
                          In return, there's some rewards that you as a supporter will get (for example access to a patreon-only text channel on our Discord).
                        </p>

                        <v-btn
                          href="https://patreon.com/Ryujinx"
                          target="_blank"
                          dark
                          color="red"
                          class="my-0"
                        >
                          <v-icon left>fab fa-patreon</v-icon>Become a patron!
                        </v-btn>
                      </v-flex>
                    </v-layout>

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
  extraPagesInfo(path: "/contribute") {
    path
    title
    keywords
  }
}
</page-query>
