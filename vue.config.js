module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Railgun',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      exclude: [
        '_redirects'
      ]
    }
  }
}
