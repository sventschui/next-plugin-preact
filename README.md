# Next.js plugin for preact X

## Installation

```sh
npm install --save next next-plugin-preact preact react@npm:@preact/compat react-dom@npm:@preact/compat react-ssr-prepass@npm:preact-ssr-prepass preact-render-to-string
```

or

```sh
yarn add next next-plugin-preact preact react@npm:@preact/compat react-dom@npm:@preact/compat react-ssr-prepass@npm:preact-ssr-prepass preact-render-to-string
```

## Usage

Create a next.config.js in your project and apply the plugin.

```js
// next.config.js
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
    /* regular next.js config options here */
});
```

## Custom jsx-transform

If you want to use the new `jsx` transform in Next.JS with Preact you'll have to add this to your `babel` config.

```js
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "react"
        }
      }
    ]
  ]
}
``` 
