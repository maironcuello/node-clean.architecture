import express from 'express'
import { config as dotenv } from 'dotenv'
import middleware from '../middlewares/middleware'
import { routes } from '../routes'

export const server = express()
middleware(server)
dotenv()
routes(server)
