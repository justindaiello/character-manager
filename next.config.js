module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*',
      },
    ]
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
}
