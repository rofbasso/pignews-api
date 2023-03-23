import GamesRepositoryImpl from 'App/Repositores/GamesRepository/GamesRepositoryImpl'
import GamesServices from 'App/Services/GamesServices'

export const GamesFactory = () => {
  const gamesRepository = new GamesRepositoryImpl()
  return new GamesServices(gamesRepository)
}
