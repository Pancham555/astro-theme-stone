import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local'
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title', // ✅ points to top-level field
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        // Title (used for slug)
        title: fields.slug({
          name: { label: 'Title' },
        }),

        // Short description / excerpt
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation:{isRequired:true}
        }),

        // Publish date
        date: fields.date({
          label: 'Publish Date',
          validation:{isRequired:true}
        }),

        // Featured image
   image: fields.image({
  label: 'Featured Image',
  directory: 'public/assets/images/posts',
  publicPath: '/assets/images/posts/',
  validation:{isRequired:true}
}),

        // Full-width writing area (MDX content)
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),
  },
});
