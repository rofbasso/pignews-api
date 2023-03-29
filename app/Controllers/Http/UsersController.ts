import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UsersFactory } from 'App/Factories/GamesFactory/UsersFactory'
import User from 'App/Models/Users'
import UsersServices from 'App/Services/UsersServices'

export default class UsersController {
  private readonly usersServices: UsersServices
  constructor() {
    this.usersServices = UsersFactory()
  }
  public async index({ response }: HttpContextContract) {
    try {
      const users = await this.usersServices.index()
      return response.status(200).json({ users })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    try {
      const { name, club, phone } = request.body()

      return response.status(200).json({ name, club, phone })
    } catch (error) {
      throw new Error(`${error.message}`)
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
