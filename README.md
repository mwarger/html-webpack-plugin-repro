Reproduction of issue

Setup default NX react application within a workspace (this is done in this repo)

Update the project.json to set the `generateIndexHtml` build option to `false`. (this is done in this repo)

Update the webpack.config to output a custom `HtmlWebpackPlugin` (this is done in this repo)

Run the app (`npx nx serve test-app`)

See error in the browser console

```
Uncaught SyntaxError: Cannot use 'import.meta' outside a module (at runtime.js:615:30)
```
