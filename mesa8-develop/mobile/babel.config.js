module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
      ],
    };
  };

  //Configura o Babel, que transpila o código JavaScript moderno para uma versão compatível com diferentes ambientes, 
  // garantindo suporte a recursos do ES6+ no React Native.