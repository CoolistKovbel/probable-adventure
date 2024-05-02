/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'rose-magic-mandrill-283.mypinata.cloud',
          },
        ]
    }
}

export default nextConfig;
