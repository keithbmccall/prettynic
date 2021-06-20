export const PostsQuery = `posts {
            id
            title
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
              name
              title
              picture {
                id
                url
                fileName
                width
                height
              }
            }
            content {
              raw
              html
              markdown
              text
            }
        }`;
