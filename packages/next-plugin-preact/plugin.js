module.exports = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        );
      }

      if (options.isServer) {
        config.externals = [
          "react",
          "react-dom",
          "react-ssr-prepass",
          ...config.externals,
        ];
      }

      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        react: "preact/compat",
        "react-dom": "preact/compat",
      });

      if (typeof nextConfig.webpack === "function") {
        config = nextConfig.webpack(config, options);
      }

      if (
        config.optimization &&
        config.optimization.splitChunks &&
        config.optimization.splitChunks.cacheGroups &&
        config.optimization.splitChunks.cacheGroups.framework
      ) {
        config.optimization.splitChunks.cacheGroups.framework.test = new RegExp(
          "(" +
            config.optimization.splitChunks.cacheGroups.framework.test.source +
            ")|((?<!node_modules.*)[\\/]node_modules[\\/](preact)[\\/])",
          config.optimization.splitChunks.cacheGroups.framework.test.flags
        );
      }

      return config;
    },
  });
