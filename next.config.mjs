/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aayushkimehnat.vercel.app',
                port: '',
                pathname: '/assets/images/team-1-266x346.jpeg',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/aayushsh2003/AIClassOf26/blob/main/rbi_aayush.png',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'aiclassof26.vercel.app',
                port: '',
                pathname: '/assets/favicon-32x32.png',
                search: '',
            },
        ],
        domains: ['www.poornima.org', 'aiclassof26.vercel.app','aayushkimehnat.vercel.app'],
    },
};

export default nextConfig;