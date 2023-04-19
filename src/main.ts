import { server, ConnectDB } from './global'

server.listen(process.env.PORT, () => {
  console.log(`'Express server port: \x1b[32m${process.env.PORT}\x1b[0m`)
  ConnectDB()
})
