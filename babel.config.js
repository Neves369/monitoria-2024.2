module.exports = function(api) {
  // Habilita o cache para melhorar o desempenho da transpilação.
  api.cache(true);

  return {
    // Define os presets que o Babel deve usar. Neste caso, está usando o preset do Expo.
    presets: ['babel-preset-expo'],
  };
};