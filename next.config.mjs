import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [],
    },
    headers: async () => {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Developed-By',
                        value: '',
                    }
                ],
            },
        ];
    },
}

const millionConfig = {
    auto: { rsc: true },
    mute: true,
};

export default nextConfig

// export default million.next(nextConfig, millionConfig);
