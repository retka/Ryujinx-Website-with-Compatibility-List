const nodeExternals = require('webpack-node-externals')
const fs = require('fs')

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
    const teamList = JSON.parse(fs.readFileSync("./content/team.json"))
    const teamCollection = actions.addCollection({
      typeName: 'Team'
    })

    for (const teamMember of teamList) {

      teamMember.description = teamMember.description | ""
      teamCollection.addNode(teamMember)
    }
  })
}
