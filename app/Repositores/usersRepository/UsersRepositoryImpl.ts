import { CreateUserDTO } from 'App/DTO/UsersDTO'
import Users from 'App/Models/Users'
import { UsersRepository } from './UsersRepository'

export default class UsersRepositoryImpl implements UsersRepository {
  public async create({ name, club, phone }: CreateUserDTO): Promise<Users> {
    const user = await Users.create({ name, club, phone })

    return user
  }

  public async findAll(): Promise<Users[]> {
    const users = await Users.all()

    return users
  }
}
