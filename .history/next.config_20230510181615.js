/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        externalDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        
    }
}

module.exports = nextConfig
