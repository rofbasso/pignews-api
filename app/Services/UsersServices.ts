import Users from 'App/Models/Users'
import { UsersRepository } from 'App/Repositores/usersRepository/UsersRepository'

export default class UsersServices {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async index(): Promise<Users[]> {
    const users = this.usersRepository.findAll()

    return users
  }
}
