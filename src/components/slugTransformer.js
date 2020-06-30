const slugTransformer = string => string.replace(/\s+/g, '-').toLowerCase();

export default slugTransformer