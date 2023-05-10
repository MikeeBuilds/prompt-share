/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        externalDir: true,
        serverComponentsExternalPackages: ["mon"]
    }
}

module.exports = nextConfig
