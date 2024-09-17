/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose", "jsonwebtoken", "bcryptjs", "fastest-validator"]
  },
}

module.exports = nextConfig
