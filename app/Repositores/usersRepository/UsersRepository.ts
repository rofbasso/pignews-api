import { CreateUserDTO } from 'App/DTO/UsersDTO'
import Users from 'App/Models/Users'

interface UsersRepository {
  findAll(): Promise<Users[]>
  create(createUserDTO: CreateUserDTO): Promise<Users>
  findByPhone(phone: string): Promise<Users | null>
  findById(id: number): Promise<Users | null>
}

export { UsersRepository }
