module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'assets': './assets',
          '@assets': './src/assets',
          '@UI': './src/UI',
          '@store': './src/store',
          '@navigation': './src/navigation',
          '@screen': './src/screen',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      }
    ]
  ]
}
