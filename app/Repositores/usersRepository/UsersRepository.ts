import { CreateUserDTO } from 'App/DTO/UsersDTO'
import Users from 'App/Models/Users'

interface UsersRepository {
  findAll(): Promise<Users[]>
  create(createUserDTO: CreateUserDTO): Promise<Users>
}

export { UsersRepository }
