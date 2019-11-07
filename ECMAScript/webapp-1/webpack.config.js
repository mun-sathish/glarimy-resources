config = {
   entry: './main.js',
	
   output: {
      path:'/Users/glarimy/Professional/Engineering/glarimy-resources/ECMA6/webapp-1/target',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8081
   },
	
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015']
            }
         }
      ]
   }
}

module.exports = config;
