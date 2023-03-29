import { CreateUserDTO } from 'App/DTO/UsersDTO'
import Users from 'App/Models/Users'
import { UsersRepository } from 'App/Repositores/usersRepository/UsersRepository'

export default class UsersServices {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async index(): Promise<Users[]> {
    const users = await this.usersRepository.findAll()

    return users
  }

  public async storte(createUserDTO: CreateUserDTO): Promise<Users> {
    const user = await this.usersRepository.create(createUserDTO)

    return user
  }
}
