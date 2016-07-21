var IncreDom = require('babel-plugin-incremental-dom').default;
var Babel = require('babel-standalone');

module.exports = function metalJSXTransform(input) {
    return Babel.transform(
      input,
      {
        plugins: [
          [
            IncreDom,
            {
                components: true,
                namespaceAttributes: true,
                prefix: 'IncrementalDOM',
                runtime: 'iDOMHelpers'
            }
          ]
         ]
      }
    ).code;
};