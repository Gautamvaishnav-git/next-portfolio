/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      hostname: "**/**",
      pathname: "**"
    }]
  }
}

module.exports = nextConfig
