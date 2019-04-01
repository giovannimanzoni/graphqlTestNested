import Userszz from '../../../models/Users'

export default {
  Query: {
      allusers: () => {
          return new Promise((resolve, reject) => {
              Userszz.find({})
                  .populate()
                  .exec((err, res) => {
                      err ? reject(err) : resolve(res)
                  })
          })
      },
      oneuser: (root, args) => {
          return new Promise((resolve, reject) => {
              Userszz.findOne({ _id: args._id }).exec((err, res) => {
                  err ? reject(err) : resolve(res)
              })
          })
      },


      // how to write a query for find all user that have got one specific network.parentId ?
      // thanks to https://stackoverflow.com/questions/33888195/push-in-mongodb-not-working
      findUserByParentId: (root, {parentId}) => {
          return new Promise((resolve, reject) => {
              Userszz.findOne({ 'network.parentId' : parentId}).exec((err, res) => {
                  err ? reject(err) : resolve(res)
              })
          })
      },
  }
}

