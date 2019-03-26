import Users from '../../../models/Users'

export default {
  Query: {
      allusers: () => {
          return new Promise((resolve, reject) => {
              Users.find({})
                  .populate()
                  .exec((err, res) => {
                      err ? reject(err) : resolve(res)
                  })
          })
      },
      oneuser: (root, args) => {
          return new Promise((resolve, reject) => {
              Users.findOne({ _id: args._id }).exec((err, res) => {
                  err ? reject(err) : resolve(res)
              })
          })
      },
      // how to write a query for find all user that have got one specific network.parentId ?
  }
}

// What write for query all users with specific network.parentId ?
