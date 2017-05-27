module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactImageLoad',
      externals: {
        react: 'React'
      }
    }
  }
}
