export const userResolvers = {
    Query: {
        user: () => {
          return {
            id: "1",
            name: "John Doe",
            email: "john.doe@example.com"
          }
        },
        users: () => {
          return [
            {
              id: "1",
              name: "John Doe",
              email: "john.doe@example.com"
            },
            {
              id: "2",
              name: "Jane Doe",
              email: "jane.doe@example.com"
            }
          ]
        }
    }
};
