module.exports = {
  siteName: 'Ryujinx',
  siteUrl: 'https://ryujinx.org',
  titleTemplate: 'Ryujinx - %s',
  metadata: {
    siteDescription: "Ryujinx is an open source Nintendo Switch emulator written in C# for Windows and Linux.",
    siteKeywords: [
      "ryujinx",
      "switch",
      "nintendo switch",
      "emulator"
    ],
    siteAuthor: "Ryujinx",
    siteCopyright: "Ryujinx",
    siteTwitter: "@RyujinxEmu",
    coverImage: "/public/logo.png"
  },
  plugins: [
    'gridsome-plugin-robots-txt',
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 0, // we don't want the sitemap to be cached!
        exclude: [],
        config: {}
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-162558184-1'
      }
    },
  ],
  css: {
    loaderOptions: {
      scss: {
        // options here will be passed to sass-loader, nothing for now.
      }
    }
  }
}
