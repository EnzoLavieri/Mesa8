const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })

//Configura o Metro Bundler, que é o empacotador do React Native. 
//Ele permite personalizar o comportamento do bundler, como alias de paths, 
//suporte a novos tipos de arquivos e otimizações de build.