import mongoose from 'mongoose'
import { ObjectID } from 'mongodb'

ObjectID.prototype.valueOf = function() {
  return this.toString()
}

const Schema = mongoose.Schema

// Create the View Schema.
const UsersSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    network: {
        parentId: {
        type: Schema.Types.ObjectId,
        required: true
      }
    }
  },
  {
    collection: 'users'
  }
)

export default mongoose.model('Users', UsersSchema)
