/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	async redirects() {
		return [
			{
				source: "/privacy-policy",
				destination: "/privacy-policy-grace-at-home",
				permanent: true,
			},
			{
				source: '/GUIDE',
				destination: "https://guide.getgraceathome.care",
				permanent: true,
			  },
		];
	},
};

export default nextConfig;
