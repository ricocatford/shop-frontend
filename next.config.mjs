/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.new.papajohns.es",
                pathname: "/pictures/pizzas/**",
            },
        ],
    },
    output: "standalone",
};

export default nextConfig;
