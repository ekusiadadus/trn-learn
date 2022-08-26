/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    //styledComponents
    styledComponents: true,
  },
}

module.exports = nextConfig
