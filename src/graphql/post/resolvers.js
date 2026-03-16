export const postResolvers = {
    Query: {
        post: () => {
          return {
            id: "1",
            title: "First Post",
            content: "This is the content of the first post."
          }
        },
        posts: () => {
          return [
            {
              id: "1",
              title: "First Post",
              content: "This is the content of the first post."
            },
            {
              id: "2",
              title: "Second Post",
              content: "This is the content of the second post."
            }
          ]
        }
    }
};
