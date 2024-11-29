import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
	output: 'export',
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(txt|sh|md)$/i,
			use: 'raw-loader',
		});

		return config;
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/style')],
	},
};

export default nextConfig;
