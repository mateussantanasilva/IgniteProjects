/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
