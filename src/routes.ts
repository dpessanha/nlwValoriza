import { Router } from 'express'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { ListComplimentsReceivedByUserController } from './controllers/ListComplimentsReceivedByUserController'
import { ListComplimentsSentByUserController } from './controllers/ListComplimentsSentByUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listComplimentsReceivedByUserController =
  new ListComplimentsReceivedByUserController()
const listComplimentsSentByUserController =
  new ListComplimentsSentByUserController()

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
router.get(
  '/users/compliments/sent',
  ensureAuthenticated,
  listComplimentsSentByUserController.handle
)
router.get(
  '/users/compliments/received',
  ensureAuthenticated,
  listComplimentsReceivedByUserController.handle
)

export { router }
