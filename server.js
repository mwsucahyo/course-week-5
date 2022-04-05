const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        greeting: String 
    }
`;

const resolvers = {
    Query: {
        greeting: () => 'Hello GraphQL world'
    }
}

const server = new ApolloServer({
    typeDefs, resolvers
})
server.listen({
    port: 9000
}).then(({url}) => console.log(`Server running at ${url}`))

// console.log(typeDefs)