import { mergeResolvers } from 'merge-graphql-schemas'

import Users from './Users/'

const resolvers = [Users]

export default mergeResolvers(resolvers)
