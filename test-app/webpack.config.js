const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config, context) => {
  // write config to file
  const fs = require('fs');
  fs.writeFileSync(
    context.configuration + '-webpack.config.json',
    JSON.stringify(config, null, 2)
  );

  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      templateParameters: {
        mything: 'mything',
      },
    })
  );

  fs.writeFileSync(
    context.configuration + '-webpack-updated.config.json',
    JSON.stringify(config, null, 2)
  );

  return config;
});
