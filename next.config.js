/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose", "jsonwebtoken", "bcryptjs"]
  },
}

module.exports = nextConfig
