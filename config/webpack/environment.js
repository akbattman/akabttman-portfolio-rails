const { environment } = require('@rails/webpacker')

// Bootstrap 4 has a dependency over jQuery & Popper.js:
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })

// 1
  // module : {
  //   rules: [
  //     {
  //       test: /\.mp3$/,
  //       include: SRC,
  //       loader: 'file-loader'
  //     }
  //   ]
  // }
  
// 2
  // environment.rules = [
  //   {
  //     test: /\.mp3$/,
  //     include: SRC,
  //     loader: 'file-loader' 
  //   }
  // ]

)


module.exports = environment
