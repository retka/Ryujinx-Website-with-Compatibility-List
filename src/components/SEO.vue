<template>
</template>

<static-query>
query {
  metadata {
    siteAuthor
    siteCopyright
    siteName
    siteUrl
    siteDescription
    siteKeywords
    siteTwitter
    coverImage
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl
    const description = this.$page.extraPagesInfo.description || this.$static.metadata.siteDescription || ""
    const coverImage = this.$page.extraPagesInfo.coverImage || this.$static.metadata.coverImage
    const title = `${this.$static.metadata.siteName} - ${this.$page.extraPagesInfo.title}`

    var mergedKeywordsList = this.$static.metadata.siteKeywords

    if (this.$page.extraPagesInfo.keywords) {
      mergedKeywordsList = mergedKeywordsList.concat(this.$page.extraPagesInfo.keywords)
    }

    const keywords = mergedKeywordsList.join(', ')

    return {
      title: this.$page.extraPagesInfo.title,
      meta: [
        { name: "author", content: this.$static.metadata.siteAuthor },
        { name: "copyright", content: this.$static.metadata.siteCopyright},
        { name: 'keywords', content: keywords},
        { name: "description", content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US'},
        { property: 'og:site_name', content: `${this.$static.metadata.siteName}` },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: siteUrl + coverImage },
        {
          property: "og:url",
          content: siteUrl + this.$page.extraPagesInfo.path
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: this.$static.metadata.siteTwitter },
        { name: "twitter:title", content: title },
        { name: "twitter:image", content: siteUrl + coverImage },
        { name: "twitter:description", content: description }
      ],
    };
  }
};
</script>