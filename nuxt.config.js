module.exports = {
  // Nuxt modules
  modules: [
    'nuxt7'
  ],

  // PWA manifest
  // https://github.com/nuxt-community/pwa-module
  manifest: {
    name: 'cd nu	',
    description: 'ls -l'
  },

  // Framework7 Config
  framework7: {
    // ...
  },

  // Build configuration
  build: {
    // Extract CSS in a separated file
    extractCSS: true,

    // You can extend webpack config here
    extend (config) {
      // ...
    }
  },

  // Additional CSS configuration
  css: [
    'assets/app.css'
  ]
}
