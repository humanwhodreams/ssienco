import { createMDX } from 'fumadocs-mdx/next';

const withMdx = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
        port: '',
        pathname: '',
      },
    ],
  },
};

export default withMdx(config);
