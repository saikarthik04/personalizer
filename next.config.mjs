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
      async exportPathMap(defaultPathMap) {
        // Exclude dynamic API routes from static export
        const excludedPaths = ['/api/auth/[...nextauth]'];
        const pathMap = {};
        Object.keys(defaultPathMap).forEach((path) => {
          if (!excludedPaths.includes(path)) {
            pathMap[path] = defaultPathMap[path];
          }
        });
        return pathMap;
      },
};

export default nextConfig;
