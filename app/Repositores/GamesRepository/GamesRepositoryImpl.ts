import Games from 'App/Models/Games'
import { GamesRepository } from './GameRepository'

export default class GamesRepositoryImpl implements GamesRepository {
  public async findAll(): Promise<Games[]> {
    const games = await Games.all()

    return games
  }
}
