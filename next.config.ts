import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: 'export',
	webpack: (config) => {
		config.module.rules.push({
			test: /\.txt$/i,
			use: 'raw-loader',
		});

		return config;
	}
};

export default nextConfig;
