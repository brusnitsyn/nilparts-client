module.exports = {
  plugins: [
    require('unplugin-vue-components/webpack')({
      resolvers: [
        require('unplugin-icons/resolver')({
          prefix: 'Icon'
        })
      ]
    }),
  ],
}
