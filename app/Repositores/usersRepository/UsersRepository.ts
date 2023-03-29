import { CreateUserDTO, UpdateUserDTO } from 'App/DTO/UsersDTO'
import Users from 'App/Models/Users'

interface UsersRepository {
  findAll(): Promise<Users[]>
  create(createUserDTO: CreateUserDTO): Promise<Users>
  findByPhone(phone: string): Promise<Users | null>
  findById(id: number): Promise<Users | null>
  update(user: Users, updateUserDTO: UpdateUserDTO): Promise<Users>
  destroy(id: number): Promise<void>
}

export { UsersRepository }
