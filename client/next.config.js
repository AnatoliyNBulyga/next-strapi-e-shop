/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "img2.ans-media.com",
            "127.0.0.1",
            "localhost",
            "api.webmaestro.online"
        ]
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/category/1',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
