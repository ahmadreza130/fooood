const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching
  },
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
  target: 'serverless',
  distDir: 'out'
})
