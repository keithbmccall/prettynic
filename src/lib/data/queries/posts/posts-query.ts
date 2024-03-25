/* GraphQL */
export const PostsQuery = `posts {
            id
            title
            subtitle
            slug
            date
            updatedAt
            coverImage {
              id
              fileName
              height
              width
              url
            }
            publishedAt
            excerpt
            tags
            author {
              biography
              name
              picture {
                fileName
                height
                id
                url
                width
              }
              title
            }
            content {
              raw
              html
              markdown
              text
            }
        }`;
