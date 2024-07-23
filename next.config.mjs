/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.pixabay.com',
              port: '',
              pathname: '/photo/**',
            },
          ],
      }
};

export default nextConfig;
