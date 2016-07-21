var Babel = require('babel-standalone');
var IncreDom = require('babel-plugin-incremental-dom').default;

if (!window.metal) {
	window.metal = {};
}

window.metal.JSXTransform = function metalJSXTransform(input) {
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