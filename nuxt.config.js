
export default {
  target: 'static',
  router: {
    base: '/i-home/'
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'HAI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    	{ src: 'http://libs.baidu.com/jquery/2.0.0/jquery.min.js' },
      { src: 'http://libs.baidu.com/jqueryui/1.8.22/jquery-ui.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vue-map',
    // {src: '~/assets/live2d/assets/jquery.min.js', ssr: false},
    // {src: '~/assets/live2d/assets/jquery-ui.min.js', ssr: false},
    {src: '~/assets/live2d/assets/live2d.js', ssr: false},
    {src: '~/assets/live2d/assets/waifu-tips.js', ssr: false},
    {src: '~/assets/canvas-nest.js', ssr: false}
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
