const { override, addBabelPlugins } = require('customize-cra')

module.exports = override(
  ...addBabelPlugins([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '@assets': './src/assets',
        '@components': './src/components',
        '@utils': './src/utils',
        '@pages': './src/pages',
        '@hooks': './src/hooks'
      }
    }
  ])
)
