/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'standalone',
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
};

export default nextConfig;
