import Users from 'App/Models/Users'

interface UsersRepository {
  findAll(): Promise<Users[]>
}

export { UsersRepository }
