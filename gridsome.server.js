const nodeExternals = require('webpack-node-externals')
const fs = require('fs')

function addJSONCollection(actions,typeName, path) {
  const list = JSON.parse(fs.readFileSync(path));
  const collection = actions.addCollection({
    typeName: typeName
  })

  for (const element of list) {
    collection.addNode(element)
  }
}

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(async actions => {
    addJSONCollection(actions, "Team", "./content/team.json")
    addJSONCollection(actions, "SocialNavbarElements", "./content/ui/navbar/social.json")
  })
}
