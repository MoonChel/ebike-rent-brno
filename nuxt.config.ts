// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://ebike-rental-brno.netlify.app"
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  app: {
    head: {
      title: 'eBikes Rental Brno',
      meta: [
        { hid: 'description', name: 'description', content: 'Rent high-quality eBikes in Brno. Explore our fleet and book your ride today!' },
        { hid: 'keywords', name: 'keywords', content: 'eBikes, bike rental, Brno, electric bikes, eBike rental Brno' },
        { hid: 'author', name: 'author', content: 'eBikes Rental Brno' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },

        // Open Graph Tags
        { hid: 'og:title', property: 'og:title', content: 'eBikes Rental Brno' },
        { hid: 'og:description', property: 'og:description', content: 'Rent high-quality eBikes in Brno. Explore our fleet and book your ride today!' },
        { hid: 'og:image', property: 'og:image', content: 'https://ebike-rental-brno.netlify.app/.netlify/images/download.jpeg' }, // Replace with your image URL
        { hid: 'og:url', property: 'og:url', content: 'https://ebike-rental-brno.netlify.app/' }, // Replace with your site URL

        // Twitter Card Tags
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'eBikes Rental Brno' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Rent high-quality eBikes in Brno. Explore our fleet and book your ride today!' },
        { hid: 'twitter:image', name: 'twitter:image', content: '/download.jpeg' }, // Replace with your image URL
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://ebike-rental-brno.netlify.app/' } // Replace with your site URL
      ]
    }
  },
  robots: {
    UserAgent: '*',
    Disallow: '/admin'
  },
  sitemap: {
    hostname: 'https://ebike-rental-brno.netlify.app/',
    gzip: true,
    routes: [
      "/"
    ]
  }
});