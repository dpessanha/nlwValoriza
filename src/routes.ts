import { Router } from 'express'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post('/users', createUserController.handle)
router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
)
router.post('/login', authenticateUserController.handle)
router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle
)

export { router }
