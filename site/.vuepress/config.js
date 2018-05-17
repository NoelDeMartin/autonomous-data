module.exports = {
  title: 'Autonomous Data Protocol',
  description: 'Let\'s make true data ownership a reality',
  base: '/autonomous-data/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#f9a825' }],
  ],
  themeConfig: {
    repo: 'noeldemartin/autonomous-data',
    nav: [
      {
        text: 'Guide',
        link: '/guide.html',
      },
      {
        text: 'Specification',
        link: '/specification.html'
      }
    ]
  }
}
