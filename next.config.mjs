import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "zustand"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "remote",
          remotes: {},
          cacheOptions: false,
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./remote": "./src/pages",
          },
          extraOptions: {
            exposePages: true,
          },
          shared: ["react", "react-dom"],
        })
      );
    }

    return config;
  },
};

export default nextConfig;
