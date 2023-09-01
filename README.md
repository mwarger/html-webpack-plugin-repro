Reproduction of issue

Setup default NX react application within a workspace

Update the project.json to set the `generateIndexHtml` build option to `false`.

Update the webpack.config to output a custom `HtmlWebpackPlugin`

Run the app

See error

```
Uncaught SyntaxError: Cannot use 'import.meta' outside a module (at runtime.js:615:30)
```
