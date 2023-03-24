import Users from 'App/Models/Users'
import { UsersRepository } from './UsersRepository'

export default class UsersRepositoryImpl implements UsersRepository {
  public async findAll(): Promise<Users[]> {
    const users = await Users.all()

    return users
  }
}
