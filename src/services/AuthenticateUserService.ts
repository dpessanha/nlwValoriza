import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)
    //Verificar se email existe
    const user = await usersRepositories.findOne({ email })

    if (!user) {
      throw new Error('Email/password incorrect.')
    }

    //Verificar se a senha está correta
    const passMatch = await compare(password, user.password)

    if (!passMatch) {
      throw new Error('Email/Password incorrect.')
    }

    //Gerar token
    const token = sign(
      {
        email: user.email,
      },
      'USHnnewuhHOYA8u107e2737nNweyf8uhuchudig*Y(Shhwi',
      { subject: user.id, expiresIn: '1d' }
    )

    return token
  }
}

export { AuthenticateUserService }
