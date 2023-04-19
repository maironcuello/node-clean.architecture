import { Express } from 'express'
import { bodyParser } from './bodyPaeser'
import { cors } from './cors'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}
