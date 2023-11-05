/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['lh3.googleusercontent.com', "res.cloudinary.com"]
    }
    
}

module.exports = nextConfig
// ⚠ The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead.