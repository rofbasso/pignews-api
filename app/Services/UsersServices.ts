import { CreateUserDTO } from 'App/DTO/UsersDTO'
import Users from 'App/Models/Users'
import { UsersRepository } from 'App/Repositores/usersRepository/UsersRepository'

export default class UsersServices {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async index(): Promise<Users[]> {
    const users = await this.usersRepository.findAll()

    return users
  }

  public async store(createUserDTO: CreateUserDTO): Promise<Users> {
    const userAlreadyExist = await this.usersRepository.findByPhone(createUserDTO.phone)

    if (userAlreadyExist) {
      throw new Error('User already exists')
    }

    const user = await this.usersRepository.create(createUserDTO)

    return user
  }

  public async show(id: number): Promise<Users> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }
}
