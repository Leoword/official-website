const pkg = require('./package')


module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
    
  ],
  modules: [
    'bootstrap-vue/nuxt',
  ],
  build: {
    extend(config, ctx) {

    }
    // transpile 
  },
  router: {
    // middleware: will be called for every route change
  },
  // srcDir: default equal with rootDir
}
