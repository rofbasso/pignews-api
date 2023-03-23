import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'
import { DateTime } from 'luxon'
import Env from '@ioc:Adonis/Core/Env'
import { v4 as uuidV4 } from 'uuid'
import moment from 'moment'
import User from 'App/Models/User'
import GamesServices from 'App/Services/GamesServices'
import { GamesFactory } from 'App/Factories/GamesFactory/GamesFactory'
import Games from 'App/Models/Games'

export default class GamesController {
  private readonly gamesService: GamesServices
  constructor() {
    this.gamesService = GamesFactory()
  }

  public async index({ response }: HttpContextContract) {
    try {
      const games = await this.gamesService.index()

      return response.status(200).json({ games })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const { mes, ano } = request.body()
    try {
      const { data: gameio } = await axios.get(
        `https://apiverdao.palmeiras.com.br/wp-json/apiverdao/v1/jogos-mes/?mes=${mes}&ano=${ano}`,
        { headers: { 'Content-Type': 'application/json' } }
      )

      let retorno: any = []

      if (gameio) {
        for (const jogo of gameio.jogos) {
          const gameAlreadyExists = await Games.findBy('apiverdao_id', `${jogo.id}`)
          if (!gameAlreadyExists && jogo.data_jogo) {
            const [dia, mes] = jogo.data_jogo.split('/')

            const data = new Date(2022, mes - 1, dia)

            console.log(jogo)

            const salvo = await Games.create({
              id: uuidV4(),
              apiverdao_id: jogo.id,
              date: DateTime.fromJSDate(data),
              home: jogo.time_casa,
              guest: jogo.time_visitante,
              time: jogo.hora1,
              ligue: jogo.campeonato,
              broadcaster: jogo.arrLinkTV ? jogo.arrLinkTV[0].title : null,
            })

            retorno.push(salvo)
          }
        }
        return response.status(200).json(retorno)
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }
  public async show({}: HttpContextContract) {}

  public async sendMessage({ response }: HttpContextContract) {
    const date = moment().format('YYYY-MM-DD')

    const token = Env.get('TOKEN')
    const apiPhoneNumber: string = Env.get('API_PHONE_NUMBER')

    try {
      const gameExists = await Games.query()
        .whereBetween('date', [`${date} 00:00:0000`, `${date} 24:00:0000`])
        .first()

      if (!gameExists) {
        throw new Error('Não tera jogo hoje')
      }

      const gameDate = moment(gameExists.$attributes.date).format('DD/MM/YYYY')

      const users = await User.all()

      for (const user of users) {
        await axios.post(
          `https://graph.facebook.com/v13.0/${apiPhoneNumber}/messages?access_token=${token}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: user.$attributes.whatsapp,
            // to: '5541998450936',
            type: 'template',
            template: {
              name: 'dia_de_jogo',
              language: {
                code: 'pt_BR',
              },
              components: [
                {
                  type: 'body',
                  parameters: [
                    {
                      type: 'text',
                      text: gameExists.$attributes.ligue.toUpperCase(),
                    },
                    {
                      type: 'text',
                      text: gameExists.$attributes.home.toUpperCase(),
                    },
                    {
                      type: 'text',
                      text: gameExists.$attributes.guest.toUpperCase(),
                    },
                    {
                      type: 'text',
                      text: gameDate,
                    },
                    {
                      type: 'text',
                      text: gameExists.$attributes.time,
                    },
                    {
                      type: 'text',
                      text: ` ${gameExists.$attributes.broadcaster}`,
                    },
                  ],
                },
              ],
            },
          }
        )
      }
      return response.status(200).json('Mensagem enviada')
    } catch (error) {
      throw new Error(error.message)
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
