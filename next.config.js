/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: [
      'images.ctfassets.net',
    'images.wsj.net',
    's.wsj.net',
    'media.clickoncare.com',
    'm.media-amazon.com',
    'th.bing.com',
    '5.imimg.com'
  ],
  }
}


module.exports = nextConfig
