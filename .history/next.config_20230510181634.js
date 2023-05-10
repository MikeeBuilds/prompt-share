/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        externalDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
    webpack(con)
}

module.exports = nextConfig
