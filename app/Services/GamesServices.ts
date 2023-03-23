import Games from 'App/Models/Games'
import { GamesRepository } from 'App/Repositores/GamesRepository/GameRepository'

export default class GamesServices {
  constructor(private readonly gamesRepository: GamesRepository) {}

  public async index(): Promise<Games[]> {
    const games = await this.gamesRepository.findAll()

    return games
  }
}
