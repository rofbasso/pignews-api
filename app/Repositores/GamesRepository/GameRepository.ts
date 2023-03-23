import Games from 'App/Models/Games'

interface GamesRepository {
  findAll(): Promise<Games[]>
}

export { GamesRepository }
