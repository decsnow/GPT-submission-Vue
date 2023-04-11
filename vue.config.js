const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   devServer:{
//     proxy:{
//       '/append-to-file':{
//         target:'http://api.decsnow.net',
//         ws:true,
//         changeOrigin:true,
//         rewrite:path => path.replace(/^\/api/,'',)
//       }
//     }
//   },
//   transpileDependencies: true
// })

module.exports =({
  devServer:{
    proxy:{
      '/append-to-file':{
        target:'https://api.decsnow.net',
        ws:true,
        secure:true,
        changeOrigin:true,
      }
    }
  },
  transpileDependencies: true
})
