module.exports = {
  title: 'Autonomous Data',
  description: 'Let\'s make true data ownership a reality',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#f9a825' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    repo: 'noeldemartin/autonomous-data',
    sidebar: {
      '/': [
        {
          collapsable: false,
          children: [
            'introduction',
            'architecture',
            'example-use-case',
            'protocols-and-implementations',
          ],
        },
      ],
    },
  },
};
