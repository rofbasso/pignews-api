import UsersRepositoryImpl from 'App/Repositores/usersRepository/UsersRepositoryImpl'
import UsersServices from 'App/Services/UsersServices'

export const UsersFactory = () => {
  const usersRepository = new UsersRepositoryImpl()
  return new UsersServices(usersRepository)
}
