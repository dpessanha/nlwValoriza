import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Receber token
  const authToken = req.headers.authorization
  // Validar se token preenchido
  if (!authToken) {
    return res.status(401).json({ message: 'Token is missing' })
  }
  const [, token] = authToken.split(' ')
  try {
    // Validar se token é valido
    const { sub } = verify(
      token,
      'USHnnewuhHOYA8u107e2737nNweyf8uhuchudig*Y(Shhwi'
    ) as IPayload
    // Recuperar informações do usuário
    req.user_id = sub
    return next()
  } catch (err) {
    return res.status(401).json({ message: 'Token is invalid.' })
  }
}
