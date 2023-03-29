import { CreateUserDTO, UpdateUserDTO } from 'App/DTO/UsersDTO'
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

  public async findByPhone(phone: string): Promise<Users | null> {
    const user = await Users.findBy('phone', phone)
    return user
  }

  public async findById(id: number): Promise<Users | null> {
    const user = await Users.findBy('id', id)
    return user
  }

  public async update(user: Users, updateUserDTO: UpdateUserDTO): Promise<Users> {
    const returnUser = await user.merge(updateUserDTO).save()

    return returnUser
  }

  public async destroy(id: number): Promise<void> {
    await Users.query().delete().where('id', id)
  }
}
