import express from 'express'
import expressGraphQL from 'express-graphql'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import schema from './graphql/'
import { mongoURI as dbm } from './config/keys'

const app = express()
const PORT = process.env.PORT || '4099'

// Connect to MongoDB with Mongoose.
setTimeout(function() {
  mongoose
    .connect(
      dbm,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        family: 4
      }
    )
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

  app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressGraphQL({
      schema,
      graphiql: true
    })
  )

  // Serve static assets if in production.
  if (process.env.NODE_ENV === 'production') {
    // Set static folder.
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  }

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}, 10000);
