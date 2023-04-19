import { Router } from 'express'

export default (router: Router): void => {
  router.get('/users', (req, res) => {
    res.status(200).json({
      ok: true,
      message: 'route is Ready'
    })
  })
}
