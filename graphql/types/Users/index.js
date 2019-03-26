export default `

    type NetworkType {
      parentId: ID!
    }
    
    type Users {
      _id: ID!
      network: NetworkType!
    }
    
    type Query {
      allusers: [Users!]!
      oneuser(_id: ID!): Users
    }
`;
