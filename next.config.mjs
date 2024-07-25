/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.pixabay.com',
              port: '',
              pathname: '/photo/**',
            },
          ],
          unoptimized:false,
      },
      basePath: '/personalizer',
      async exportPathMap(defaultPathMap) {
        delete defaultPathMap['/api/auth/[...nextauth]'];
        return defaultPathMap;
      },
};

export default nextConfig;