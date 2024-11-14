const slugify = (value: unknown): string => {
	let slug = String(value);
	slug = slug.trim();
	slug = slug.toLowerCase(); // convert string to lowercase
	slug = slug
		.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
		.replace(/\s+/g, '-') // replace spaces with hyphens
		.replace(/-+/g, '-'); // remove consecutive hyphens

	return slug;
};

export default slugify;
