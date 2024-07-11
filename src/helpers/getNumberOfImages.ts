export const getNumberOfImages = (): number => {
	const images: __WebpackModuleApi.RequireContext = require.context(
		'/src/assets',
		false,
		/^.*\.jpg$/
	);

	return images.keys().length;
};
