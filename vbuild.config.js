const path = require('path')

// this will copy ./static/** to ./dist/**
module.exports = (options, req) => ({
  entry: 'src/index.js',
  dist: 'dist',
  html: {
    title: 'Vue + Vuex + Firebase Shopping Cart'
  },
  postcss: [
    // add more postcss plugins here
    // by default we have autoprefixer pre added
  ],
  webpack(cfg) {
    // the order here is important, e.g. if you need to load
    // firebase module, make sure 'node_modules' is before '.',
    // or 'firebase.json' could be loaded
    cfg.resolve.modules = [
      path.resolve('src'),
      path.resolve('node_modules'),
      path.resolve('node_modules/vbuild/node_modules'),
      path.resolve('.')
    ]
    
    return cfg
  }
})
