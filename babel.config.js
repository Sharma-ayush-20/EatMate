// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Node ke current version ke liye transpile
        },
      },
    ],
  ],
};
