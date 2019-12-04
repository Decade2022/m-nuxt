const pkg = require('./package')
module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { 'http-equiv': 'Cache-Control', content: 'no-cache' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'http://res.wx.qq.com/open/js/jweixin-1.4.0.js' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '~assets/css/base.css',
    { src: "swiper/dist/css/swiper.css" }
  ],
  plugins: [
    // { src: '~plugins/lodash.js', ssr: false }
    { src: "~/plugins/vue-swiper.js", ssr: false }
  ],
  modules: [
    '@nuxtjs/style-resources',
  ],
  axios: {
    prefix: 'https://test-api.rongcat.com'
  },
  styleResources: {
    scss: './assets/variables.scss',
    // sass: ...
  },
  build: {
    extend (config, ctx) {
    }
  }
}
